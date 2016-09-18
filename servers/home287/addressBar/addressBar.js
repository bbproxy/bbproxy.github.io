var RQ_PATH = "http://" + REAL_PROXY_HOST + '/home287';

if (typeof PRX_MODE=='undefined') PRX_MODE='social';

var wprx_jq = jQueryX.noConflict();

var wprx_i18n = new Object();
wprx_i18n["ru"] = new Object();
wprx_i18n["en"] = new Object();
wprx_i18n["ru"]["link.speedtest"] = 'Тест скорости';
wprx_i18n["en"]["link.speedtest"] = 'Speedtest';
wprx_i18n["ru"]["link.ping"] = 'Пинг';
wprx_i18n["en"]["link.ping"] = 'Ping';
wprx_i18n["ru"]["link.whois"] = 'Whois';
wprx_i18n["en"]["link.whois"] = 'Whois';
wprx_i18n["ru"]["link.whois"] = 'Whois';
wprx_i18n["en"]["link.whois"] = 'Whois';
wprx_i18n["ru"]["link.myip"] = 'Мой IP';
wprx_i18n["en"]["link.myip"] = 'My IP';
wprx_i18n["ru"]["link.hide"] = 'Скрыть';
wprx_i18n["en"]["link.hide"] = 'Hide';
wprx_i18n["ru"]["link.show"] = 'Показать';
wprx_i18n["en"]["link.show"] = 'Show';
wprx_i18n["ru"]["mode.secure"] = 'Безопасный';
wprx_i18n["en"]["mode.secure"] = 'Secure';
wprx_i18n["ru"]["mode.best"] = 'Лучший';
wprx_i18n["en"]["mode.best"] = 'Best';
wprx_i18n["ru"]["mode.label"] = 'Режим совместимости';
wprx_i18n["en"]["mode.label"] = 'Compatibility mode';
wprx_i18n["ru"]["button.go"] = 'Вперёд!';
wprx_i18n["en"]["button.go"] = 'Go!';
wprx_i18n["ru"]["server.label"] = 'Сервер';
wprx_i18n["en"]["server.label"] = 'Server';
wprx_i18n["ru"]["server.nl3.name"] = "Нидерланды (Амстердам)";
wprx_i18n["en"]["server.nl3.name"] = "Netherlands (Amsterdam)";
wprx_i18n["ru"]["server.nl4.name"] = "Нидерланды (Амстердам 2)";
wprx_i18n["en"]["server.nl4.name"] = "Netherlands (Amsterdam 2)";
wprx_i18n["ru"]["server.us3.name"]  = "США (Лос-Анджелес)";
wprx_i18n["en"]["server.us3.name"]  = "USA (Los Angeles)";
wprx_i18n["ru"]["server.us4.name"]  = "США (Нью-Йорк)";
wprx_i18n["en"]["server.us4.name"]  = "USA (New York)";
wprx_i18n["ru"]["server.ru2.name"]  = "Россия (Москва)";
wprx_i18n["en"]["server.ru2.name"]  = "Russia (Moscow)";
wprx_i18n["ru"]["server.ru4.name"]  = "Россия (Москва 2)";
wprx_i18n["en"]["server.ru4.name"]  = "Russia (Moscow 2)";
wprx_i18n["ru"]["server.ru3.name"]  = "Россия (Санкт-Петербург)";
wprx_i18n["en"]["server.ru3.name"]  = "Russia (Saint-Petersburg)";
wprx_i18n["ru"]["server.uk2.name"]  = "Великобритания (Лондон)";
wprx_i18n["en"]["server.uk2.name"]  = "UK (London)";
wprx_i18n["ru"]["server.fr2.name"]  = "Франция (Париж)";
wprx_i18n["en"]["server.fr2.name"]  = "France (Paris)";
wprx_i18n["ru"]["server.se2.name"]  = "Швеция (Стокгольм)";
wprx_i18n["en"]["server.se2.name"]  = "Sweden (Stockholm)";

var wprx_srvs = ['nl3', 'nl4', 'ru2', 'ru4', 'ru3', 'us3', 'us4', 'uk2', 'fr2', 'se2'];

(function(){
	window.wprx_top_panel = {
            formServersList: function(start, end) {
                var formed = '';

                for (var srv_id = start; srv_id <= end; srv_id++) {
                    formed = formed
                        + '<option ' + this.getCurrentServer(wprx_srvs[srv_id] + ".gsr.awhoer.net")
                        + ' value="' + wprx_srvs[srv_id] + '.gsr.awhoer.net">'
                        + this.i18n('server.'+wprx_srvs[srv_id] + '.name')
                        + '</option>';
                }
                return formed;
            },
            i18n: function(label) {
                var lang = this.getLang();
                return wprx_i18n[lang][label] || label;
            },
            getLang: function() {
                var userLang = navigator.language || navigator.userLanguage;
                if (userLang.indexOf("ru") > -1)
                    userLang = 'ru';
                else
                    userLang = 'en';
                return userLang;
            },
            getCurrentServer: function(srv) {
	        if (RQ_PATH.indexOf("." + srv) > -1
                    || RQ_PATH.indexOf("/" + srv) > -1) {
                    return "selected";
                }
                else {
                    return "";
                }
            },
            getStatusOfMode: function(mode) {
	        if (PROXY_MODE == mode)
                    return "checked";
                else 
                    return "";
            },
            setPRXmode: function(mode) {
                window.location = RQ_PATH + '/cmd?mode=' + mode;
            },
            isHideCookie: function(name) {
                return document.cookie.indexOf(name + '=1') != -1;
            },
            setHideCookie: function(name, value) {
                var host = REAL_PROXY_HOST;
                host = host.replace('www.', '');
                document.cookie = name + '=' + value + '; domain=.' + host + '; expires=Fri, 3 Aug 2030 20:47:11 UTC; path=/';  
            },
            loadCSSFile: function(filename){
                var fileref=document.createElement("link")
                fileref.setAttribute("rel", "stylesheet")
                fileref.setAttribute("type", "text/css")
                fileref.setAttribute("href", filename)
                if (typeof fileref!="undefined")
                    document.getElementsByTagName("head")[0].appendChild(fileref);
            },
	    showMenu: function () {
		var d = document.getElementById('wprx-id-join-site-form'); 
		if (d.className.indexOf('active') != -1) {
		    d.className = d.className.replace(/active/,'');
		}
		else {
		    d.className = d.className + ' active';
		}
	    },
	    checkDeep: function() {
		var weAreInFrame, weAreOpenedByJsNewWin;
		weAreInFrame =window.top !== window.window;//true if this window has some parent windows
		weAreOpenedByJsNewWin=window.opener!=null;//true if this window is opened with window.open() method
		
		return (!weAreInFrame || weAreOpenedByJsNewWin);
		//returns true only if script is not included in iframe
            },
	    init : function(){
		var tmp,newloc,till;
		if(!this.checkDeep()) return false;
		wprx_jq((wprx_jq('body').size()>0?'body':'html')). 
		    append(
'  <div  id="wprx-page" style="display: none;">' +
'  <div  id="wprx-hider"><a href="#" onclick="document.getElementById(\'wprx-wrapper\').style.display=\'block\'; window.wprx_top_panel.setHideCookie(\'ANOHIDECOOKIE\', 0);return false;">'+this.i18n('link.show')+'</a></div>' +
'  <div  id="wprx-wrapper" ' + (this.isHideCookie('ANOHIDECOOKIE') ? 'style="display: none"' : '') + '>' +
'    <div id="wprx-header" style="background: url(' + RQ_PATH + '/images/anon-head.jpg) repeat-x 50% 0;">' +
'    <div id="wprx-hideme" style="position: absolute; left: 6px;top:108px;"><a onclick="document.getElementById(\'wprx-wrapper\').style.display=\'none\'; window.wprx_top_panel.setHideCookie(\'ANOHIDECOOKIE\', 1); return false;" href="#"><img src="'+RQ_PATH + '/images/hide2.png" /> '+this.i18n('link.hide')+'</a></div>' +
'      <div class="wprx-container">' +
'	<div class="wprx-clear">' +
'	  <strong class="wprx-logo" style="background:url(' + RQ_PATH + '/images/logo2.png) no-repeat;"><a href="http://whoer.net">Mr. Whoer</a></strong>' +
'	  <div class="wprx-head-frame">' +
'	    <form action="#" class="wprx-join-site-form " id="wprx-id-join-site-form">' +
'	      <fieldset>' +
'		<div class="wprx-input-box">' +
'		  <em class="wprx-ico"><img src="' + RQ_PATH + '/images/ico15.png" width="14" height="16" alt="image description" /></em>' +
'		  <label class="wprx-input-holder">' +
'		    <input type="text" id="wprx-urltext" value="' + REAL_URL +  '">' +
'		    </label>' +
'		    <a href="#" class="wprx-opener" onclick="window.wprx_top_panel.showMenu(); return false;"></a>' +
'		    <div class="wprx-drop">' +
'		      <div class="wprx-row">' +
'			<label class="wprx-contol-label">'+this.i18n('mode.label')+': <em class="wprx-icon"></em></label>' +
'			<div class="wprx-input-frame">' +
'			  <label class="wprx-radio-holder">' +
'			    <input onclick="wprx_top_panel.setPRXmode(this.value); " type="radio" name="radio01" class="wprx-radio" value="STD" ' +
this.getStatusOfMode("STD") +'/>' +
'			    <span class="wprx-radio-label">'+this.i18n('mode.best')+'</span>' +
'			  </label>' +
'<!--			  <label class="wprx-radio-holder">' +
'			    <input onclick="wprx_top_panel.setPRXmode(this.value); " type="radio" name="radio01" class="wprx-radio" value="URL_ENCRYPT" '  + this.getStatusOfMode("URL_ENCRYPT") +'/>' +
'			    <span class="wprx-radio-label">Encrypt URL</span>' +
'			  </label>-->' +
'			  <label class="wprx-radio-holder">' +
'			    <input onclick="wprx_top_panel.setPRXmode(this.value); " type="radio" name="radio01" class="wprx-radio" value="URL_ENCRYPT_AND_EXTENSIONS" '  + this.getStatusOfMode("URL_ENCRYPT_AND_EXTENSIONS") +'/>' +
'			    <span class="wprx-radio-label">'+this.i18n('mode.secure')+'</span>' +
'			  </label>' +
'			</div>' +
'		      </div>' +
'		      <div class="wprx-row">' +
'			<label class="wprx-contol-label">'+this.i18n('server.label')+':</label>' +
'			<div class="wprx-input-frame"><div class="wprx-styled-select">' +
'			  <select class="wprx-small-select" id="wprx-ipselect">' +
                            this.formServersList(0, 9) +
'			  </select>' +
'			</div></div>' +
'		      </div>' +
'		    </div>' +
'		  </div>' +
'		  <div class="wprx-btn-holder">' +
'		    <button class="wprx-button" onclick="var zdenurl = document.getElementById(\'wprx-urltext\').value;  window.location = \'' + RQ_PATH + '/cmd?urlText=\'+encodeURIComponent(zdenurl);return false">'+this.i18n('button.go')+'</button>' +
'		  </div>' +
'		</fieldset>' +
'	      </form>' +
'	      <ul class="wprx-menu">' +
'		<li><a href="http://whoer.net">' +
'		    <em class="wprx-ico"><img src="' + RQ_PATH + '/images/ico18.png" width="25" height="25" alt="image description" /></em>' +
'		    <span class="wprx-text">'+this.i18n('link.myip')+'</span>' +
'		</a></li>' +
'		<li><a href="http://whoer.net/speedtest">' +
'		    <em class="wprx-ico"><img src="' + RQ_PATH + '/images/ico20.png" width="25" height="25" alt="image description" /></em>' +
'		    <span class="wprx-text">'+ this.i18n('link.speedtest')+'</span>' +
'		</a></li>' +
'		<li><a href="http://whoer.net/ping">' +
'		    <em class="wprx-ico"><img src="' + RQ_PATH + '/images/ico21.png" width="25" height="25" alt="image description" /></em>' +
'		    <span class="wprx-text">'+this.i18n('link.ping')+'</span>' +
'		</a></li>' +
'		<li><a href="http://whoer.net/checkwhois">' +
'		    <em class="wprx-ico"><img src="' + RQ_PATH + '/images/ico22.png" width="25" height="25" alt="image description" /></em>' +
'		    <span class="wprx-text">'+this.i18n('link.whois')+'</span>' +
'		</a></li>' +
'	      </ul>' +
'	    </div>' +
'	    ' +
'	  </div>' +
'	</div>' +
'      </div>' +
'      </div>' +
'      <div class="wprx-page-frame" style="text-align: center;">' +
'      </div>'
);
			return true;
		}	
	};
	
})();


wprx_jq(function() {
    wprx_top_panel.loadCSSFile("http"+((document.location.toString().toLowerCase().indexOf('https') ==0)?"s":"")+"://"+REAL_PROXY_HOST+"/home287/css/style.css");	

    if(wprx_top_panel.init()) {
        wprx_jq('#wprx-page #wprx-ipselect').on('change', function(){
            window.location = 'http://' + this.value + '/home287/cmd?urlText='+ encodeURIComponent(REAL_URL);
            return false;
        });
    }
}); 
