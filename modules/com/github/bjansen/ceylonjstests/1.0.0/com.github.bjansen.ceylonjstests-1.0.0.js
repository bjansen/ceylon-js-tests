(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('com/github/bjansen/ceylonjstests/1.0.0/com.github.bjansen.ceylonjstests-1.0.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('com/github/bjansen/ceylonjstests/1.0.0/com.github.bjansen.ceylonjstests-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.2-SNAPSHOT/ceylon.language-1.3.2-SNAPSHOT');
m$1.$addmod$(m$1,'ceylon.language/1.3.2-SNAPSHOT');
m$1.$addmod$(ex$,'com.github.bjansen.ceylonjstests/1.0.0');
var m$2=require('ceylon/interop/browser/1.3.2-SNAPSHOT/ceylon.interop.browser-1.3.2-SNAPSHOT');
m$1.$addmod$(m$2,'ceylon.interop.browser/1.3.2-SNAPSHOT');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.interop.browser/1.3.2-SNAPSHOT':[]
};};
function check($3,$4){
var $5="\u2714 OK";
var $6="success";
try{
var $7=$4();
if(m$1.is$($7,{t:m$1.$_Boolean})) {
if(!$7){
$5="\u2718 KO: expected assertion to return true";
$6="error";
}
}
else{}
}
catch($8){
if(!m$1.is$(($8=$8),{t:m$1.Throwable}))$8=m$1.NatErr($8);
if(m$1.is$($8,{t:m$1.Exception})){
$5="\u2718 KO: ".plus($8.message);
$6="error";
}else{throw $8}
}
($9=(typeof document==='undefined'||document===null?m$1.throwexc(m$1.Exception("Undefined or null reference: document"),'22:8-22:15','check.ceylon'):document).getElementById("results"),$9.innerHTML=$9.innerHTML.plus("<tr><td>".plus($3).plus("</td><td class=\"").plus($6).plus("\">").plus($5).plus("</td>\n")));
};check.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'description',mt:'prm',$t:{t:m$1.$_String}},{nm:'test',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}}}],d:['com.github.bjansen.ceylonjstests','check']};};
function run(){
m$1.print("Starting interop checks...");
var $a=m$1.system().milliseconds;
runInteropChecks();
m$1.print("Done in ".plus((m$1.system().milliseconds-$a).string).plus("ms!"));
}
ex$.run=run;
run.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,an:function(){return[m$1.doc$($CCMM$,'com.github.bjansen.ceylonjstests:run')];},d:['com.github.bjansen.ceylonjstests','run']};};
function runInteropChecks(){
check("window can be accessed",m$1.jsc$2((function(){return m$2.window();
}),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$2.Window}}));
check("document can be accessed",m$1.jsc$2((function(){return m$2.document$dom();
}),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$2.Document}}));
check("querySelectorAll returns one div",m$1.jsc$2((function(){return (m$2.document$dom().querySelectorAll("div").length==(1));
}),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.$_Boolean}}));
};runInteropChecks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],d:['com.github.bjansen.ceylonjstests','runInteropChecks']};};
ex$.$pkg$ans$com$github$bjansen$ceylonjstests=function(){return[m$1.doc$($CCMM$,'com.github.bjansen.ceylonjstests','$pkg-anns'),m$1.shared()];};
ex$.$pkgunsh$com$github$bjansen$ceylonjstests={'check':check,'runInteropChecks':runInteropChecks};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
