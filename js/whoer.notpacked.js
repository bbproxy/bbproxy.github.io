var $x=function(id){return document.getElementById(id);};var failed_anon=[];var NA='N/A';var NAS='<span class="disabled">'+ NA+'</span>';var preloader_default='/images/preloader.gif';var preloader_img='<img src="/images/preloader.gif" alt="">';var async_req_timeout=20*1000;var preloaders_timeout=25*1000;var time_difference=5*60;var oses=['winnt','win32','win98','windows','linux','bsd','mac os','darwin','minix','aix','irix','hpux','qnx','sunos','solaris','hurd','symbian','nintendo','psp','playstation','nitro','netware','beos','plan','freedos','reactos','junos','inferno','android','openmoko','mobilinux','palm','javafx','centos'];var mobiles=['sonyericsson','nokia','motorola'];var webrtc_ips=[];var languages='aa aa-dj aa-er aa-et af am ar ar-ae ar-bh ar-dz ar-eg ar-in ar-iq ar-jo ar-kw ar-lb ar-ly ar-ma ar-mr ar-om ar-ps ar-qa ar-sa ar-sd ar-so ar-sy ar-td ar-tn ar-ye az be bg bm bn bn-bd bs ca ch ch-mp cs da da-de da-dk'
+' da-fo da-gl de de-at de-be de-ch de-de de-dk de-fr de-hu de-it de-li de-lu de-pl dv dz el el-cy el-gr en en-ag en-ai en-as en-au en-bb en-be en-bm en-bn en-bs en-bw en-bz en-ca en-ck en-cm en-dm en-er en-et en-fj en-fk en-fm en-gb en-gd'
+' en-gh en-gi en-gm en-gu en-gy en-hk en-ie en-il en-in en-io en-jm en-ke en-ki en-kn en-ky en-lc en-lr en-ls en-mh en-mp en-ms en-mt en-mu en-mw en-na en-nf en-ng en-nr en-nu en-nz en-pg en-ph en-pk en-pr en-pw en-rw'
+' en-sb en-sc en-sg en-sl en-so en-sz en-tk en-to en-tt en-ug en-um en-us en-vc en-vg en-vu en-ws en-za en-zm en-zv es es-ar es-bo es-cl es-co es-cr es-cu es-do es-ec es-es es-gq es-gt es-hn es-mx es-ni es-pa es-pe'
+' es-pr es-py es-sv es-uy es-ve et fa fa-ir fi fi-fi fi-se fj fo fr fr-ad fr-bi fr-bj fr-ca fr-cd fr-cf fr-cg fr-ch fr-ci fr-cm fr-dj fr-fr fr-ga fr-gb fr-gn fr-gp fr-ht fr-it fr-km fr-lb fr-lu fr-mc fr-mg fr-ml fr-mq fr-nc'
+' fr-ne fr-pf fr-rw fr-sc fr-sn fr-td fr-tg fr-vu fr-yt ga ga-ie gn ha he he-il hi ho hr hr-ba hr-hr ht hu hu-hu hu-sl hy id is it it-ch it-it it-sl it-sm ja jv ka kg kk km ko ko-kr ku ky lb lg lo lt lv mg mh mk mn mo mo-mo ms ms-my'
+' ms-sg mt my my-my na nb-no ne ne-ne nl nl-an nl-aw nl-be nl-nl nl-sr nn-NO no no-no pl pl-pl ps pt-ao pt-br pt-cv pt-gw pt-mz pt-pt pt-st pt-tl qu ro ro-ro ru ru-ru ru-ua rw rw-rw sd sd-pk sg si sk sk-sk sl sm sn so so-so'
+' sq sr sr-ba ss ss-sz sv sv-fi sv-se sw sw-tz ta ta-sg tg th tk tl to to-to tr tr-tr tw uk ur ur-pk uz uz-uz vi yi zh-cn zh-hk zh-mo zh-sg zh-tw zu';var lang_array=languages.split(' ');var ua_lang=[];for(lid in lang_array)
ua_lang[lang_array[lid]]=1;var entity_to_code={__proto__:null,apos:0x0027,quot:0x0022,amp:0x0026,lt:0x003C,gt:0x003E,nbsp:0x00A0,iexcl:0x00A1,cent:0x00A2,pound:0x00A3,curren:0x00A4,yen:0x00A5,brvbar:0x00A6,sect:0x00A7,uml:0x00A8,copy:0x00A9,ordf:0x00AA,laquo:0x00AB,not:0x00AC,shy:0x00AD,reg:0x00AE,macr:0x00AF,deg:0x00B0,plusmn:0x00B1,sup2:0x00B2,sup3:0x00B3,acute:0x00B4,micro:0x00B5,para:0x00B6,middot:0x00B7,cedil:0x00B8,sup1:0x00B9,ordm:0x00BA,raquo:0x00BB,frac14:0x00BC,frac12:0x00BD,frac34:0x00BE,iquest:0x00BF,Agrave:0x00C0,Aacute:0x00C1,Acirc:0x00C2,Atilde:0x00C3,Auml:0x00C4,Aring:0x00C5,AElig:0x00C6,Ccedil:0x00C7,Egrave:0x00C8,Eacute:0x00C9,Ecirc:0x00CA,Euml:0x00CB,Igrave:0x00CC,Iacute:0x00CD,Icirc:0x00CE,Iuml:0x00CF,ETH:0x00D0,Ntilde:0x00D1,Ograve:0x00D2,Oacute:0x00D3,Ocirc:0x00D4,Otilde:0x00D5,Ouml:0x00D6,times:0x00D7,Oslash:0x00D8,Ugrave:0x00D9,Uacute:0x00DA,Ucirc:0x00DB,Uuml:0x00DC,Yacute:0x00DD,THORN:0x00DE,szlig:0x00DF,agrave:0x00E0,aacute:0x00E1,acirc:0x00E2,atilde:0x00E3,auml:0x00E4,aring:0x00E5,aelig:0x00E6,ccedil:0x00E7,egrave:0x00E8,eacute:0x00E9,ecirc:0x00EA,euml:0x00EB,igrave:0x00EC,iacute:0x00ED,icirc:0x00EE,iuml:0x00EF,eth:0x00F0,ntilde:0x00F1,ograve:0x00F2,oacute:0x00F3,ocirc:0x00F4,otilde:0x00F5,ouml:0x00F6,divide:0x00F7,oslash:0x00F8,ugrave:0x00F9,uacute:0x00FA,ucirc:0x00FB,uuml:0x00FC,yacute:0x00FD,thorn:0x00FE,yuml:0x00FF,OElig:0x0152,oelig:0x0153,Scaron:0x0160,scaron:0x0161,Yuml:0x0178,fnof:0x0192,circ:0x02C6,tilde:0x02DC,Alpha:0x0391,Beta:0x0392,Gamma:0x0393,Delta:0x0394,Epsilon:0x0395,Zeta:0x0396,Eta:0x0397,Theta:0x0398,Iota:0x0399,Kappa:0x039A,Lambda:0x039B,Mu:0x039C,Nu:0x039D,Xi:0x039E,Omicron:0x039F,Pi:0x03A0,Rho:0x03A1,Sigma:0x03A3,Tau:0x03A4,Upsilon:0x03A5,Phi:0x03A6,Chi:0x03A7,Psi:0x03A8,Omega:0x03A9,alpha:0x03B1,beta:0x03B2,gamma:0x03B3,delta:0x03B4,epsilon:0x03B5,zeta:0x03B6,eta:0x03B7,theta:0x03B8,iota:0x03B9,kappa:0x03BA,lambda:0x03BB,mu:0x03BC,nu:0x03BD,xi:0x03BE,omicron:0x03BF,pi:0x03C0,rho:0x03C1,sigmaf:0x03C2,sigma:0x03C3,tau:0x03C4,upsilon:0x03C5,phi:0x03C6,chi:0x03C7,psi:0x03C8,omega:0x03C9,thetasym:0x03D1,upsih:0x03D2,piv:0x03D6,ensp:0x2002,emsp:0x2003,thinsp:0x2009,zwnj:0x200C,zwj:0x200D,lrm:0x200E,rlm:0x200F,ndash:0x2013,mdash:0x2014,lsquo:0x2018,rsquo:0x2019,sbquo:0x201A,ldquo:0x201C,rdquo:0x201D,bdquo:0x201E,dagger:0x2020,Dagger:0x2021,bull:0x2022,hellip:0x2026,permil:0x2030,prime:0x2032,Prime:0x2033,lsaquo:0x2039,rsaquo:0x203A,oline:0x203E,frasl:0x2044,euro:0x20AC,image:0x2111,weierp:0x2118,real:0x211C,trade:0x2122,alefsym:0x2135,larr:0x2190,uarr:0x2191,rarr:0x2192,darr:0x2193,harr:0x2194,crarr:0x21B5,lArr:0x21D0,uArr:0x21D1,rArr:0x21D2,dArr:0x21D3,hArr:0x21D4,forall:0x2200,part:0x2202,exist:0x2203,empty:0x2205,nabla:0x2207,isin:0x2208,notin:0x2209,ni:0x220B,prod:0x220F,sum:0x2211,minus:0x2212,lowast:0x2217,radic:0x221A,prop:0x221D,infin:0x221E,ang:0x2220,and:0x2227,or:0x2228,cap:0x2229,cup:0x222A,there4:0x2234,sim:0x223C,cong:0x2245,asymp:0x2248,ne:0x2260,equiv:0x2261,le:0x2264,ge:0x2265,sub:0x2282,sup:0x2283,nsub:0x2284,sube:0x2286,supe:0x2287,oplus:0x2295,otimes:0x2297,perp:0x22A5,sdot:0x22C5,lceil:0x2308,rceil:0x2309,lfloor:0x230A,rfloor:0x230B,lang:0x2329,rang:0x232A,loz:0x25CA,spades:0x2660,clubs:0x2663,hearts:0x2665,diams:0x2666,int:0x222B};var char_to_entity={};for(var entity_name in entity_to_code)
char_to_entity[String.fromCharCode(entity_to_code[entity_name])]=entity_name;function e_e(str){var z=str;if(typeof(z)!='string')
return z;return z.replace(/./g,function(z){return char_to_entity[z]?'&'+ char_to_entity[z]+';':z;});};function calc_anonym(){var sections={"primary":0,"secondary":0};var result=0;failed_anon=[];var list=["tor","anonymizer","proxy","ua_mismatch","time_mismatch","dsbl","flash","java","activex","webrtc_local_net","proxy_ports","track","dns","ips","langs"];try{for(var i in list){var src=list[i];if(src=="dns"||src=="ips"){for(var i=0;i<pub[src].length;i++){if(pub[src][i]["iso"]=="-"||pub[src][i]["iso"]==""||pub["ip_plain"]["iso"]=="")
continue;if((pub[src][i]["iso"].toLowerCase()
!=pub["ip_plain"]["iso"])||(src=="ips"&&pub[src][i]["ip"]!=pub["ip_plain"]["ip"])){result+=scores[src][0];sections[scores[src][1]]++;failed_anon.push(src);break;}}}
else if(src=="langs"){if(pub["ip_plain"]["iso"]!=""){for(var i=0;i<pub["langs"].length;i++){var lang=pub["langs"][i];if(lang=="en"||lang=="ar"||lang=="us")
continue;if(lang!=pub["ip_plain"]["iso"]){result+=scores[src][0];sections[scores[src][1]]++;failed_anon.push(src);break;}}}}
else if(src=="proxy"&&pub[src]==1){}
else if(pub[src]>=1){result+=scores[src][0];sections[scores[src][1]]++;failed_anon.push(src);}}}catch(e){;}
var factor=1;if(sections["primary"]==1&&sections["secondary"]==0){factor=1.5;}
else if(sections["primary"]>0&&(sections["primary"]+ sections["secondary"])==2){factor=1.2;}
else if((sections["primary"]+ sections["secondary"])>3){factor=0.75;}
result=result*factor;result=(100- result).toFixed(0);if(result<=0)
result=3;for(var i=0;i<score_res.length;i++){if(result>=score_res[i][0]&&result<score_res[i][1]){$('#anonym_level').removeClass();$('#anonym_level').addClass(score_res[i][2]);$('#anonym_level .title').html('<span>'+ iloc('Your anonymity')+': '+ result+'%'+'</span>');$('#anonym_level .description').html(score_res[i][3]);$('.alevel-score-num').html(result);var sc=score_res[i][2];$('#hide_control_popup .heading').addClass('alevel-'+ sc);break;}}
$('.hide-persent-list li').hide();for(var i in failed_anon){$('.hide-persent-list li.alevel-'+ failed_anon[i]).show();$('.hide-persent-list li.alevel-'+ failed_anon[i]+" .persent").html("-"+(scores[failed_anon[i]][0]*factor).toFixed(1));}}
function get_language_full(){var result='',lang_app='',lang_ua='';var lang_names=["language","browserLanguage","userLanguage","systemLanguage"];for(var i in lang_names){try{if(typeof(window.navigator[lang_names[i]])=="undefined")continue;result+=window.navigator[lang_names[i]]+" | ";pub["lang_js"].push(window.navigator[lang_names[i]]);}catch(e){};}
result=result.replace(/ \| $/,'');if(typeof(window.navigator['userAgent'])!="undefined")
try{lang_ua=detect_lang_from_header(window.navigator['userAgent']);}catch(e){};if(typeof(window.navigator['appVersion'])!="undefined")
try{lang_app=detect_lang_from_header(window.navigator['appVersion']);}catch(e){};if((lang_ua==''&&lang_app=='')||(lang_ua!=''&&lang_app!='')){result=result?result+" | "+ lang_ua:lang_ua;}
else{var separator=result?" | ":'';if(lang_ua&&lang_app){result+=separator+ lang_ua+ separator+ lang_app;}
else{result+=separator+(lang_ua?lang_ua:lang_app);}}
result=result.replace(/ \| $/,'');return result;}
function detect_lang_from_header(ua){var ua_orig=ua;var result='';if(/\[(\w\w|\w\w-\w\w)\]/.test(ua.toLowerCase())){if(ua_lang[RegExp.$1]){result=RegExp.$1;}}
else if(/esperanto/.test(ua.toLowerCase())){result='esperanto';}
else if(/; en[;)]/.test(ua.toLowerCase())){result='en';}
else{var chunks=ua.toLowerCase().split(/;|\)/);for(i in chunks){chunks[i]=chunks[i].replace('_','-');if(/^[ \w\-,]{0,} (\w\w|\w\w-\w\w)$/.test(chunks[i].toLowerCase())){if(ua_lang[RegExp.$1]){result=chunks[i];result=result.replace(/\s+/,'');}}}}
return result;}
function get_os_full(){var os_full='',os_cpu='',os_platform='',os_ua='',os_app='';var os_container=[];if(typeof(window.navigator['platform'])!="undefined")
os_container.push(window.navigator['platform']);if(typeof(window.navigator['oscpu'])!="undefined")
os_container.push(window.navigator['oscpu']);if(typeof(window.navigator['userAgent'])!="undefined")
try{os_container.push(detect_os_from_header(window.navigator['userAgent']));}catch(e){};if(typeof(window.navigator['appVersion'])!="undefined")
try{os_container.push(detect_os_from_header(window.navigator['appVersion']));}catch(e){};os_container.sort();for(var i=1;i<os_container.length;i++){if(os_container[i- 1]==os_container[i]||os_container[i]==''){os_container.splice(i,1);i-=1;}}
os_full=os_container.join(' | ');if(os_full=='')
os_full=iloc('Unknown');os_full=os_full.replace(/(^\s?\|| \|\s?$)/,'');return os_full;}
function get_chunk_from_user_agent(ua,ozez){var result='';for(os in ozez){var re=new RegExp(ozez[os],'i');if(re.test(ua.toLowerCase())){var chunks=ua.split(';');for(chid in chunks){chunks[chid]=chunks[chid].replace(/^\s+/,'');chunks[chid]=chunks[chid].replace(/\s+$/,'');if(re.test(chunks[chid].toLowerCase())){result=chunks[chid];break;}}
break;}}
return result;}
function detect_os_from_header(ua){var ua_orig=ua;var result='';var windows=0,macintosh=0;if(/^.*?(\(|\( )Macintosh;/i.test(ua.toLowerCase())){macintosh=1;ua=ua.replace(/^.*?\(Macintosh;/i,'');}
if(/^.*?(\(|\( )Windows;/i.test(ua.toLowerCase())){windows=1;ua=ua.replace(/^.*?\(Windows;/i,'');}
result=get_chunk_from_user_agent(ua,oses);result=result.replace(/^(Mozilla|Opera|[\d.]+).*?\(/,'');if(!/\(/.test(result))
result=result.replace(/\)$/,'');result=(!result&&macintosh==1)?'Macintosh':result;result=(!result&&windows==1)?'Windows':result;var mobile_detected=0,in_result=0;for(mid in mobiles){var re=new RegExp(mobiles[mid],'i');if(re.test(ua.toLowerCase()))
mobile_detected=1;if(re.test(result.toLowerCase()))
in_result=1;}
if(mobile_detected&&(result==''||!in_result)){var mobile=get_chunk_from_user_agent(ua,mobiles);if(mobile)
result+=(result?', '+ mobile:mobile);}
if(/^(.*)\).*?(\[.*\]|KHTML|NetFront)/.test(result))
result=RegExp.$1;result=result.replace(/[\)\(]/g,'');if(/curl\/.* \((.*?)\)/.test(ua.toLowerCase()))
result=RegExp.$1;return result;}
var inters=new Array;inters['ru']=[];var en_msg=['Mismatch','Match','Unknown','enabled','disabled','more','hide','show','Cannot connect to whois','Anonymizer detected','Yes','cache',"Your anonymity",];var ru_msg=['Не совпадает','Совпадает','Неизвестно','включено','отключено','еще','скрыть','показать','Невозможно соединиться с whois','Обнаружен анонимайзер','Да','кэш',"Ваша анонимность"];for(var i in en_msg){inters['ru'][en_msg[i]]=ru_msg[i];}
function iloc(phrase){var lang='en';if(document.cookie.indexOf("LANG=ru")>=0||/^\/ru/.test(window.location.pathname)){lang='ru';}
if(lang=='en'){return phrase;}
else{var result="";result=inters[lang][phrase];if(result==undefined){return phrase;}
else{return result;}}}
function l(phrase){return iloc(phrase);}
function check_time_difference(opts){var dts=new Date();var zt=dts.toString();$(opts['js_time_container']).html(zt);var system_ts=(Math.round(dts.getTime()/ 1000)
+((dts.getTimezoneOffset()*60)*(-1)));var local_ts=opts['local_timestamp'];var ts_diff=Math.abs(system_ts- local_ts);var local_zone=opts['local_timezone'];var mismatched=0;try{var zonez=/(GMT|UTC)([+-]\d\d\d\d)/g.exec(zt);if(zonez!=null){if(local_zone=='GMT'&&zonez[2]=='+0000'){local_zone='GMT+0000';}
if(local_zone!=("GMT"+ zonez[2])){mismatched=1;}}
else{var zonez_n=/(GMT|UTC)/g.exec(zt);if(zonez_n!=null){if(local_zone!="GMT"){mismatched=1;}}}}
catch(e){};if(local_ts!=NA&&local_ts!="-"&&local_ts!=""){if(ts_diff>time_difference||mismatched==1){$(opts['time_diff_container']).addClass('not-matched');}
$(opts['js_time_container']).removeClass('disabled');}
if(isNaN(ts_diff))return 0;return mismatched;}
function get_window_size(){var win_width="?";var win_height="?";try{if(document.all){win_width=document.body.offsetWidth;win_height=document.body.offsetHeight;}
else if(document.layers){win_width=document.body.width;win_height=document.body.height;}
else if(document.body.clientWidth!=null){win_width=document.body.clientWidth;win_height=document.body.clientHeight;}}
catch(e){};return win_width+"x"+ win_height
+" ("+ screen.width+"x"+ screen.height+")";}
var scripts=new Object;scripts={encolor:'#4b4b4b',anonymizer:function(domain,container){if((window.location.hostname!=domain)||window["_proxy_jslib_THIS_HOST"]||(typeof ginf!='undefined')||window["REAL_PROXY_HOST"]){$(container).removeClass('disabled').addClass('alarm').html(l('Yes'));$('.anonymizer-status').addClass('main-bad');return 1;}
return 0;},js:function(el){$(el).removeClass('disabled').html(l("enabled"));$(el+'-icon').addClass('enabled');},java:function(el){if(window.navigator.javaEnabled()){$(el).removeClass('disabled').html(l("enabled"));$(el+'-icon').addClass('enabled');return 1;}
return 0;},activex:function(el){try{var AXO=ActiveXObject;$(el).removeClass('disabled').html(l("enabled"));$(el+'-icon').addClass('enabled');return 1;}
catch(e){};},webrtc:function(el){try{var RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;if(!RTCPeerConnection){var win=iframe.contentWindow;RTCPeerConnection=win.RTCPeerConnection||win.mozRTCPeerConnection||win.webkitRTCPeerConnection;}
if(RTCPeerConnection){$(el).removeClass('disabled').html(l("enabled"));$(el+'-icon').addClass('enabled');$('#webrtc-expand-block .item').show();return 1;}
else{$('#webrtc-expand-block').addClass('non-ex');}
return 0;}
catch(e){$('#webrtc-expand-block').addClass('non-ex');};},vbscript:function(el){try{VBSEnabled();$(el).removeClass('disabled').html(l("enabled"));$(el+'-icon').addClass('enabled');return 1;}
catch(e){};},firebug:function(el){try{if(window.console&&(window.console.firebug||window.console.exception)){$(el).removeClass('disabled').html(l("enabled"));$(el+'-icon').addClass('enabled');return 1;}
else{return 0;}}
catch(e){};},adblock:function(el){try{if(isAdBlockEnabled){$(el).removeClass('disabled').html(l("enabled"));$(el+'-icon').addClass('enabled');return 1;}
else{return 0;}}
catch(e){return 1;};},flash:function(el){var _flash_installed=0;try{_flash_installed=((typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]=="object")||(window.ActiveXObject&&(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))!=false));if(_flash_installed){$(el).removeClass('disabled').html(l("enabled"));$(el+'-icon').addClass('enabled');return 1;}
else{return 0;}}
catch(e){};},navigator:function(container){$(container).html('');for(var key in window.navigator){var ext_class="";if(key=='doNotTrack'){if((window.navigator[key]!='yes'&&window.navigator[key]!=true&&pub["track"]!=0)){ext_class="attention";}
else{pub["track"]=0;}}
$(container).append('<dt><span class="'+ ext_class+'">'+ e_e(key)+'</span></dt>'+'<dd><span class="cont"><span class="'+ ext_class+'">'+ e_e(window.navigator[key])+'</span></span></dd>');}},jsua:function(js_ua,br_ua,diff_ua){var js_value=window.navigator["userAgent"]?e_e(window.navigator["userAgent"]):NAS;$(js_ua).html(js_value);if(js_value!=NAS){$(js_ua).removeClass('disabled');}
if(js_value!=$(br_ua).html()){$(diff_ua).addClass('not-matched');return 1;}},screen:function(container){var screen_names=["colorDepth","pixelDepth","height","width","availHeight","availWidth","top","left","availTop","availLeft","window-size"];for(var i in screen_names){var screen_value=screen_names[i]=="window-size"?get_window_size():window.screen[screen_names[i]];if(typeof screen_value!='undefined'){$(container+' .'+ screen_names[i]+'-data').removeClass('disabled').html(e_e(screen_value));}}},languages:function(el){var detected_language=e_e(get_language_full());if(detected_language!=''){$(el).html(' | '+ detected_language);}},os:function(el){var detected_os=e_e(get_os_full());(detected_os=='')?$(el).html(iloc("Unknown")):$(el).html(detected_os);}};function fill_inner_html(el_id,container){el_id=el_id.replace("\n","");var set_el=$x(el_id);if(container==NA||container==''||container==' '){container=NAS;}
set_el.innerHTML=container;}
function check_who_is(el,req,data){async_req_post('#internal-who-is-block',req,'check_who_is',data);}
function set_check_who_is_data(el,data){$(el).html(data);}
function check_ping(el,req,data){async_req_post('#internal-ping-block',req,'check_ping',data);}
function set_check_ping_data(el,data){$(el).html(data);}
function async_req(el,req,req_type){var preloader_div=el;if(req_type=="dns"||req_type=="ip"){preloader_div=el+"_ip";}
$(preloader_div).html(preloader_img);$.ajax({url:encodeURI(req),cache:false,async:true,timeout:async_req_timeout}).always(function(data){window["set_"+ req_type+"_data"](el,data);});}
function async_req_post(el,req,req_type,data){var preloader_div=el;if(req_type=="dns"||req_type=="ip"){preloader_div=el+"_ip";}
$(preloader_div).html(preloader_img);$.ajax({url:encodeURI(req),type:'POST',cache:false,async:true,data:data,timeout:async_req_timeout}).always(function(data){window["set_"+ req_type+"_data"](el,data);});}
$.fn.scrollTo=function(target,options,callback){if(typeof options=='function'&&arguments.length==2){callback=options;options=target;}
var settings=$.extend({scrollTarget:target,offsetTop:50,duration:500,easing:'swing'},options);return this.each(function(){var scrollPane=$(this);var scrollTarget=(typeof settings.scrollTarget=="number")?settings.scrollTarget:$(settings.scrollTarget);var scrollY=(typeof scrollTarget=="number")?scrollTarget:scrollTarget.offset().top+ scrollPane.scrollTop()- parseInt(settings.offsetTop);scrollPane.animate({scrollTop:scrollY},parseInt(settings.duration),settings.easing,function(){if(typeof callback=='function'){callback.call(this);}});});};function show_whois(container,el,req){$(el).html(preloader_img+' loading...');async_req(el,req,'whois');}
function set_whois_data(el,data){$(el).html(data);}
function set_version_data(el,data){el=el.replace("\n","");data=e_e(data);pub[clean_name(el)]=data;if(data==''||data==' '){data=NAS;}
$(el).html('('+ data+')');}
function set_dns_data(el,data){if(typeof(data)=='object'&&data["ip"]){$(el+'_ip').html(data['ip']);$(el+'_flag').html('<img alt="" src="/images/flags/'+ data['iso']+'.png">');$(el+'_country').html(data['country']);pub["dns"].push(data);calc_anonym();}
else{$(el+'_ip').html(NAS);}}
function set_multi_dns_data(el,data){if(typeof(data)=='object'&&data["ips"]){$(el).html('');for(var id in data["ips"]){var is_local=is_local_address(data["ips"][id]["ip"]);$(el).append('<span class="cont">'+ data["ips"][id]["ip"]+'</span><div class="country-holder">'
+(is_local?'':'<span class="ico-holder no-back">'+'<img alt="" src="/images/flags/'+ data["ips"][id]['iso']+'.png">'+' </span><span class="cont">'+(data["ips"][id]["country"]=='-'?iloc('Unknown'):data["ips"][id]["country"])+'</span>')
+'</div><br><span class="ico-holder no-back"> </span> ');pub["dns"].push(data["ips"][id]);}
calc_anonym();}}
function run_webrtc_check(callback){var ip_dups={};var RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;var useWebKit=!!window.webkitRTCPeerConnection;if(!RTCPeerConnection){var win=iframe.contentWindow;RTCPeerConnection=win.RTCPeerConnection||win.mozRTCPeerConnection||win.webkitRTCPeerConnection;useWebKit=!!win.webkitRTCPeerConnection;}
var mediaConstraints={optional:[{RtpDataChannels:true}]};var servers=undefined;if(useWebKit)
servers={iceServers:[{urls:"stun:stun.services.mozilla.com"}]};var pc=new RTCPeerConnection(servers,mediaConstraints);function handleCandidate(candidate){var ip_regex=/([0-9]{1,3}(\.[0-9]{1,3}){3})/;var ip_addr=ip_regex.exec(candidate)[1];if(ip_dups[ip_addr]===undefined)
callback(ip_addr);ip_dups[ip_addr]=true;}
pc.onicecandidate=function(ice){if(ice.candidate)
handleCandidate(ice.candidate.candidate);};pc.createDataChannel("");pc.createOffer(function(result){pc.setLocalDescription(result,function(){},function(){});},function(){});setTimeout(function(){var lines=pc.localDescription.sdp.split('\n');lines.forEach(function(line){if(line.indexOf('a=candidate:')===0)
handleCandidate(line);});},1000);}
function set_webrtc_ips(){async_req('.ip_webrtc','/ips2country?ips='+ webrtc_ips.join(','),'multi_ips');}
function set_java_network(el,data){try{if(typeof(data)!='object'){data=$.parseJSON(data);}}catch(e){};if(typeof(data)=='object'&&data["net"]){$(el).html('');var sep='<span class="ico-holder no-back"> </span> ';for(var n in data["net"]){if(n>0){$(el).append(sep);}
$(el).append('<b>'+ e_e(data["net"][n]["device"])
+' ('
+ e_e(data["net"][n]["adapter"])+')</b><br>'+ sep
+(e_e(data["net"][n]["mac"])?('<b>MAC</b>: '+ e_e(data["net"][n]["mac"])+'<br>'+ sep):'')
+'<b>IP addresses</b>: <br>'+ sep
+'<span id="java_sys_ips_'+ n+'">'+ preloader_img+'</span>'
+'<br>');async_req('#java_sys_ips_'+ n,'/ips2country?ips='+ data["net"][n]["ips"].join(','),'multi_ips');}}
else{$(el).html(NAS);}}
function is_local_address(ip){var res=0;res=ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/);if(ip=='127.0.0.1')
res=1;return res;}
function set_multi_ips_data(el,data){if(typeof(data)=='object'&&data["ips"]){$(el).html('');var i=0;for(var id in data["ips"]){var ip=data["ips"][id]["ip"];var country=data["ips"][id]["country"];var is_local=is_local_address(ip);if((pub["ip_plain"]["ip"]!=ip)&&!is_local){ip="<b>"+ ip+"</b>";country="<b>"+ country+"</b>";if(el.match(/webrtc/)){$('.ip_webrtc_diff').addClass('not-matched');}}
if(el.match(/webrtc/)&&ip.match(/^10\./)){pub["webrtc_local_net"]=1;if(!$('.ip_webrtc_diff').hasClass('not-matched'))
$('.ip_webrtc_diff').addClass('warning-matched');}
$(el).append((i?'<span class="ico-holder no-back next"> </span>':' ')+'<span class="cont">'+ ip+'</span><div class="country-holder">'
+(is_local?'':'<span class="ico-holder no-back">'+'<img alt="" src="/images/flags/'+ data["ips"][id]['iso']+'.png">'+' </span><span class="cont">'+(country=='-'?iloc('Unknown'):country)+'</span>')
+'</div><div> </div> ');pub["ips"].push(data["ips"][id]);i++;}
calc_anonym();}}
function set_ip_data(el,data){try{if(typeof(data)!='object'){data=$.parseJSON(data);}}catch(e){};if(typeof(data)=='object'&&data["ip"]){$(el+'_ip').html(data['ip']);if(!is_local_address(data['ip'])){$(el+'_flag').html('<img alt="" src="/images/flags/'+ data['iso']+'.png">');$(el+'_country').html(data['country']);}
pub["ips"].push(data);}
else{$(el+'_ip').html(NAS);}}
function set_tcpip_data(el,data){try{if(typeof(data)!='object'){data=$.parseJSON(data);}}catch(e){};if(typeof(data)=='object'&&data["uptime"]){var result=sprintf("%s<br>%s: %s, %s: %s, MTU: %s<br>%s: %s",data["os"],iloc("link"),data["link"],iloc('distance'),data["dist"],data['mtu'],iloc('uptime'),data["uptime"]);$(el).html(e_e(result));}
else{$(el).html(NAS);}}
function set_os_data(el,data){data=e_e(data);pub[clean_name(el)]=data;if(data==''||data==' '){data=NAS;}
$(el).html(data);}
var lang2country={'xu':'-','ar':'ae','be':'by','ca':'es','cs':'cz','da':'dk','el':'gr','es':'es','et':'ee','fi':'fi','fr':'fr','he':'il','iw':'il','ja':'jp','ko':'kr','sl':'si','sq':'al','sr':'cs','sv':'se','uk':'ua','zh':'cn'};function set_lang_data(el,lang,stype){var data=[];if(typeof(lang)=='string'){if(/\[(\w\w).\]/.test(lang)){data.push(RegExp.$1);}
else{data.push(lang);}}
else{data=lang;}
var result='';var langs=[];var unique_langs={};for(var id=0;id<data.length;id++){if(unique_langs[data[id]]){continue;}
unique_langs[data[id]]=1;if(has_extended_lang(data[id],data)){continue;}
if(data[id].length==2){var co=data[id].toLowerCase();var country_fixed=lang2country[co]||co;langs.push(sprintf('<img alt="" src="/images/flags/%s.png"> %s',country_fixed,co));pub["langs"].push(country_fixed);}
else if(/[_-](\w\w)/.test(data[id])){var co=RegExp.$1.toLowerCase();langs.push(sprintf('<img alt="" src="/images/flags/%s.png"> %s',co,data[id]));pub["langs"].push(co);}}
result=langs.join(' ');if(stype=='java'){result=result+' | '+ lang;}
if(result==''||result==' '){result=NAS;}
$(el).html(result);}
function has_extended_lang(chunk,langs){for(var id=0;id<langs.length;id++){var regex=new RegExp("^"+ chunk+"[_-]");if(regex.test(langs[id].toLowerCase())){return 1;}}
return 0;}
function set_ports_data(el,data){try{if(typeof(data)!='object'){data=$.parseJSON(data);}}catch(e){};var opened=[];var rules=['suspicious','proxy'];if(typeof(data)=='object'){for(var pid=0;pid<data['opened'].length;pid++){var pushed=0;var port=data['opened'][pid];for(var rule in rules){if(data['rules'][rules[rule]][port]==1){opened.push('<span class="'+ rules[rule]+'">'+ port+'</span>');pushed++;if(rules[rule]=='proxy'){pub["proxy_ports"]=1;$('.proxy-status').addClass('main-bad');if($('.proxy-status-message').html().indexOf('alarm')<0){$('.proxy-status-message').html(l('Yes'));}}}}
if(pushed==0){opened.push(port);}}
if(opened.length==0){opened.push(iloc('No'));}
calc_anonym();}}
function clean_name(el){return el.replace(/[\#\.]/,"");}
function load_script(src){var document_scripts=document.getElementsByTagName("script");for(var document_scripts_index=0;document_scripts_index<document_scripts.length;++document_scripts_index){var document_script=document_scripts[document_scripts_index];if(document_script.src==src)return false;}
var script=document.createElement('script');script.type='text/javascript';script.src=src;document.getElementsByTagName('head')[0].appendChild(script);return 0;}
function init_ajax_preloaders(ids,preloader){var ids_array=ids.split(',');for(var id=0;id<ids_array.length;id++){$(ids_array[id]).html(preloader_img);}
window.setTimeout("drop_ajax_loaders('"+ ids+"', '"+ NAS+"');",preloaders_timeout);}
function drop_ajax_loaders(ids,not_available){var ids_array=ids.split(',');for(var id=0;id<ids_array.length;id++){var id_el=$x(ids_array[id]);if($(ids_array[id]).html().indexOf('loader')>0){$(ids_array[id]).html(not_available);pub[clean_name(ids_array[id])]=null;}}}
var pl_names=[["Shockwave Flash",["ShockwaveFlash.ShockwaveFlash"],["disabled"],['flash']],["Shockwave for Director",["SWCtl.SWCtl"],["disabled"],['flash']],["Windows Media Player",["WMPlayer.OCX"],["disabled"],['unknown']],["QuickTime",["QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck"],["disabled"],['quicktime']],["SilverLight",["AgControl.AgControl"],["disabled"],['unknown']],["PDF",["AcroPDF.PDF","PDF.PdfCtrl"],["disabled"],['pdf']],["RealPlayer",["rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer"],["disabled"],['unknown']],["VLC",["VideoLAN.VLCPlugin"],["disabled"],['unknown']],["SVG",["Adobe.SVGCtl"],["disabled"],['pdf']],["DevalVR",["DevalVRXCtrl.DevalVRXCtrl.1"],["disabled"],['unknown']]];function display_plugins(container){try{var AXO=ActiveXObject;detect_ie_plugins();$(container).html('');for(var pl_alias in pl_names){$(container).append('<dt>'+ e_e(pl_names[pl_alias][0])+'</dt>'+'<dd><span class="ico-holder ico-plugin-'+ e_e(pl_names[pl_alias][3])+'"> </span><span class="cont">'+(e_e(pl_names[pl_alias][2])=="disabled"?'<div class="disabled">'+ iloc('disabled')+'</div>':iloc('enabled'))+'</span></dd>');}}
catch(e){var available_plugins=0;for(var key=0;key<window.navigator.plugins.length;key++){if(typeof(window.navigator.plugins[key])=="function")continue;if(typeof(window.navigator.plugins[key].name)=="undefined")continue;available_plugins++;var plug_name=window.navigator.plugins[key].name;var plug_ico='ico-plugin-unknown';if(/(pdf|chrome|wacom|quicktime|java|acrobat|google|desktop|flash|icedtea)/i.test(plug_name)){plug_ico='ico-plugin-'+ RegExp.$1.toLowerCase();}
$(container).append('<dt>'+ e_e(window.navigator.plugins[key].name)+'</dt>'+'<dd><span class="ico-holder '+ plug_ico+'"> </span><span class="cont">'+ e_e(window.navigator.plugins[key].filename)+'</span></dd>');}
if(available_plugins!=0){$(container+' span.disabled').remove();}}}
function detect_ie_plugins(){for(var pl_alias in pl_names){for(var ax_name in pl_names[pl_alias][1]){try{try{new ActiveXObject(pl_names[pl_alias][1][ax_name]);pl_names[pl_alias][2]='enabled';}catch(e){}}catch(e){}}}}
function log_test(msg){console.log(msg);}
(function(e){function r(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function i(e,t){for(var n=[];t>0;n[--t]=e);return n.join("")}var t=function(){return t.cache.hasOwnProperty(arguments[0])||(t.cache[arguments[0]]=t.parse(arguments[0])),t.format.call(null,t.cache[arguments[0]],arguments)};t.format=function(e,n){var s=1,o=e.length,u="",a,f=[],l,c,h,p,d,v;for(l=0;l<o;l++){u=r(e[l]);if(u==="string")f.push(e[l]);else if(u==="array"){h=e[l];if(h[2]){a=n[s];for(c=0;c<h[2].length;c++){if(!a.hasOwnProperty(h[2][c]))throw t('[sprintf] property "%s" does not exist',h[2][c]);a=a[h[2][c]]}}else h[1]?a=n[h[1]]:a=n[s++];if(/[^s]/.test(h[8])&&r(a)!="number")throw t("[sprintf] expecting number but found %s",r(a));switch(h[8]){case"b":a=a.toString(2);break;case"c":a=String.fromCharCode(a);break;case"d":a=parseInt(a,10);break;case"e":a=h[7]?a.toExponential(h[7]):a.toExponential();break;case"f":a=h[7]?parseFloat(a).toFixed(h[7]):parseFloat(a);break;case"o":a=a.toString(8);break;case"s":a=(a=String(a))&&h[7]?a.substring(0,h[7]):a;break;case"u":a>>>=0;break;case"x":a=a.toString(16);break;case"X":a=a.toString(16).toUpperCase()}a=/[def]/.test(h[8])&&h[3]&&a>=0?"+"+a:a,d=h[4]?h[4]=="0"?"0":h[4].charAt(1):" ",v=h[6]-String(a).length,p=h[6]?i(d,v):"",f.push(h[5]?a+p:p+a)}}return f.join("")},t.cache={},t.parse=function(e){var t=e,n=[],r=[],i=0;while(t){if((n=/^[^\x25]+/.exec(t))!==null)r.push(n[0]);else if((n=/^\x25{2}/.exec(t))!==null)r.push("%");else{if((n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))===null)throw"[sprintf] huh?";if(n[2]){i|=1;var s=[],o=n[2],u=[];if((u=/^([a-z_][a-z_\d]*)/i.exec(o))===null)throw"[sprintf] huh?";s.push(u[1]);while((o=o.substring(u[0].length))!=="")if((u=/^\.([a-z_][a-z_\d]*)/i.exec(o))!==null)s.push(u[1]);else{if((u=/^\[(\d+)\]/.exec(o))===null)throw"[sprintf] huh?";s.push(u[1])}n[2]=s}else i|=2;if(i===3)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";r.push(n)}t=t.substring(n[0].length)}return r};var n=function(e,n,r){return r=n.slice(0),r.splice(0,0,e),t.apply(null,r)};e.sprintf=t,e.vsprintf=n})(typeof exports!="undefined"?exports:window);