/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("menubutton/menubutton",function(f,e,h,c,g,j){var i=e.create(c,{hideMenu:function(){this.get("menu").hide()},showMenu:function(){var a=this.get("view"),b=a.get("el"),d=this.get("menu");if(!d.get("visible")){d.set("align",{node:b,points:["bl","tl"]});d.show();b.attr("aria-haspopup",d.get("view").get("el").attr("id"));a.set("collapsed",false)}},bindUI:function(){var a=this,b=this.get("menu");b.on("afterActiveItemChange",function(d){a.set("activeItem",d.newVal)});b.on("click",function(d){a.fire("click",
{target:d.target})});b.on("hide",function(){a.get("view").set("collapsed",true)})},_handleKeydown:function(a){var b=this.get("menu");if(b&&b.get("visible")){b=b._handleKeydown(a);if(a.keyCode==27){this.hideMenu();return true}return b}if(a.keyCode==38||a.keyCode==40){this.showMenu();return true}},_handleBlur:function(a){if(i.superclass._handleBlur.call(this,a))return true;this.hideMenu()},_handleClick:function(a){if(c.superclass._handleClick.call(this,a))return true;var b=this.get("menu");if(a.type==
"click")b.get("visible")||this.showMenu();else if(a.type=="keydown")if(a.keyCode==13)b.get("visible")&&b._handleClick(a);else if(a.keyCode==32){a.preventDefault();this.showMenu()}},addItem:function(a,b){this.get("menu").addChild(a,b)},removeItem:function(a,b){this.get("menu").removeChild(a,b)},removeItems:function(a){this.get("menu").removeChildren(a)},getItemAt:function(a){return this.get("menu").getChildAt(a)},destructor:function(){var a=this.get("menu");a&&a.destroy()}},{ATTRS:{activeItem:{view:true},
menu:{valueFn:function(){return new j.PopupMenu(f.mix({prefixCls:this.get("prefixCls"),parent:this},this.get("menuCfg")))},setter:function(a){a.set("parent",this)}}}});i.DefaultRender=g;return i},{requires:["uibase","node","button","./menubuttonrender","menu"]});
KISSY.add("menubutton/menubuttonrender",function(f,e,h){return e.create(h.Render,{renderUI:function(){},createDom:function(){var c=this.get("el");c.one("div").one("div").html(f.substitute('<div class="{prefixCls}inline-block {prefixCls}menu-button-caption"></div><div class="{prefixCls}inline-block {prefixCls}menu-button-dropdown">&nbsp;</div>',{prefixCls:this.get("prefixCls")}));c.attr("aria-haspopup",true)},_uiSetContent:function(c){c!=undefined&&this.get("el").one("."+this.get("prefixCls")+"menu-button-caption").html(c)},
_uiSetCollapsed:function(c){var g=this.get("el"),j=this.get("prefixCls")+"menu-button";if(c){g.removeClass(j+"menu-button-open");g.attr("aria-expanded",false)}else{g.addClass(j+"menu-button-open");g.attr("aria-expanded",true)}},_uiSetActiveItem:function(c){this.get("el").attr("aria-activedescendant",c&&c.get("view").get("el").attr("id")||"")}},{ATTRS:{activeItem:{},collapsed:{value:true}}})},{requires:["uibase","button"]});
KISSY.add("menubutton/option",function(f,e,h){return e.create(h.Item,{},{ATTRS:{selectable:{value:true}}})},{requires:["uibase","menu"]});
KISSY.add("menubutton/select",function(f,e,h,c,g,j){var i=h.create(c,{bindUI:function(){this.on("click",this.handleMenuClick,this);this.get("menu").on("show",this._handleMenuShow,this)},_handleMenuShow:function(){this.get("menu").set("highlightedItem",this.get("selectedItem")||this.get("menu").getChildAt(0))},updateCaption_:function(){var a=this.get("selectedItem");this.set("content",a?a.get("content"):this.get("defaultCaption"))},handleMenuClick:function(a){this.set("selectedItem",a.target);this.hideMenu()},
_uiSetSelectedItem:function(a,b){b&&b.prevVal&&b.prevVal.set("selected",false);this.set("value",a&&a.get("value"));this.updateCaption_()},_uiSetDefaultCaption:function(){this.updateCaption_()},_uiSetValue:function(a){for(var b=this.get("menu").get("children"),d=0;d<b.length;d++){var k=b[d];if(k.get("value")==a){this.set("selectedItem",k);return}}this.set("selectedItem",null)}},{ATTRS:{selectedItem:{},selectedIndex:{setter:function(a){this.set("selectedItem",this.get("menu").getChildAt(a))},getter:function(){return f.indexOf(this.get("selectedItem"),
this.get("menu").get("children"))}},defaultCaption:{}}});i.decorate=function(a,b){a=f.one(a);var d=new g.PopupMenu(f.mix({prefixCls:b.prefixCls},b.menuCfg)),k,n=a.val();a.all("option").each(function(l){var o=new j({content:l.text(),prefixCls:b.prefixCls,value:l.val()});if(n==l.val())k=o;d.addChild(o)});var m=new i(f.mix({selectedItem:k,menu:d},b));m.render();m.get("el").insertBefore(a);var p;if(p=a.attr("name")){var q=(new e("<input type='hidden' name='"+p+"' value='"+n+"'>")).insertBefore(a);d.on("click",
function(l){q.val(l.target.get("value"))})}a.remove();return m};return i},{requires:["node","uibase","./menubutton","menu","./option"]});KISSY.add("menubutton",function(f,e,h,c,g){e.Render=h;e.Select=c;e.Option=g;return e},{requires:["menubutton/menubutton","menubutton/menubuttonrender","menubutton/select","menubutton/option"]});