/*! (c) Philipp König under GPL-3.0 */
"use strict";!function(a){window.I18nHelper=function(b){var c=this;this.init=function(a){"function"==typeof a&&a()},this.parseHtml=function(d){a(d).find("["+b.opts.attr.i18n+"]").forEach(function(d){var e=null,f=a(d).attr(b.opts.attr.i18n);f&&(e=c.get(f)),e?(a(d).removeAttr(b.opts.attr.i18n),a(d).html(e)):a(d).remove()})},this.get=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=chrome.i18n.getMessage(a);return c&&(b.forEach(function(a,b){c=c.replace(new RegExp("\\{"+(b+1)+"\\}"),a)}),c=c.replace(/\[b\](.*)\[\/b\]/,"<strong>$1</strong>"),c=c.replace(/\[a\](.*)\[\/a\]/,"<a href='#'>$1</a>"),c=c.replace(/\[em\](.*)\[\/em\]/,"<em>$1</em>")),c}}}(jsu);