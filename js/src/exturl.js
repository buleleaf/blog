"use strict";$(document).ready(function(){var C={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(r){var t,e,o,n,a,c,h,d="",i=0;for(r=C._utf8_encode(r);i<r.length;)n=(t=r.charCodeAt(i++))>>2,a=(3&t)<<4|(e=r.charCodeAt(i++))>>4,c=(15&e)<<2|(o=r.charCodeAt(i++))>>6,h=63&o,isNaN(e)?c=h=64:isNaN(o)&&(h=64),d=d+this._keyStr.charAt(n)+this._keyStr.charAt(a)+this._keyStr.charAt(c)+this._keyStr.charAt(h);return d},decode:function(r){var t,e,o,n,a,c,h="",d=0;for(r=r.replace(/[^A-Za-z0-9+/=]/g,"");d<r.length;)t=this._keyStr.indexOf(r.charAt(d++))<<2|(n=this._keyStr.indexOf(r.charAt(d++)))>>4,e=(15&n)<<4|(a=this._keyStr.indexOf(r.charAt(d++)))>>2,o=(3&a)<<6|(c=this._keyStr.indexOf(r.charAt(d++))),h+=String.fromCharCode(t),64!=a&&(h+=String.fromCharCode(e)),64!=c&&(h+=String.fromCharCode(o));return C._utf8_decode(h)},_utf8_encode:function(r){r=r.replace(/rn/g,"n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):(127<o&&o<2048?t+=String.fromCharCode(o>>6|192):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128)),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)(o=r.charCodeAt(e))<128?(t+=String.fromCharCode(o),e++):191<o&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}};$(".exturl").on("click",function(){var r=$(this).attr("data-url"),t=C.decode(r);return window.open(t,"_blank"),!1})});