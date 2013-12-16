JS.Package=new JS.Class('Package',{initialize:function(a){this._1=a;this._0=[];this._2=[];this._3=[];this._4=[];this._5=false},addDependency:function(a){if(JS.indexOf(this._0,a)===-1)this._0.push(a)},addSoftDependency:function(a){if(JS.indexOf(this._2,a)===-1)this._2.push(a)},_6:function(a,b){var c=a[b];if(typeof c==='string')c=a[b]=this.klass.getByName(c);return c},addName:function(a){if(JS.indexOf(this._3,a)!==-1)return;this._3.push(a);this.klass.getFromCache(a).pkg=this},depsComplete:function(a){a=a||this._0;var b=a.length,c;while(b--){if(!this._6(a,b).isComplete())return false}return true},isComplete:function(){return this.isLoaded()&&this.depsComplete(this._0)&&this.depsComplete(this._2)},isLoaded:function(a){if(this._d)return true;var b=this._3,c=b.length,d;while(c--){d=this.klass.getObject(b[c]);if(d!==undefined)continue;if(a)throw new Error('Expected package at '+this._1+' to define '+b[c]);else return false}return this._d=true},readyToLoad:function(){return!this.isLoaded()&&this.depsComplete()},expand:function(a){var b=a||[],c,d;d=this._0.length;while(d--)this._6(this._0,d).expand(b);if(JS.indexOf(b,this)===-1)b.push(this);d=this._2.length;while(d--)this._6(this._2,d).expand(b);return b},onload:function(a){this._9=a},load:function(c,d){if(this._1===undefined)throw new Error('No load path specified for '+this._3.join(', '));var f=this,e,g;e=function(){f._5=false;c.call(d||null)};if(this.isLoaded())return setTimeout(e,1);this._4.push(e);if(this._5)return;g=function(){if(JS.isFn(f._9))f._9();f.isLoaded(true);for(var a=0,b=f._4.length;a<b;a++)f._4[a]();f._4=[]};this._5=true;JS.isFn(this._1)?this._1(g):this.klass.Loader.loadFile(this._1,g)},toString:function(){return'Package:'+this._3[0]},extend:{_a:{},_b:{},_c:this,getByPath:function(a){var b=a.toString();return this._a[b]||(this._a[b]=new this(a))},getFromCache:function(a){return this._b[a]=this._b[a]||{}},getByName:function(a){var b=this.getFromCache(a);if(b.pkg)return b.pkg;var c=new this();c.addName(a);return c},getObject:function(a){var b=this.getFromCache(a);if(b.obj!==undefined)return b.obj;var c=this._c,d=a.split('.'),f;while(f=d.shift())c=c&&c[f];return this.getFromCache(a).obj=c},expand:function(a){var b=[],c,d;for(c=0,d=a.length;c<d;c++)a[c].expand(b);return b},load:function(a,b,c){var d=[],f=[],e=a.length,g;while(e--){g=a[e];if(g.isComplete())b-=1;else(g.readyToLoad()?d:f).push(g)}if(b===0)return c();e=d.length;while(e--)d[e].load(function(){this.load(f,--b,c)},this)}}});JS.Package.extend({DomLoader:{usable:function(){return!!JS.Package.getObject('window.document.getElementsByTagName')},__FILE__:function(){var a=document.getElementsByTagName('script');return a[a.length-1].src},loadFile:function(c,d){var f=this,e=document.createElement('script');e.type='text/javascript';e.src=c;e.onload=e.onreadystatechange=function(){var a=e.readyState,b=e.status;if(!a||a==='loaded'||a==='complete'||(a===4&&b===200)){d();e.onload=e.onreadystatechange=f._e;e=null}};window.console&&console.info('Loading '+c);document.getElementsByTagName('head')[0].appendChild(e)},_e:function(){}},ServerLoader:{usable:function(){return JS.isFn(JS.Package.getObject('load'))&&JS.isFn(JS.Package.getObject('version'))},setup:function(){var b=this;load=(function(a){return function(){b._f=arguments[0];return a.apply(JS.Package._c,arguments)}})(load)},__FILE__:function(){return this._f},loadFile:function(a,b){load(a);b()}}});(function(){var a=[JS.Package.DomLoader,JS.Package.ServerLoader],b=a.length,c,d;for(c=0;c<b;c++){d=a[c];if(d.usable()){JS.Package.Loader=d;if(d.setup)d.setup();break}}})();JS.Package.extend({DSL:{__FILE__:function(){return JS.Package.Loader.__FILE__()},pkg:function(a,b){var c=b?JS.Package.getByPath(b):JS.Package.getByName(a);c.addName(a);return new JS.Package.Description(c)},file:function(a){var b=JS.Package.getByPath(a);return new JS.Package.Description(b)},load:function(a,b){JS.Package.Loader.loadFile(a,b)}},Description:new JS.Class({initialize:function(a){this._7=a},_8:function(a,b){var c=b.length,a=this._7[a],d;for(d=0;d<c;d++)a.call(this._7,b[d]);return this},provides:function(){return this._8('addName',arguments)},requires:function(){return this._8('addDependency',arguments)},uses:function(){return this._8('addSoftDependency',arguments)},setup:function(a){this._7.onload(a);return this}})});JS.Package.DSL.loader=JS.Package.DSL.file;JS.Packages=function(a){a.call(JS.Package.DSL)};JS.require=function(){var a=JS.array(arguments),b=[];while(typeof a[0]==='string')b.push(JS.Package.getByName(a.shift()));b=JS.Package.expand(b);var c=false,d=function(){if(c)return;c=true;a[0]&&a[0].call(a[1]||null)};JS.Package.load(b,b.length,d)};require=JS.require;