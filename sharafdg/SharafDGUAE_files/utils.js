Sharaf={Utility:{debounce:function(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};},tryParseJSON:function(jsonString){try{var o=JSON.parse(jsonString);if(o&&typeof o==="object"){return o;}}
catch(e){}
return false;},displayPageLoader:function(){$(".searcharea-overlay").removeClass("hidden");var loader=$(".loaderProgress");loader.removeClass("hidden");setTimeout(function(){loader.addClass("activeProgress")},0)},hidePageLoader:function(){$(".searcharea-overlay").addClass("hidden");$(".loaderProgress").addClass("hidden").removeClass("activeProgress")},setIntervalX:function(callback,delay,repetitions){var x=0;var intervalID=window.setInterval(function(){callback();if(++x===repetitions){window.clearInterval(intervalID);}},delay);},setWithExpiry:function(key,value,ttl){var now=new Date()
var item={value:value,expiry:now.getTime()+ttl,}
localStorage.setItem(key,JSON.stringify(item))},getWithExpiry:function(key){try{var itemStr=localStorage.getItem(key)
if(!itemStr){return null}
var item=JSON.parse(itemStr)
var now=new Date()
if(now.getTime()>item.expiry){localStorage.removeItem(key)
return null}
return item.value}catch(e){}}}};