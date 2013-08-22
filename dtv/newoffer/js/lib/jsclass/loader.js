JS={extend:function(a,b){b=b||{};for(var c in b){if(a[c]===b[c])continue;a[c]=b[c]}return a},makeFunction:function(){return function(){return this.initialize?(this.initialize.apply(this,arguments)||this):this}},makeBridge:function(a){var b=function(){};b.prototype=a.prototype;return new b},bind:function(){var a=JS.array(arguments),b=a.shift(),c=a.shift()||null;return function(){return b.apply(c,a.concat(JS.array(arguments)))}},callsSuper:function(a){return a.SUPER===undefined?a.SUPER=/\bcallSuper\b/.test(a.toString()):a.SUPER},mask:function(a){var b=a.toString().replace(/callSuper/g,'super');a.toString=function(){return b};return a},array:function(a){if(!a)return[];if(a.toArray)return a.toArray();var b=a.length,c=[];while(b--)c[b]=a[b];return c},indexOf:function(a,b){for(var c=0,d=a.length;c<d;c++){if(a[c]===b)return c}return-1},isFn:function(a){return a instanceof Function},isType:function(a,b){if(!a||!b)return false;return(b instanceof Function&&a instanceof b)||(typeof b==='string'&&typeof a===b)||(a.isA&&a.isA(b))},ignore:function(a,b){return/^(include|extend)$/.test(a)&&typeof b==='object'}};JS.Module=JS.makeFunction();JS.extend(JS.Module.prototype,{END_WITHOUT_DOT:/([^\.])$/,initialize:function(a,b,c){this.__mod__=this;this.__inc__=[];this.__fns__={};this.__dep__=[];this.__mct__={};if(typeof a==='string'){this.__nom__=this.displayName=a}else{this.__nom__=this.displayName='';c=b;b=a}c=c||{};this.__res__=c._6||null;if(b)this.include(b,false);if(JS.Module.__chainq__)JS.Module.__chainq__.push(this)},setName:function(a){this.__nom__=this.displayName=a||'';for(var b in this.__mod__.__fns__)this.__name__(b);if(a&&this.__meta__)this.__meta__.setName(a+'.')},__name__:function(a){if(!this.__nom__)return;var b=this.__mod__.__fns__[a]||{};a=this.__nom__.replace(this.END_WITHOUT_DOT,'$1#')+a;if(JS.isFn(b.setName))return b.setName(a);if(JS.isFn(b))b.displayName=a},define:function(a,b,c,d){var f=(d||{})._1||this;this.__fns__[a]=b;this.__name__(a);if(JS.Module._1&&f&&JS.isFn(b))JS.Module._1(a,f);if(c!==false)this.resolve()},instanceMethod:function(a){var b=this.lookup(a).pop();return JS.isFn(b)?b:null},instanceMethods:function(a,b){var c=this.__mod__,b=b||[],d=c.ancestors(),f=d.length,e;for(e in c.__fns__){if(c.__fns__.hasOwnProperty(e)&&JS.isFn(c.__fns__[e])&&JS.indexOf(b,e)===-1)b.push(e)}if(a===false)return b;while(f--)d[f].instanceMethods(false,b);return b},include:function(a,b,c){b=(b!==false);if(!a)return b?this.resolve():this.uncache();c=c||{};if(a.__mod__)a=a.__mod__;var d=a.include,f=a.extend,e=c._h||this,g,h,i,j;if(a.__inc__&&a.__fns__){this.__inc__.push(a);a.__dep__.push(this);if(c._7)a.extended&&a.extended(c._7);else a.included&&a.included(e)}else{if(c._i){for(h in a){if(JS.ignore(h,a[h]))continue;this.define(h,a[h],false,{_1:e||c._7||this})}}else{if(typeof d==='object'||JS.isType(d,JS.Module)){g=[].concat(d);for(i=0,j=g.length;i<j;i++)e.include(g[i],b,c)}if(typeof f==='object'||JS.isType(f,JS.Module)){g=[].concat(f);for(i=0,j=g.length;i<j;i++)e.extend(g[i],false);e.extend()}c._i=true;return e.include(a,b,c)}}b?this.resolve():this.uncache()},includes:function(a){var b=this.__mod__,c=b.__inc__.length;if(Object===a||b===a||b.__res__===a.prototype)return true;while(c--){if(b.__inc__[c].includes(a))return true}return false},match:function(a){return a.isA&&a.isA(this)},ancestors:function(a){var b=this.__mod__,c=(a===undefined),d=(b.__res__||{}).klass,f=(d&&b.__res__===d.prototype)?d:b,e,g;if(c&&b.__anc__)return b.__anc__.slice();a=a||[];for(e=0,g=b.__inc__.length;e<g;e++)b.__inc__[e].ancestors(a);if(JS.indexOf(a,f)===-1)a.push(f);if(c)b.__anc__=a.slice();return a},lookup:function(a){var b=this.__mod__,c=b.__mct__;if(c[a])return c[a].slice();var d=b.ancestors(),f=[],e,g,h;for(e=0,g=d.length;e<g;e++){h=d[e].__mod__.__fns__[a];if(h)f.push(h)}c[a]=f.slice();return f},make:function(a,b){if(!JS.isFn(b)||!JS.callsSuper(b))return b;var c=this;return function(){return c.chain(this,a,arguments)}},chain:JS.mask(function(c,d,f){var e=this.lookup(d),g=e.length-1,h=c.callSuper,i=JS.array(f),j;c.callSuper=function(){var a=arguments.length;while(a--)i[a]=arguments[a];g-=1;var b=e[g].apply(c,i);g+=1;return b};j=e.pop().apply(c,i);h?c.callSuper=h:delete c.callSuper;return j}),resolve:function(a){var b=this.__mod__,a=a||b,c=a.__res__,d,f,e,g;if(a===b){b.uncache(false);d=b.__dep__.length;while(d--)b.__dep__[d].resolve()}if(!c)return;for(d=0,f=b.__inc__.length;d<f;d++)b.__inc__[d].resolve(a);for(e in b.__fns__){g=a.make(e,b.__fns__[e]);if(c[e]!==g)c[e]=g}},uncache:function(a){var b=this.__mod__,c=b.__dep__.length;b.__anc__=null;b.__mct__={};if(a===false)return;while(c--)b.__dep__[c].uncache()}});JS.Class=JS.makeFunction();JS.extend(JS.Class.prototype=JS.makeBridge(JS.Module),{initialize:function(a,b,c){if(typeof a==='string'){this.__nom__=this.displayName=a}else{this.__nom__=this.displayName='';c=b;b=a}var d=JS.extend(JS.makeFunction(),this);d.klass=d.constructor=this.klass;if(!JS.isFn(b)){c=b;b=Object}d.inherit(b);d.include(c,false);d.resolve();do{b.inherited&&b.inherited(d)}while(b=b.superclass);return d},inherit:function(a){this.superclass=a;if(this.__eigen__&&a.__eigen__)this.extend(a.__eigen__(),true);this.subclasses=[];(a.subclasses||[]).push(this);var b=this.prototype=JS.makeBridge(a);b.klass=b.constructor=this;this.__mod__=new JS.Module(this.__nom__,{},{_6:this.prototype});this.include(JS.Kernel,false);if(a!==Object)this.include(a.__mod__||new JS.Module(a.prototype,{_6:a.prototype}),false)},include:function(a,b,c){if(!a)return;var d=this.__mod__,c=c||{};c._h=this;return d.include(a,b,c)},define:function(a,b,c,d){var f=this.__mod__;d=d||{};d._1=this;f.define(a,b,c,d)}});JS.Module=new JS.Class('Module',JS.Module.prototype);JS.Class=new JS.Class('Class',JS.Module,JS.Class.prototype);JS.Module.klass=JS.Module.constructor=JS.Class.klass=JS.Class.constructor=JS.Class;JS.extend(JS.Module,{_d:[],__chainq__:[],methodAdded:function(a,b){this._d.push([a,b])},_1:function(a,b){var c=this._d,d=c.length;while(d--)c[d][0].call(c[d][1]||null,a,b)}});JS.Kernel=JS.extend(new JS.Module('Kernel',{__eigen__:function(){if(this.__meta__)return this.__meta__;var a=this.__nom__,b=this.klass.__nom__,c=a||(b?'#<'+b+'>':''),d=this.__meta__=new JS.Module(c?c+'.':'',{},{_6:this});d.include(this.klass.__mod__,false);return d},equals:function(a){return this===a},extend:function(a,b){return this.__eigen__().include(a,b,{_7:this})},hash:function(){return this.__hashcode__=this.__hashcode__||JS.Kernel.getHashCode()},isA:function(a){return this.__eigen__().includes(a)},method:function(a){var b=this,c=b.__mcache__=b.__mcache__||{};if((c[a]||{}).fn===b[a])return c[a].bd;return(c[a]={fn:b[a],bd:JS.bind(b[a],b)}).bd},methods:function(){return this.__eigen__().instanceMethods(true)},tap:function(a,b){a.call(b||null,this);return this}}),{__hashIndex__:0,getHashCode:function(){this.__hashIndex__+=1;return(Math.floor(new Date().getTime()/1000)+this.__hashIndex__).toString(16)}});JS.Module.include(JS.Kernel);JS.extend(JS.Module,JS.Kernel.__fns__);JS.Class.include(JS.Kernel);JS.extend(JS.Class,JS.Kernel.__fns__);JS.Interface=new JS.Class({initialize:function(d){this.test=function(a,b){var c=d.length;while(c--){if(!JS.isFn(a[d[c]]))return b?d[c]:false}return true}},extend:{ensure:function(){var a=JS.array(arguments),b=a.shift(),c,d;while(c=a.shift()){d=c.test(b,true);if(d!==true)throw new Error('object does not implement '+d+'()');}}}});JS.Singleton=new JS.Class({initialize:function(a,b,c){return new(new JS.Class(a,b,c))}});JS.Package=new JS.Class('Package',{initialize:function(a){this._2=a;this._0=[];this._3=[];this._4=[];this._5=[];this._8=false},addDependency:function(a){if(JS.indexOf(this._0,a)===-1)this._0.push(a)},addSoftDependency:function(a){if(JS.indexOf(this._3,a)===-1)this._3.push(a)},_9:function(a,b){var c=a[b];if(typeof c==='string')c=a[b]=this.klass.getByName(c);return c},addName:function(a){if(JS.indexOf(this._4,a)!==-1)return;this._4.push(a);this.klass.getFromCache(a).pkg=this},depsComplete:function(a){a=a||this._0;var b=a.length,c;while(b--){if(!this._9(a,b).isComplete())return false}return true},isComplete:function(){return this.isLoaded()&&this.depsComplete(this._0)&&this.depsComplete(this._3)},isLoaded:function(a){if(this._j)return true;var b=this._4,c=b.length,d;while(c--){d=this.klass.getObject(b[c]);if(d!==undefined)continue;if(a)throw new Error('Expected package at '+this._2+' to define '+b[c]);else return false}return this._j=true},readyToLoad:function(){return!this.isLoaded()&&this.depsComplete()},expand:function(a){var b=a||[],c,d;d=this._0.length;while(d--)this._9(this._0,d).expand(b);if(JS.indexOf(b,this)===-1)b.push(this);d=this._3.length;while(d--)this._9(this._3,d).expand(b);return b},onload:function(a){this._e=a},load:function(c,d){if(this._2===undefined)throw new Error('No load path specified for '+this._4.join(', '));var f=this,e,g;e=function(){f._8=false;c.call(d||null)};if(this.isLoaded())return setTimeout(e,1);this._5.push(e);if(this._8)return;g=function(){if(JS.isFn(f._e))f._e();f.isLoaded(true);for(var a=0,b=f._5.length;a<b;a++)f._5[a]();f._5=[]};this._8=true;JS.isFn(this._2)?this._2(g):this.klass.Loader.loadFile(this._2,g)},toString:function(){return'Package:'+this._4[0]},extend:{_f:{},_g:{},_a:this,getByPath:function(a){var b=a.toString();return this._f[b]||(this._f[b]=new this(a))},getFromCache:function(a){return this._g[a]=this._g[a]||{}},getByName:function(a){var b=this.getFromCache(a);if(b.pkg)return b.pkg;var c=new this();c.addName(a);return c},getObject:function(a){var b=this.getFromCache(a);if(b.obj!==undefined)return b.obj;var c=this._a,d=a.split('.'),f;while(f=d.shift())c=c&&c[f];return this.getFromCache(a).obj=c},expand:function(a){var b=[],c,d;for(c=0,d=a.length;c<d;c++)a[c].expand(b);return b},load:function(a,b,c){var d=[],f=[],e=a.length,g;while(e--){g=a[e];if(g.isComplete())b-=1;else(g.readyToLoad()?d:f).push(g)}if(b===0)return c();e=d.length;while(e--)d[e].load(function(){this.load(f,--b,c)},this)}}});JS.Package.extend({DomLoader:{usable:function(){return!!JS.Package.getObject('window.document.getElementsByTagName')},__FILE__:function(){var a=document.getElementsByTagName('script');return a[a.length-1].src},loadFile:function(c,d){var f=this,e=document.createElement('script');e.type='text/javascript';e.src=c;e.onload=e.onreadystatechange=function(){var a=e.readyState,b=e.status;if(!a||a==='loaded'||a==='complete'||(a===4&&b===200)){d();e.onload=e.onreadystatechange=f._k;e=null}};window.console&&console.info('Loading '+c);document.getElementsByTagName('head')[0].appendChild(e)},_k:function(){}},ServerLoader:{usable:function(){return JS.isFn(JS.Package.getObject('load'))&&JS.isFn(JS.Package.getObject('version'))},setup:function(){var b=this;load=(function(a){return function(){b._l=arguments[0];return a.apply(JS.Package._a,arguments)}})(load)},__FILE__:function(){return this._l},loadFile:function(a,b){load(a);b()}}});(function(){var a=[JS.Package.DomLoader,JS.Package.ServerLoader],b=a.length,c,d;for(c=0;c<b;c++){d=a[c];if(d.usable()){JS.Package.Loader=d;if(d.setup)d.setup();break}}})();JS.Package.extend({DSL:{__FILE__:function(){return JS.Package.Loader.__FILE__()},pkg:function(a,b){var c=b?JS.Package.getByPath(b):JS.Package.getByName(a);c.addName(a);return new JS.Package.Description(c)},file:function(a){var b=JS.Package.getByPath(a);return new JS.Package.Description(b)},load:function(a,b){JS.Package.Loader.loadFile(a,b)}},Description:new JS.Class({initialize:function(a){this._b=a},_c:function(a,b){var c=b.length,a=this._b[a],d;for(d=0;d<c;d++)a.call(this._b,b[d]);return this},provides:function(){return this._c('addName',arguments)},requires:function(){return this._c('addDependency',arguments)},uses:function(){return this._c('addSoftDependency',arguments)},setup:function(a){this._b.onload(a);return this}})});JS.Package.DSL.loader=JS.Package.DSL.file;JS.Packages=function(a){a.call(JS.Package.DSL)};JS.require=function(){var a=JS.array(arguments),b=[];while(typeof a[0]==='string')b.push(JS.Package.getByName(a.shift()));b=JS.Package.expand(b);var c=false,d=function(){if(c)return;c=true;a[0]&&a[0].call(a[1]||null)};JS.Package.load(b,b.length,d)};require=JS.require;JS.Packages(function(){with(this){var b=JS.Package._a.JSCLASS_PATH||__FILE__().replace(/[^\/]*$/g,'');b=b.replace(/\/?$/g,'/');var c=function(a){return file(b+a+'.js')};c('core').provides('JS.Module','JS.Class','JS.Kernel','JS.Singleton','JS.Interface');c('comparable').provides('JS.Comparable').requires('JS.Module');c('constant_scope').provides('JS.ConstantScope').requires('JS.Module');c('forwardable').provides('JS.Forwardable').requires('JS.Module');c('enumerable').provides('JS.Enumerable').requires('JS.Module','JS.Class');c('observable').provides('JS.Observable').requires('JS.Module');c('hash').provides('JS.Hash').requires('JS.Class','JS.Enumerable','JS.Comparable');c('set').provides('JS.Set','JS.HashSet','JS.SortedSet').requires('JS.Class','JS.Enumerable').uses('JS.Hash');c('linked_list').provides('JS.LinkedList','JS.LinkedList.Doubly','JS.LinkedList.Doubly.Circular').requires('JS.Class','JS.Enumerable');c('command').provides('JS.Command','JS.Command.Stack').requires('JS.Class','JS.Enumerable','JS.Observable');c('decorator').provides('JS.Decorator').requires('JS.Module','JS.Class');c('method_chain').provides('JS.MethodChain').requires('JS.Module','JS.Kernel');c('proxy').provides('JS.Proxy','JS.Proxy.Virtual').requires('JS.Module','JS.Class');c('ruby').provides('JS.Ruby').requires('JS.Class');c('stack_trace').provides('JS.StackTrace').requires('JS.Module','JS.Singleton');c('state').provides('JS.State').requires('JS.Module','JS.Class')}});