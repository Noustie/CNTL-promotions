if(JS.Proxy===undefined)JS.Proxy={};JS.Proxy.Virtual=new JS.Class('Proxy.Virtual',{initialize:function(a){var g=function(){},e=new JS.Class(),h={},f,d;g.prototype=a.prototype;for(f in a.prototype){d=a.prototype[f];if(JS.isFn(d)&&d!==a)d=this.klass.forward(f);h[f]=d}e.include({initialize:function(){var c=arguments,b=null;this.__getSubject__=function(){b=new g;a.apply(b,c);return(this.__getSubject__=function(){return b})()}},klass:a,constructor:a},false);e.include(new JS.Module(h),false);e.include(this.klass.InstanceMethods,true);return e},extend:{forward:function(b){return function(){var c=this.__getSubject__();return c[b].apply(c,arguments)}},InstanceMethods:new JS.Module({extend:function(c){this.__getSubject__().extend(c);var b,a;for(b in c){a=c[b];if(JS.isFn(a))a=JS.Proxy.Virtual.forward(b);this[b]=a}}})}});