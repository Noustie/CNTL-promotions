/**
* Analytics v1.0
* Copyright (c) 2009 McKinney & Silver <http://mckinney.com/>
* Authors: Brett Buddin <brett.buddin@mckinney.com>
* This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

// Cruft required by ClearSaleing
var _csGenShoppingCartData;
var csAjaxTracking = true;
var salesStageCode;
var csOrderType;
var orderNum;

(function() {
  var Analytics = {};

  Analytics.track = function(slug) {
    return Analytics.clicks[slug]();
  };
  
  var Tracker = {};
  Tracker.random_number = function() {
    var axel = Math.random() + "";
    return axel * 10000000000000;
  };

  function mixin(source, target) {
    for(var param in source) {
      target[param] = source[param];
    }
  }
  

  // Google Analytics
  ////////////////////////////////////////////////////////////////// 
  ////////////////////////////////////////////////////////////////// 
  // Example:
  //   Analytics.Google.load('UA-XXXXXX-X'); 
  //   Analytics.Google.dispatch_event('/Tag');

  var Google = {};

  Google.load = function(account_id, options) {
    Google.options = $.extend({ account_id: account_id, prefix:'' }, options);

    JS.Packages(function() { 
      var gaJsHost = (('https:' == document.location.protocol) ? 'https://ssl.' : 'http://www.');
      this.file(gaJsHost + 'google-analytics.com/ga.js').provides('_gat');

      this.loader(function(cb) {
        window.pageTracker = _gat._getTracker(account_id);
        cb();
      }).provides('pageTracker').requires('_gat');
    });

    this.dispatch_event();
  };

  Google.dispatch_event = function(tag) {
    require('pageTracker', function() {
      if (typeof(tag) !== 'undefined') {
        pageTracker._trackPageview(Google.options.prefix + '/' + tag);
      } else {
        pageTracker._trackPageview();
      }
    });
  };


  // DART
  ////////////////////////////////////////////////////////////////// 
  ////////////////////////////////////////////////////////////////// 
  // Example:
  //   Analytics.Dart.load('source', 'type'); 
  //   Analytics.Dart.dispatch_event('tag'[, Analytics.Dart.random_number()]);

  var Dart = {}; 
  mixin(Tracker, Dart);

  Dart.load = function(source, type) {
    Dart.options = { source: source, type: type };
  };
  
  Dart.dispatch_floodlight_event = function(cat, random_number) {
    random_number = typeof(random_number) !== 'undefined' ? random_number : this.random_number();

    if($('#DCLK_FLDiv').length !== 0) {
      var div = $('#DCLK_FLDiv');
    } else {
      var div = $('<div>');
      div.attr('id', 'DCLK_FLDiv');
      div.css({position: 'absolute', visibility:'hidden', top: '0px'});
      $('body').append(div);
    }
    div.html('<iframe id="DCLK_FLIframe" src="http://fls.doubleclick.net/activityi;src=' + this.options.source + ';type=' + this.options.type + ';cat=' + cat + ';ord='+ cat + '-' + random_number + '?" style="width:1px;height:1px"></iframe>'); 
  };

  Dart.dispatch_spotlight_event = function(cat, random_number) {
    random_number = typeof(random_number) !== 'undefined' ? random_number : this.random_number();
    
    var spotpix = new Image();
    spotpix.src = 'http://fls.doubleclick.net/activityi;src=' + this.options.source + ';type=' + this.options.type + ';cat=' + cat + ';ord=' + random_number + '?';
  };

  Dart.dispatch_event = function(implem, cat, random_number) {
    random_number = typeof(random_number) !== 'undefined' ? random_number : this.random_number();

    if (implem === 'floodlight') {
      Dart.dispatch_floodlight_event(cat, random_number);
    } else if (implem === 'spotlight') {
      Dart.dispatch_spotlight_event(cat, random_number);
    } else {
      throw "Unknown Dart implementation method.";
    }
  };


  // WebTrends
  ////////////////////////////////////////////////////////////////// 
  ////////////////////////////////////////////////////////////////// 
  // Example:
  //   Analytics.WebTrends.load('http://somewhereville.com/file.js'); 
  //   Analytics.WebTrends.dispatch_event('tag', 'Name of Tag');

  var WebTrends = {};

  WebTrends.load = function(file, options) {
    WebTrends.options = $.extend({ file: file, cg_n: '', seg_4: '', cskpi: '' }, options);
    
    $("head").append('<meta name="WT.cg_n" content="' + WebTrends.options.cg_n + '"/>');
    $("head").append('<meta name="WT.seg_4" content="' + WebTrends.options.seg_4 + '"/>');
    $("head").append('<meta name="DCSext.CSKPI" content="' + WebTrends.options.cskpi + '"/>');

    JS.Packages(function() { 
      this.file(file).provides('WebTrends');
      this.loader(function(cb) {
        window._tag = new window.WebTrends();
        _tag.dcsGetId();
        _tag.dcsCollect();
        cb();
      }).provides('_tag').requires('WebTrends');
    });

    require('_tag', function(){ /* Force download */ });
  };

  WebTrends.dispatch_event = function(url, name) {
    require('_tag', function() {
      var parsed_uri = parseUri(url);
      dcsMultiTrack('DCS.dcssip', parsed_uri.host, 'DCS.dcsuri', parsed_uri.path, 'WT.ti', name);
    });
  };


  // ClearSaleing
  ////////////////////////////////////////////////////////////////// 
  ////////////////////////////////////////////////////////////////// 
  // Example:
  //   Analytics.Dart.load('account_id'); 
  //   Analytics.Dart.dispatch_event('tag', 'prefix'[, Analytics.ClearSaleing.random_number()]);

  var ClearSaleing = {};
  mixin(Tracker, ClearSaleing);

  ClearSaleing.load = function(account_id) {
    ClearSaleing.options = { account_id: account_id };

    JS.Packages(function() { 
      this.file('https://dsa.csdata1.com/data/js/' + account_id + '/edata1.js').provides('csExecuteTracker');
    });
    require('csExecuteTracker', function(){ /* Force download */ });
  };

  ClearSaleing.dispatch_event = function(tag, prefix, random_number) {
    random_number = typeof(random_number) !== 'undefined' ? random_number : this.random_number();

    require('csExecuteTracker', function() {
      csOrderType = tag;
      salesStageCode = 'Closed/Won';
      orderNum = prefix + '-' + random_number;
      csExecuteShoppingCart();
      csExecuteTracker();
    });
  };


  // Omniture
  ////////////////////////////////////////////////////////////////// 
  ////////////////////////////////////////////////////////////////// 
  // Example:
  //   Analytics.Omniture.load('http://somewhereville.com/s_file.js'); 
  //   Analytics.Omniture.dispatch_event('tag');

  var Omniture = {};
  
  Omniture.load = function(s_file, options) {
    var defaults = {
      s_file:s_file,
      page_name:'', 
      server:'',
      products:'',
      page_type:'',
      prop1:'',
      prop2:'',
      prop3:'',
      prop4:'',
      prop5:'',
      prop20:'',
      campaign:'',
      state:'',
      zip:'',
      events:'prodView',
      products:'',
      purchase_id:'',
      e_var1:'',
      e_var2:'',
      e_var3:'',
      e_var4:'',
      e_var5:''
    };
    Omniture.options = $.extend(defaults, options);

    JS.Packages(function() { 
      this.file(s_file).provides('s');
      this.loader(function(cb) {
        s.pageName = this.options.page_name;
        s.server = this.options.server;
        s.channel = this.options.channel;
        s.pageType = this.options.page_type;
        s.prop1 = this.options.prop1;
        s.prop2 = this.options.prop2;
        s.prop3 = this.options.prop3;
        s.prop4 = this.options.prop4;
        s.prop5 = this.options.prop5;
        /* Conversion Variables */
        s.campaign = this.options.campaign;
        s.state = this.options.state;
        s.zip = this.options.zip;
        s_events = this.options.events;
        s_products = this.options.products;
        s.purchaseID = this.options.purchase_id;

        window.s_code = s.t();
        if (window.s_code) {
          document.write(s_code);
        }
        cb();
      }).provides('s_code').requires('s');
    });

    require('s_code', function(){ /* Force download */ });
  };

  Omniture.dispatch_event = function(url,tag) {
    require('s_code', function() {
      trackClick.call(url,tag);
    });
  };

  
  Analytics.Google = Google;
  Analytics.Dart = Dart;
  Analytics.WebTrends = WebTrends;
  Analytics.ClearSaleing = ClearSaleing;
  Analytics.Omniture = Omniture;

  window.Analytics = Analytics;

  // Examples:
  //   $(SELECTOR).click_and_track(function() {}, Analytics.Google, '/event');
  //   $(SELECTOR).click_and_track(function() {}, Analytics.Dart, 'tag', 'prefix'[, Analytics.ClearSaleing.random_number()]);

  $.fn.click_and_track = function(func, system) {
    var args = Array().slice.call(arguments);
    $(this).click(function() {
      system.dispatch_event.apply(this, args.slice(2));
      return func.call(this);
    });
  };
})();


// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
function parseUri (str) {
  var o = parseUri.options,
      m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
      uri = {},
      i = 14;

  while (i--) uri[o.key[i]] = m[i] || "";

  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });

  return uri;
}
parseUri.options = {
  strictMode: false,
  key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
  q:   {
    name:   "queryKey",
    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
  },
  parser: {
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
}
// end parseUri
