/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Jul 10 10:41
*/
KISSY.add("editor/plugin/color/cmd",function(f,b){return{applyColor:function(a,c,d){var e=a.get("document")[0];a.execCommand("save");c?(new b.Style(d,{color:c})).apply(e):(new b.Style(d,{color:"inherit"})).remove(e);a.execCommand("save")}}},{requires:["editor"]});
