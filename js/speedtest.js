var downloaded_data=new Array();function getXHR(){var XHR;try{XHR=window.XDomainRequest;}
catch(e){}
if(!XHR){try{XHR=window.XMLHttpRequest;}catch(e){}}
var xhr=new XHR();$.support.cors=true;return xhr;}
function ping(options){var xhr=getXHR();var startTime=(new Date()).getTime();xhr.onerror=function(){isError=true;};xhr.onload=function(){var endTime=(new Date()).getTime();var duration=(endTime- startTime);var dom=options.doms.shift();$(dom).html(duration);if(options.doms.length!=0){ping({host:options.host,doms:options.doms,resultdiv:options.resultdiv});}
else{}};xhr.open("GET",options.host+'/test.txt'+"?_="+ Math.random(),true);xhr.send(null);}
function download_speed(opts){var img=opts.images.shift();var imageAddr=opts.addr+ img+"?n="+ Math.random();var startTime,endTime;var downloadSize=opts.sizes.shift();var download=new Image();download.onload=function(){endTime=(new Date()).getTime();var duration=(endTime- startTime)/ 1000;
var speedBps=((downloadSize*8)/ duration).toFixed(2);
var speedKbps=(speedBps/1024).toFixed(2);var speedMbps=(speedKbps/1024).toFixed(2);var dom=opts.doms.shift();$(dom).html(speedMbps);if(opts.images.length!=0){download_speed({addr:opts.addr,sizes:opts.sizes,images:opts.images,doms:opts.doms,resultdiv:'#downloadresult'});}};startTime=(new Date()).getTime();download.src=imageAddr;}
function upload_speed(opts){if(get_progressbar(opts.element)>=100){return;}
var xhr=getXHR();var startTime,endTime;var full_data=opts.data;var chunks=opts.chunks.shift();for(i=1;i<=chunks;i++){full_data=full_data+ opts.data;}
var downloadSize=full_data.length;xhr.open("POST",opts.addr+'/up/file'+"?_="+ Math.random(),true);xhr.onload=function(){var endTime=(new Date()).getTime();var duration=(endTime- startTime)/ 1000;
var speedBps=((downloadSize*8)/ duration).toFixed(2);
var speedKbps=(speedBps/1024).toFixed(2);var speedMbps=(speedKbps/1024).toFixed(2);var dom=opts.doms.shift();$(dom).html(speedMbps);if(opts.doms.length!=0){upload_speed({addr:opts.addr,doms:opts.doms,resultdiv:'#uploadresult',chunks:opts.chunks,data:opts.data,element:opts.element});}};var startTime=(new Date()).getTime();xhr.send(full_data);}
function upload_speed_xhr(opts){var xhr=getXHR();var startTime,endTime;var full_data=downloaded_data.shift();var downloadSize=full_data.length;xhr.open("POST",opts.addr+'/up/file'+"?_="+ Math.random(),true);xhr.onload=function(){var endTime=(new Date()).getTime();var speed=calculate_speed({end:endTime,start:startTime,size:downloadSize*1.9});var dom=opts.doms.shift();$(dom).html(speed);if(downloaded_data.length!=0){upload_speed_xhr({addr:opts.addr,doms:opts.doms,resultdiv:'#uploadresult'});}};var startTime=(new Date()).getTime();xhr.send(full_data);}
function download_speed_xhr(opts){if(get_progressbar(opts.element)>=100){return;}
var xhr=getXHR();var img=opts.images.shift();var imageAddr=opts.addr+'/'+ img+"?n="+ Math.random();var startTime,endTime;var downloadSize=opts.sizes.shift();xhr.open("GET",imageAddr,true);xhr.onload=function(){var endTime=(new Date()).getTime();var speed=calculate_speed({end:endTime,start:startTime,size:downloadSize});var dom=opts.doms.shift();$(dom).html(speed);if(opts.images.length!=0){download_speed_xhr({addr:opts.addr,sizes:opts.sizes,images:opts.images,doms:opts.doms,resultdiv:'#downloadresult',element:opts.element});}};startTime=(new Date()).getTime();xhr.send(null);}
function calculate_speed(opts){var duration=(opts.end- opts.start)/ 1000;
var speedBps=((opts.size*8)/ duration).toFixed(2);
var speedKbps=(speedBps/1024).toFixed(2);var speedMbps=(speedKbps/1024).toFixed(2);return speedMbps;}
function randomString(num){var chars="!~`#$%^&*()_-+=[]{}.,<>;:|0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";var string_length=num||1016816;var randomstring='';for(var i=0;i<string_length;i++){var rnum=Math.floor(Math.random()*chars.length);randomstring+=chars.substring(rnum,rnum+1);}
return randomstring;}
function set_progressbar(div,value){$(div).css("width",value+"%");}
function get_progressbar(div){var width=$(div).width();var parentWidth=$(div).offsetParent().width();var percent=100*width/parentWidth;return percent;}
function show_progress(opts){var value=0;var startTime=(new Date()).getTime();var vInterval=setInterval(function(){if(isError){inProgress=false;flush_results(0);clearInterval(vInterval);return;}
var value=parseFloat(get_progressbar(opts.element));var done=opts.doms.length;for(var i=0;i<opts.doms.length;i++){if($(opts.doms[i]).html()==''||$(opts.doms[i]).html()=='0'){done--;}}
var real_value=(done*100/opts.doms.length);var nowTime=(new Date()).getTime();if(value>=100||(opts.max_time&&(nowTime- startTime)>opts.max_time)){set_progressbar(opts.element,100);clearInterval(vInterval);opts.callback(opts.resultdiv,opts.doms);}
else{if(real_value>value){for(var i=value;i<=real_value;i=i+0.5){set_progressbar(opts.element,i);}
set_progressbar(opts.element,i);if(real_value==100){set_progressbar(opts.element,100);}}
else{if(value<99){value=value+ 0.5;set_progressbar(opts.element,value);}}}},opts.interval);}
function clean_doms(doms){for(var i=0;i<doms.length;i++){$(doms[i]).html(0);}}
function get_doms(element){var arr=new Array();$(element).each(function(i,e){arr.push('#'+ $(this).attr('id'));});return arr;}
function get_avg_ping(doms){var pings=new Array();for(var i=0;i<doms.length;i++){pings.push($(doms[i]).html());}
var min=Math.min.apply(null,pings);min=min- min*0.14;return min.toFixed(0);}
function get_max_speed(doms){var speeds=new Array();for(var i=0;i<doms.length;i++){speeds.push($(doms[i]).html());}
return Math.max.apply(null,speeds);}
function getRandomInt(min,max){return Math.floor(Math.random()*(max- min+ 1))+ min;}
function set_arrow(speed,prev_speed,div){if(speed>100)speed=100;if(speed<=0)speed=0.01;var deg=0;if(speed<1)
deg=parseFloat((30*(speed*100/1))/ 100).toFixed(2) - 120;
else if(speed<=10)
deg=parseFloat((60*(speed*100/10))/ 100).toFixed(2) - 90;
else if(speed<=30)
deg=parseFloat((60*((speed- 10)*100/20))/ 100).toFixed(2) - 30;
else if(speed>=30)
deg=parseFloat((30*((speed- 30)*100/20))/ 100).toFixed(2) + 30;
else
deg=parseFloat((60*((speed- 50)*100/50))/ 100).toFixed(2) + 60;
$(div).css("-webkit-transform","rotate("+ deg+"deg)");$(div).css("transform","rotate("+ deg+"deg)");}
function setRubberSpeed(opts){var last_speed=0;var prev_speed=0;var last_value=0;var vInterval=setInterval(function(){if(isError)return;var speed=0;for(var i=0;i<opts.doms.length;i++){if($(opts.doms[i]).html()!=0){speed=$(opts.doms[i]).html();}}
if(speed==0)speed=0.01;if($(opts.doms[i-1]).html()!=0||get_progressbar(opts.element)>=100){set_arrow(0,0,'.arrow');clearInterval(vInterval);return;}
if(speed!=0&&speed!=''){var new_value=speed;if(last_speed==speed){if(getRandomInt(0,2)){new_value=(Math.round(last_value)+(last_value*getRandomInt(1,30)/ 800));;
}
else{new_value=(Math.round(last_value)-(last_value*getRandomInt(1,30)/ 800));
}}
else{last_speed=speed;prev_speed=speed;}
if(new_value<=0)new_value=0.01;last_value=new_value;res=parseFloat(new_value).toFixed(2);$(opts.resultdiv).html(res);set_arrow(res,parseFloat(prev_speed).toFixed(2),'.arrow');prev_speed=new_value;}},opts.interval);return vInterval;}
$(document).ready(function(){$('.point').click(function(e){e.preventDefault();if(inProgress==false){$('.point').removeClass('big');$(this).addClass('big');inProgress=true;flush_results();$('#ping-preload-block').fadeIn(380);var doms=get_doms('#ping span');clean_doms(doms);var host=$(this).attr("data-addr");show_progress({element:'#ping-progress',interval:300,doms:get_doms('#ping span'),resultdiv:"#ping-ms",callback:function(resultdiv,doms){$(resultdiv).html(get_avg_ping(doms));$('.recv-block').fadeOut(500);$('.recv-block').fadeIn(500);run_download(host);$('#ping-preload-block').fadeOut(400);}});ping({host:host,doms:doms,resultdiv:"#ping-ms"});}
return false;});});function run_download(host){var vindow='.speed-vindow';downloaded_data=new Array();var images=['64000.jpg','128000.jpg','245388.jpg','505544.jpg','1986284.jpg','4468241.jpg','7907740.jpg','17816816.jpg'];var sizes=[64000,128000,245388,505544,1986284,4468241,7907740,17816816];var down_doms=get_doms('#download span');clean_doms(down_doms);var intervalik=setRubberSpeed({element:'#current-progressbar',resultdiv:vindow,interval:300,doms:get_doms('#download span')});show_progress({element:'#current-progressbar',interval:300,max_time:9000,doms:get_doms('#download span'),resultdiv:vindow,callback:function(resultdiv,doms){$('#speed-recv').html(get_max_speed(doms));$(resultdiv).html('0.00');$('#current-progressbar').addClass('flush_transition');$('#current-progressbar').css("width","0%");$('.send-block').fadeOut(500);$('.send-block').fadeIn(500);clearInterval(intervalik);set_arrow(0,0,'.arrow');$('#current-progressbar').removeClass('flush_transition');run_upload(host);}});download_speed_xhr({addr:host,sizes:sizes,images:images,doms:down_doms,resultdiv:vindow,element:'#current-progressbar'});}
function run_upload(host){var vindow='.speed-vindow';var chunks=['0.5','1','3','5','10','30','60','100'];data=randomString(128000);var upload_doms=get_doms('#upload span');clean_doms(upload_doms);show_progress({element:'#current-progressbar',interval:300,max_time:10000,doms:get_doms('#upload span'),resultdiv:vindow,callback:function(resultdiv,doms){$('#speed-send').html(get_max_speed(doms));$(resultdiv).html('0.00');inProgress=false;}});setRubberSpeed({element:'#current-progressbar',resultdiv:vindow,interval:300,doms:get_doms('#upload span')});upload_speed({addr:host,doms:upload_doms,chunks:chunks,data:data,element:'#current-progressbar'});}
