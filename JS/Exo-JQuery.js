$(document).ready(function(){
for(var i=0;i<$(".HT").length;i++){
var ht=parseInt($(".HT:eq("+i+")").text());
var tx=parseInt($(".TAXE:eq("+i+")").text());
var ttc= ht+ht*(tx/100);
$(".TTC:eq("+i+")").append(ttc);
}
});