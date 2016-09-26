/* So yes, not JavaScriptish style...
 *         not optimum for JS ;)
 *         but with a packer it's not a problem...
 * So let's speak in language of Love
 */

/* Need refactoring, my friend, need refactoring...  */

var $x = function( id ) { return document.getElementById( id ); };

var NA                = 'N/A';
var NAS               = '<span class="disabled">' + NA + '</span>';
var preloader_default = '/images/preloader.gif';
var ajax_timeout      = 25 * 1000;
var time_difference   = 5  * 60;

var oses = [ 'winnt', 'win32', 'win98', 'windows', 'linux', 'bsd', 'mac os',
'darwin', 'minix', 'aix', 'irix', 'hpux', 'qnx', 'sunos', 'solaris', 'hurd',
'symbian', 'nintendo', 'psp', 'playstation', 'nitro', 'netware', 'beos',
'plan', 'freedos', 'reactos', 'junos', 'inferno', 'android', 'openmoko',
'mobilinux', 'palm', 'javafx', 'centos' ];
var mobiles = [ 'sonyericsson', 'nokia', 'motorola' ];  // Need more ;)


var languages = 'aa aa-dj aa-er aa-et af am ar ar-ae ar-bh ar-dz ar-eg ar-in ar-iq ar-jo ar-kw ar-lb ar-ly ar-ma ar-mr ar-om ar-ps ar-qa ar-sa ar-sd ar-so ar-sy ar-td ar-tn ar-ye az be bg bm bn bn-bd bs ca ch ch-mp cs da da-de da-dk da-fo da-gl de de-at de-be de-ch de-de de-dk de-fr de-hu de-it de-li de-lu de-pl dv dz el el-cy el-gr en en-ag en-ai en-as en-au en-bb en-be en-bm en-bn en-bs en-bw en-bz en-ca en-ck en-cm en-dm en-er en-et en-fj en-fk en-fm en-gb en-gd en-gh en-gi en-gm en-gu en-gy en-hk en-ie en-il en-in en-io en-jm en-ke en-ki en-kn en-ky en-lc en-lr en-ls en-mh en-mp en-ms en-mt en-mu en-mw en-na en-nf en-ng en-nr en-nu en-nz en-pg en-ph en-pk en-pr en-pw en-rw en-sb en-sc en-sg en-sl en-so en-sz en-tk en-to en-tt en-ug en-um en-us en-vc en-vg en-vu en-ws en-za en-zm en-zv es es-ar es-bo es-cl es-co es-cr es-cu es-do es-ec es-es es-gq es-gt es-hn es-mx es-ni es-pa es-pe es-pr es-py es-sv es-uy es-ve et fa fa-ir fi fi-fi fi-se fj fo fr fr-ad fr-bi fr-bj fr-ca fr-cd fr-cf fr-cg fr-ch fr-ci fr-cm fr-dj fr-fr fr-ga fr-gb fr-gn fr-gp fr-ht fr-it fr-km fr-lb fr-lu fr-mc fr-mg fr-ml fr-mq fr-nc fr-ne fr-pf fr-rw fr-sc fr-sn fr-td fr-tg fr-vu fr-yt ga ga-ie gn ha he he-il hi ho hr hr-ba hr-hr ht hu hu-hu hu-sl hy id is it it-ch it-it it-sl it-sm ja jv ka kg kk km ko ko-kr ku ky lb lg lo lt lv mg mh mk mn mo mo-mo ms ms-my ms-sg mt my my-my na nb-no ne ne-ne nl nl-an nl-aw nl-be nl-nl nl-sr nn-NO no no-no pl pl-pl ps pt-ao pt-br pt-cv pt-gw pt-mz pt-pt pt-st pt-tl qu ro ro-ro ru ru-ru ru-ua rw rw-rw sd sd-pk sg si sk sk-sk sl sm sn so so-so sq sr sr-ba ss ss-sz sv sv-fi sv-se sw sw-tz ta ta-sg tg th tk tl to to-to tr tr-tr tw uk ur ur-pk uz uz-uz vi yi zh-cn zh-hk zh-mo zh-sg zh-tw zu';

var lang_array = languages.split( ' ' );
var ua_lang    = [ ];

for ( lid in lang_array )
    ua_lang[ lang_array[ lid ] ] = 1;


/* Escape HTML entities
 * thanks to: http://code.google.com/p/jslibs/wiki/JavascriptTips
 */
var entity_to_code = { __proto__: null,
apos:0x0027,quot:0x0022,amp:0x0026,lt:0x003C,gt:0x003E,nbsp:0x00A0,iexcl:0x00A1,cent:0x00A2,pound:0x00A3,
curren:0x00A4,yen:0x00A5,brvbar:0x00A6,sect:0x00A7,uml:0x00A8,copy:0x00A9,ordf:0x00AA,laquo:0x00AB,
not:0x00AC,shy:0x00AD,reg:0x00AE,macr:0x00AF,deg:0x00B0,plusmn:0x00B1,sup2:0x00B2,sup3:0x00B3,
acute:0x00B4,micro:0x00B5,para:0x00B6,middot:0x00B7,cedil:0x00B8,sup1:0x00B9,ordm:0x00BA,raquo:0x00BB,
frac14:0x00BC,frac12:0x00BD,frac34:0x00BE,iquest:0x00BF,Agrave:0x00C0,Aacute:0x00C1,Acirc:0x00C2,Atilde:0x00C3,
Auml:0x00C4,Aring:0x00C5,AElig:0x00C6,Ccedil:0x00C7,Egrave:0x00C8,Eacute:0x00C9,Ecirc:0x00CA,Euml:0x00CB,
Igrave:0x00CC,Iacute:0x00CD,Icirc:0x00CE,Iuml:0x00CF,ETH:0x00D0,Ntilde:0x00D1,Ograve:0x00D2,Oacute:0x00D3,
Ocirc:0x00D4,Otilde:0x00D5,Ouml:0x00D6,times:0x00D7,Oslash:0x00D8,Ugrave:0x00D9,Uacute:0x00DA,Ucirc:0x00DB,
Uuml:0x00DC,Yacute:0x00DD,THORN:0x00DE,szlig:0x00DF,agrave:0x00E0,aacute:0x00E1,acirc:0x00E2,atilde:0x00E3,
auml:0x00E4,aring:0x00E5,aelig:0x00E6,ccedil:0x00E7,egrave:0x00E8,eacute:0x00E9,ecirc:0x00EA,euml:0x00EB,
igrave:0x00EC,iacute:0x00ED,icirc:0x00EE,iuml:0x00EF,eth:0x00F0,ntilde:0x00F1,ograve:0x00F2,oacute:0x00F3,
ocirc:0x00F4,otilde:0x00F5,ouml:0x00F6,divide:0x00F7,oslash:0x00F8,ugrave:0x00F9,uacute:0x00FA,ucirc:0x00FB,
uuml:0x00FC,yacute:0x00FD,thorn:0x00FE,yuml:0x00FF,OElig:0x0152,oelig:0x0153,Scaron:0x0160,scaron:0x0161,
Yuml:0x0178,fnof:0x0192,circ:0x02C6,tilde:0x02DC,Alpha:0x0391,Beta:0x0392,Gamma:0x0393,Delta:0x0394,
Epsilon:0x0395,Zeta:0x0396,Eta:0x0397,Theta:0x0398,Iota:0x0399,Kappa:0x039A,Lambda:0x039B,Mu:0x039C,
Nu:0x039D,Xi:0x039E,Omicron:0x039F,Pi:0x03A0,Rho:0x03A1,Sigma:0x03A3,Tau:0x03A4,Upsilon:0x03A5,
Phi:0x03A6,Chi:0x03A7,Psi:0x03A8,Omega:0x03A9,alpha:0x03B1,beta:0x03B2,gamma:0x03B3,delta:0x03B4,
epsilon:0x03B5,zeta:0x03B6,eta:0x03B7,theta:0x03B8,iota:0x03B9,kappa:0x03BA,lambda:0x03BB,mu:0x03BC,
nu:0x03BD,xi:0x03BE,omicron:0x03BF,pi:0x03C0,rho:0x03C1,sigmaf:0x03C2,sigma:0x03C3,tau:0x03C4,
upsilon:0x03C5,phi:0x03C6,chi:0x03C7,psi:0x03C8,omega:0x03C9,thetasym:0x03D1,upsih:0x03D2,piv:0x03D6,
ensp:0x2002,emsp:0x2003,thinsp:0x2009,zwnj:0x200C,zwj:0x200D,lrm:0x200E,rlm:0x200F,ndash:0x2013,
mdash:0x2014,lsquo:0x2018,rsquo:0x2019,sbquo:0x201A,ldquo:0x201C,rdquo:0x201D,bdquo:0x201E,dagger:0x2020,
Dagger:0x2021,bull:0x2022,hellip:0x2026,permil:0x2030,prime:0x2032,Prime:0x2033,lsaquo:0x2039,rsaquo:0x203A,
oline:0x203E,frasl:0x2044,euro:0x20AC,image:0x2111,weierp:0x2118,real:0x211C,trade:0x2122,alefsym:0x2135,
larr:0x2190,uarr:0x2191,rarr:0x2192,darr:0x2193,harr:0x2194,crarr:0x21B5,lArr:0x21D0,uArr:0x21D1,
rArr:0x21D2,dArr:0x21D3,hArr:0x21D4,forall:0x2200,part:0x2202,exist:0x2203,empty:0x2205,nabla:0x2207,
isin:0x2208,notin:0x2209,ni:0x220B,prod:0x220F,sum:0x2211,minus:0x2212,lowast:0x2217,radic:0x221A,
prop:0x221D,infin:0x221E,ang:0x2220,and:0x2227,or:0x2228,cap:0x2229,cup:0x222A,
there4:0x2234,sim:0x223C,cong:0x2245,asymp:0x2248,ne:0x2260,equiv:0x2261,le:0x2264,ge:0x2265,
sub:0x2282,sup:0x2283,nsub:0x2284,sube:0x2286,supe:0x2287,oplus:0x2295,otimes:0x2297,perp:0x22A5,
sdot:0x22C5,lceil:0x2308,rceil:0x2309,lfloor:0x230A,rfloor:0x230B,lang:0x2329,rang:0x232A,loz:0x25CA,
spades:0x2660,clubs:0x2663,hearts:0x2665,diams:0x2666,int:0x222B
};

var char_to_entity = {};
for ( var entity_name in entity_to_code )
    char_to_entity[ String.fromCharCode(entity_to_code[entity_name])] = entity_name;

// escape entities... Nice function name, e_e is like a smile :)
function e_e( str ) {
    return str.replace( /./g,
        function( str ) {
            return char_to_entity[str]
                ? '&' + char_to_entity[str] + ';'
                : str;
        } );
};


function get_language_full( ) {
    var result = '', lang_app = '', lang_ua = '';
    var lang_names = [ "language", "browserLanguage",
                       "userLanguage", "systemLanguage" ];
    for ( var i in lang_names ) {
        try {
            if ( typeof( window.navigator[ lang_names[ i ] ] ) == "undefined" ) continue;
            result += window.navigator[ lang_names[ i ] ] + " | ";
        } catch ( e ) { };
    }
    result = result.replace( / \| $/, '' );

    if ( typeof( window.navigator[ 'userAgent' ] ) != "undefined" )
        try {
            lang_ua  = detect_lang_from_header( window.navigator[ 'userAgent' ] );
        } catch ( e ) { };
    if ( typeof( window.navigator[ 'appVersion' ] ) != "undefined" )
        try {
            lang_app = detect_lang_from_header( window.navigator[ 'appVersion' ] );
        } catch ( e ) { };

    if ( ( lang_ua == '' && lang_app == '' )
        || ( lang_ua != '' && lang_app != '' ) ) {
        result = result ? result + " | " + lang_ua : lang_ua;
    }
    else {
        var separator = result ? " | " : '';
        if ( lang_ua && lang_app ) {
            result += separator + lang_ua + separator + lang_app;
        }
        else {
            result += separator + ( lang_ua ?  lang_ua : lang_app );
        }
    }
    // mind ? suffering : God

    result = result.replace( / \| $/, '' );

    return result;
}


function detect_lang_from_header( ua ) {
    var ua_orig = ua;
    var result  = '';

    // Quick detection for [lang]
    if ( /\[(\w\w|\w\w-\w\w)\]/.test( ua.toLowerCase( ) ) ) {
        if ( ua_lang[ RegExp.$1 ] ) {
            result = RegExp.$1;
        }
    }
    // Esperanto
    else if ( /esperanto/.test( ua.toLowerCase( ) ) ) {
        result = 'esperanto';
    }
    // Quick detection for en
    else if ( /; en[;)]/.test( ua.toLowerCase( ) ) ) {
        result = 'en';
    }
    // Other
    else {
        var chunks = ua.toLowerCase( ).split( /;|\)/ );
        for ( i in chunks ) {
            chunks[ i ] = chunks[ i ].replace( '_', '-' );
            if ( /^[ \w\-,]{0,} (\w\w|\w\w-\w\w)$/.test( chunks[ i ].toLowerCase( ) ) ) {
                if ( ua_lang[ RegExp.$1 ] ) {
                    result = chunks[ i ];
                    result = result.replace( /\s+/, '' );
                }
            }
        }
    }

    return result;
}

function get_os_full ( ) {
    var os_full = '', os_cpu = '', os_platform = '', os_ua = '', os_app = '';
    var os_container = [ ];

    if ( typeof( window.navigator[ 'platform' ] ) != "undefined" )
        os_container.push( window.navigator[ 'platform' ] );
    if ( typeof( window.navigator[ 'oscpu' ] ) != "undefined" )
        os_container.push( window.navigator[ 'oscpu' ] );
    if ( typeof( window.navigator[ 'userAgent' ] ) != "undefined" )
        try {
            os_container.push( detect_os_from_header( window.navigator[ 'userAgent' ] ) );
        } catch ( e ) { };
    if ( typeof( window.navigator[ 'appVersion' ] ) != "undefined" )
        try {
            os_container.push( detect_os_from_header( window.navigator[ 'appVersion' ] ) );
        } catch ( e ) { };

    os_container.sort( );
    for ( var i = 1; i < os_container.length; i++ ) {
        if ( os_container[ i - 1] == os_container[ i ]
             || os_container[ i ] == '' ) {
            os_container.splice( i, 1 );
            i -= 1;
        }
    }

    os_full = os_container.join( ' | ' );
    if ( os_full == '' )
        os_full = iloc( 'Unknown' );
    os_full = os_full.replace( /(^\s?\|| \|\s?$)/, '' );

    return os_full;
}


function get_chunk_from_user_agent( ua, ozez ) {
    var result = '';

    for ( os in ozez ) {
        var re = new RegExp( ozez[ os ], 'i' );
        if ( re.test( ua.toLowerCase( ) ) ) {
            var chunks = ua.split( ';' );
            for ( chid in chunks ) {
                chunks[ chid ] = chunks[ chid ].replace( /^\s+/, '' );
                chunks[ chid ] = chunks[ chid ].replace( /\s+$/, '' );
                if ( re.test( chunks[ chid ].toLowerCase( ) ) ) {
                    result = chunks[ chid ];
                    break;
                }
            }
            break;
        }
    }

    return result;
}


function detect_os_from_header( ua ) {
    var ua_orig = ua;
    var result  = '';
    var windows = 0, macintosh = 0;

    // Quick Windows or Mac detection
    if ( /^.*?(\(|\( )Macintosh;/i.test( ua.toLowerCase( ) ) ) {
        macintosh = 1;
        ua = ua.replace( /^.*?\(Macintosh;/i, '' );
    }
    if ( /^.*?(\(|\( )Windows;/i.test( ua.toLowerCase( ) ) ) {
        windows = 1;
        ua = ua.replace( /^.*?\(Windows;/i, '' );
    }

    // Detect OS
    result = get_chunk_from_user_agent( ua, oses );

    result = result.replace( /^(Mozilla|Opera|[\d.]+).*?\(/, '' );
    if ( ! /\(/.test( result ) )
        result = result.replace( /\)$/, '' );
    result = ( ! result && macintosh == 1 ) ? 'Macintosh' : result;
    result = ( ! result && windows == 1 ) ? 'Windows' : result;

    // Add information about mobile telephone too :)
    var mobile_detected = 0, in_result = 0;
    for ( mid in mobiles ) {
        var re = new RegExp( mobiles[ mid ], 'i' );
        if ( re.test( ua.toLowerCase( ) ) )
            mobile_detected = 1;
        if ( re.test( result.toLowerCase( ) ) )
            in_result = 1;

    }
    if ( mobile_detected && ( result == '' || ! in_result ) ) {
        var mobile = get_chunk_from_user_agent( ua, mobiles );
        if ( mobile )
            result += ( result ? ', ' + mobile : mobile );
    }

    // skip parenthesis
    if ( /^(.*)\).*?(\[.*\]|KHTML|NetFront)/.test( result ) )
        result = RegExp.$1;
    result = result.replace( /[\)\(]/g, '' );

    // curl
    if ( /curl\/.* \((.*?)\)/.test( ua.toLowerCase( ) ) )
        result = RegExp.$1;

    return result;
}


// Simple localization
var inters = new Array;
inters['ru'] = [ ];
var en_msg
    = [
       'Mismatch',
       'Match',
       'Unknown',
       'enabled',
       'disabled',
       'more',
       'hide',
       'show',
       'Cannot connect to whois',
       'Anonymizer detected'
       ];
var ru_msg
    = [
       'ÐÐµ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÐµÑ‚',
       'Ð¡Ð¾Ð²Ð¿Ð°Ð´Ð°ÐµÑ‚',
       'ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð¾',
       'Ð²ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¾',
       'Ð²Ñ‹ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¾',
       'ÐµÑ‰Ðµ',
       'ÑÐºÑ€Ñ‹Ñ‚ÑŒ',
       'Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ',
       'ÐÐµÐ²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ ÑÐ¾ÐµÐ´Ð¸Ð½Ð¸Ñ‚ÑŒÑÑ Ñ whois',
       'ÐžÐ±Ð½Ð°Ñ€ÑƒÐ¶ÐµÐ½ Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð°Ð¹Ð·ÐµÑ€'
       ];
for ( var i in en_msg ) {
    inters[ 'ru' ][ en_msg[ i ] ] = ru_msg[ i ];
}

function iloc ( phrase ) {
    var lang = 'en';

    if ( document.cookie.indexOf( "LANG=ru" ) >= 0 ) {
        lang = 'ru';
    }

    if ( lang == 'en' ) {
        return phrase;
    }
    else {
        var result = "";
        result = inters[ lang ][ phrase ];
        if ( result == undefined ) {
            return phrase;
        }
        else {
            return result;
        }
    }
}


/* Time */
function check_time_difference ( system_t, local_t, local_z, diff_t) {
    var dts = new Date( );
    var zt = dts.toString( );
    var sys_el     = $x( system_t );
    var local_el   = $x( local_t );
    var local_z_el = $x( local_z );
    var diff_el    = $x( diff_t );
    sys_el.innerHTML = zt;

    // I like to lisping, lisping... ;)
    var system_ts = ( Math.round( dts.getTime( ) / 1000 )
                      + ( ( dts.getTimezoneOffset( ) * 60 ) * ( -1 ) ) );
    var local_ts  = local_el.innerHTML;
    var ts_diff   = Math.abs( system_ts - local_ts );

    var local_zone = local_z_el.innerHTML;
    var mismatched = 0;

    try {
        var zonez = /(GMT|UTC)([+-]\d\d\d\d)/g.exec( zt );
        if ( zonez != null ) {
            if (local_zone == 'GMT' && zonez[2] == '+0000') {
                local_zone = 'GMT+0000';
            }

            if ( local_zone != ( "GMT" + zonez[2] ) ) {
                mismatched = 1;
            }
        }
        else {
            var zonez_n = /(GMT|UTC)/g.exec( zt );
            if ( zonez_n != null ) {
                if ( local_zone != "GMT" ) { // [C] Fix "UTC"?
                    mismatched = 1;
                }
            }
        }
    }
    catch( e ) { };



    if ( local_ts != NA && local_ts != "-" && local_ts != "" ) {
         if ( ts_diff > time_difference || mismatched == 1 ) {
             diff_el.className = "timediff";
             diff_el.innerHTML = iloc( "Mismatch" );
         }
         else {
             diff_el.innerHTML = iloc( "Match" );
         }
    }
}


function get_window_size ( ) {
    var win_width  = "?";
    var win_height = "?";

    try {
        if ( document.all ) {
            win_width  = document.body.offsetWidth;
            win_height = document.body.offsetHeight;
        }
        else if ( document.layers ) {
            win_width  = document.body.width;
            win_height = document.body.height;
        }
        else if ( document.body.clientWidth != null ) {
            win_width  = document.body.clientWidth;
            win_height = document.body.clientHeight;
        }
    }
    catch ( e ) { };

    return win_width + "x" + win_height
           + " (" + screen.width + "x" + screen.height + ")";
}


var scripts = new Object;

scripts = {
    encolor: '#4b4b4b',
    // JavaScript
    js: function ( el_id ) {
        var js_el         = $x( el_id );
        js_el.innerHTML   = iloc("enabled");
        js_el.style.color = scripts.encolor;
    },
    // Java
    java: function ( el_id ) {
        if ( window.navigator.javaEnabled( ) ) {
            var jv_el         = $x( el_id );
            jv_el.innerHTML   = iloc("enabled");
            jv_el.style.color = scripts.encolor;
        }
    },
    // ActiveX
    activex: function ( el_id ) {
        try {
            var AXO           = ActiveXObject;
            var ax_el         = $x( el_id );
            ax_el.innerHTML   = iloc( "enabled" );
            ax_el.style.color = scripts.encolor;
        }
        catch ( e ) { };
    },
    // VBScript
    vbscript: function ( el_id ) {
        try {
            VBSEnabled( );
            var vbs_el         = $x( el_id );
            vbs_el.innerHTML   = iloc( "enabled" );
            vbs_el.style.color = scripts.encolor;
        }
        catch ( e ) { };
    },
    // Firebug
    firebug: function ( el_id ) {
        try {
            if (window.console && (window.console.firebug || window.console.exception)) {
                var fb_el         = $x( el_id );
                fb_el.innerHTML   = iloc( "enabled" );
                fb_el.style.color = scripts.encolor;
            }
        }
        catch ( e ) { };
    },
    // Navigator
    navigator: function ( el_id ) {
        var td_add = "";

        var nav_el = $x( el_id );
        nav_el.innerHTML = '&nbsp;';

        for ( var key in window.navigator ) {
            //if (typeof(window.navigator[key]) == "function") continue;
            //if (typeof(window.navigator[key]) == "object") continue;
            document.write( '<tr><td style="padding-left: 20px;" '
                            + 'class="wtl' + td_add + '">'
                            + e_e( key ) + '</td><td class="wtr'
                            + td_add + '">'+ window.navigator[ key ]
                            + "&nbsp;</td></tr>" );
            td_add = ( td_add == "" ) ? "_z" : "";
        }
    },
    // JavaScript User-Agent
    jsua: function ( jsh_id, brh_id, jsbr_diff ) {
        var jsua_el         = $x( jsh_id );
        var brua_el         = $x( brh_id );
        var jsbrdiff_el     = $x( jsbr_diff );
        jsua_el.innerHTML   = window.navigator[ "userAgent" ]
                            ? e_e( window.navigator[ "userAgent" ] )
                            : NAS;
        jsua_el.style.color = scripts.encolor;

        if ( jsua_el.innerHTML != brua_el.innerHTML ) {
            jsbrdiff_el.className = "timediff";
            jsbrdiff_el.innerHTML = iloc( "Mismatch" );
        }
        else {
            jsbrdiff_el.innerHTML = iloc( "Match" );
        }
    },
    // Screen
    screen: function ( el_id ) {
        var td_add = "";
        var ss_el = $x( el_id );
        ss_el.innerHTML = '&nbsp;';

        var screen_names = [ "colorDepth", "pixelDepth", "height",
                             "width","availHeight", "availWidth", "top",
                             "left", "availTop", "availLeft", "window size" ];

        for ( var i in screen_names ) {
            //if (typeof(window.screen[screenNames[i]]) == "undefined") continue;

            document.write( '<tr><td style="padding-left: 20px;" class="wtl'
                            + td_add + '">'
                            + screen_names[ i ] + '</td><td class="wtr'
                            + td_add +  '">'
                            + ( screen_names[ i ] == "window size"
                                ? get_window_size( )
                                : window.screen[ screen_names[ i ] ] )
                            + "&nbsp;</td></tr>" );
            td_add = ( td_add == "" ) ? "_z" : "";
        }
    },
    // Languages
    languages: function ( el_id, add ) {
        var lang_el = $x( el_id );
        var lang_value = lang_el.innerHTML;

        var detected_language = e_e( get_language_full( ) );

        if ( detected_language != '' ) {
            if ( ! add ) {
                lang_el.innerHTML = detected_language;
            }
            else {
                lang_el.innerHTML
                    = ( lang_el.innerHTML.search( NA ) != -1
                        ? detected_language
                        : lang_el.innerHTML + " | " + detected_language );
            }
        }
    },
    // OS
    os: function ( el_id ) {
        var os_el = $x( el_id );

        var detected_os = e_e( get_os_full( ) );

        if (detected_os == '') {
          os_el.innerHTML = iloc( "Unknown" );
        }
        else {
          os_el.innerHTML = detected_os;
        }
    }
};

function fill_inner_html ( el_id, container ) {
    el_id = el_id.replace( "\n", "" );
    var set_el = $x( el_id );

    if ( container == NA || container == '' || container == ' ' ) {
        container = NAS;
    }
    set_el.innerHTML = container;
}


function flash_ajax_request( target_div, file, preloader ) {
    var flash_http_request = false;
    var flash_http_loading = preloader
                           ? '<img align="middle" src="' + preloader + '" border="0"/>'
                           : '<img align="middle" src="' + preloader_default + '" border="0"/>';
    var error_msg = '*';
    $x( target_div ).innerHTML = flash_http_loading;

    file = encodeURI( file );

    if ( window.XMLHttpRequest ) {
        try {
            flash_http_request = new XMLHttpRequest( );
        }
        catch(e) {
            flash_http_request = false;
        }
    }
    else if ( window.ActiveXObject ) {
        try {
            flash_http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch( e ) {
            try {
                flash_http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch( e ) {
                flash_http_request = false;
            }
        }
    }
    else {
        flash_http_request = false;
    }

    if ( flash_http_request ) {
        flash_http_request.open( "GET", file, true );
        flash_http_request.onreadystatechange = function ( ) {
            if ( flash_http_request.readyState == 4 ) {
                var base_req = file.replace(/\?.*$/, '');
                if ( ( flash_http_request.responseText.indexOf( base_req ) >= 0
                       && base_req.indexOf( '/whois' ) < 0 )
                     || ( flash_http_request.responseText.indexOf( base_req ) >= 0
                         && base_req.indexOf( '/whois' ) >= 0
                         && flash_http_request.responseText.indexOf( 'viawhoer' ) < 0 ) ) {
                    $x(target_div).innerHTML
                        = '<span class="ipa_alarm">'
                          + iloc( "Anonymizer detected" )
                          + '</span>';
                }
                else {
                    var response = NAS;
                    if ( flash_http_request.responseText == NA
                         || flash_http_request.responseText == '' ) {
                        response = NAS;
                    }
                    else {
                        response = flash_http_request.responseText;
                    }
                    $x(target_div).innerHTML
                        = response;
                }
            }
            else {
                $x(target_div).innerHTML = flash_http_loading;
            }
        };
        flash_http_request.send( null );
    }
    else {
        $x(target_div).innerHTML = error_msg;
    }
}

function load_script( src ) {
    var document_scripts = document.getElementsByTagName( "script" );
    for ( var document_scripts_index = 0;
          document_scripts_index < document_scripts.length;
          ++document_scripts_index ) {
        var document_script = document_scripts[ document_scripts_index ];
        if ( document_script.src == src ) return false;
    }
    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = src;
    document.getElementsByTagName('head')[0].appendChild( script );
    return 0;
}

function init_ajax_preloaders ( ids, preloader ) {
    var ids_array = ids.split( ',' );
    preloader = preloader
               ? '<img align="middle" src="' + preloader + '" border="0"/>'
               : '<img align="middle" src="' + preloader_default + '" border="0"/>';


    for ( var id = 0; id < ids_array.length; id++ ) {
        var id_el = $x( ids_array[ id ] );
        id_el.innerHTML = preloader;
    }

    window.setTimeout( "drop_ajax_loaders('" + ids + "', '" + NAS + "');",
                       ajax_timeout );
}


function drop_ajax_loaders ( ids, not_available ) {
    var ids_array = ids.split( ',' );

    for ( var id = 0; id < ids_array.length; id++ ) {
        var id_el = $x( ids_array[ id ] );
        // Need "loader" in the file name of preloader :)
        if ( id_el.innerHTML.indexOf( 'loader' ) > 0 ) {
            id_el.innerHTML = not_available;
        }
    }
}






var toggle = new Object;

toggle = {
    swap2: function( tocc, tocb, show_descr, initer ) {
        if ( !$x( tocc ) || !$x( tocb ) ) return;

        var toc_ctl  = $x( tocc );
        var toc_body = $x( tocb );
        if ( toc_body.style.display == 'none' && initer != 0 ) {
            var tmp0 = '\'' + tocc + '\',' + '\''
                        + tocb + '\',' + '\''
                        + show_descr + '\',' + '1' ;
            toc_body.style.display='';
            toc_ctl.innerHTML
                = '<a href="#" class="morehide" onClick="toggle.swap2('
                + tmp0
                +'); return false;" alt="' + iloc('hide') + '">' + iloc('hide') + '</a>';

            var dataz = "";

            if ( tocb == "whoiser" ) {
                if ( $x( 'whoiser' ) ) {
                    dataz = $x( 'whoiser' );
                    if ( dataz.innerHTML == ""
                         || dataz.innerHTML.indexOf( iloc( "Cannnot connect to whois" ) ) >= 0 ) {
                        flash_ajax_request( 'whoiser', $x('whois-req').innerHTML );
                    }
                }
            }
            else if ( tocb == "country" ) {
                var cmap = $x( 'cmap' );
                var cflag = $x( 'cflag' );
                if ( cmap.innerHTML == "" ) {
                    cmap.innerHTML = map_country;
                }
                if ( cflag.innerHTML == "" ) {
                    cflag.innerHTML = flag_country;
                }
            }
            else if ( tocb == "goomap" ) {
                var mapinner = $x( 'map' );
                if ( mapinner.innerHTML == "" ) {
                    if ( MGLtd != '-' && MGLng != '-'
                         && MGLtd != '' && MGLng != ''
                         && MGLtd != NA && MGLng != NA ) {
                        load_script( '/js/gmap.js?1245915414' );
                    }
                }
            }
        }
        else {
            var tmp1 = '\'' + tocc + '\',' + '\''
                     + tocb + '\',' + '\''
                     + show_descr + '\',' + '1';
            toc_body.style.display = 'none';
            toc_ctl.innerHTML = '<a href="#" class="morehide" onClick="toggle.swap2('
                              + tmp1 + '); return false;" alt="'
                              + show_descr + '">'
                              + show_descr + '</a>';
        }
    }
};


var pl_names
    = [
       [ "Shockwave Flash", [ "ShockwaveFlash.ShockwaveFlash" ], [ "disabled" ] ],
       [ "Shockwave for Director", [ "SWCtl.SWCtl" ], [ "disabled" ] ],
       [ "Windows Media Player", [ "WMPlayer.OCX" ], [ "disabled" ] ],
       [ "QuickTime", [ "QuickTime.QuickTime",
                        "QuickTimeCheckObject.QuickTimeCheck" ],
         [ "disabled" ] ],
       [ "SilverLight", [ "AgControl.AgControl" ], [ "disabled" ] ],
       [ "PDF", [ "AcroPDF.PDF", "PDF.PdfCtrl" ], [ "disabled" ] ],
       [ "RealPlayer", [ "rmocx.RealPlayer G2 Control",
                         "rmocx.RealPlayer G2 Control.1",
                         "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                         "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                         "RealPlayer" ],
         [ "disabled" ] ],
       [ "VLC", [ "VideoLAN.VLCPlugin" ], [ "disabled" ] ],
       [ "SVG", [ "Adobe.SVGCtl" ], [ "disabled" ]  ],
       [ "DevalVR", [ "DevalVRXCtrl.DevalVRXCtrl.1" ], [ "disabled" ] ]
        ];

function display_plugins ( el_id ) {
    var plug_el = $x( el_id );

    try {
        var AXO = ActiveXObject;
        plug_el.innerHTML = '&nbsp;';

        detect_ie_plugins( );

        var td_add = "";
        for (var pl_alias in pl_names) {
            document.write( '<tr><td style="padding-left: 20px;" '
                            + 'width="150px" class="wtl' + td_add + '">'
                            + pl_names[ pl_alias ][ 0 ] + '</td>'
                            + '<td class="wtr' + td_add + '">'
                            + ( pl_names[ pl_alias ][ 2 ]  == "disabled"
                                ? '<div class="disabled">' + iloc('disabled') + '</div>'
                                : iloc('enabled') )
                           + '</td></tr>' );
            td_add = ( td_add == "" ) ? "_z" : ""; }
    }
    catch( e ) {
        var td_add = "";
        plug_el.innerHTML = '&nbsp;';
        var available_plugins = 0;
        for ( var key = 0; key < window.navigator.plugins.length; key++ ) {
            if ( typeof( window.navigator.plugins[key] ) == "function" ) continue;
            if ( typeof( window.navigator.plugins[key].name ) == "undefined" ) continue;
            available_plugins++;
            document.write( '<tr><td style="padding-left: 20px;" '
                            + 'width="150px" class="wtl'
                            + td_add + '">'
                            + window.navigator.plugins[key].name
                            + '</td><td class="wtr' + td_add + '">'
                            + window.navigator.plugins[key].filename
                            + '&nbsp;</td></tr>' );
            td_add = ( td_add == "" ) ? "_z" : "";
        }
        if ( available_plugins == 0 ) {
            plug_el.innerHTML = NAS;
        }
    }
}

function detect_ie_plugins ( ) {
    for ( var pl_alias in pl_names ) {
        for ( var ax_name in pl_names[ pl_alias ][ 1 ] ) {
            try {
                try {
                    new ActiveXObject( pl_names[ pl_alias ][ 1 ][ ax_name ] );
                    pl_names[ pl_alias ][ 2 ]
                        = 'enabled';
                } catch( e ) { }
            } catch( e ) { }
        }
    }
}






/*
// for tooltips
function pw() {
    return window.innerWidth
           || document.documentElement.clientWidth
           || document.body.clientWidth;
};
function mouseX( evt ) {
    return evt.clientX ? evt.clientX
                         + ( document.documentElement.scrollLeft
                             || document.body.scrollLeft )
           : evt.pageX;
}
function mouseY( evt ) {
    return evt.clientY ? evt.clientY
                         + ( document.documentElement.scrollTop
                             || document.body.scrollTop)
                       : evt.pageY;
}
function popUp( evt, oi ) {
    if ( $x ) {
        var wp = pw( );
        dm = $x( oi );
        ds = dm.style;
        st = ds.visibility;
        if ( dm.offsetWidth )
            ew = dm.offsetWidth;
        else if ( dm.clip.width )
            ew = dm.clip.width;
        if ( st == "visible" || st == "show" ) {
            ds.visibility = "hidden";
        }
        else {
            tv = mouseY( evt ) + 20;
            lv = mouseX( evt ) - ( ew / 4 );
            if ( lv < 2 ) lv = 2;
            else if ( lv + ew > wp ) lv -= ew / 2;
            lv += 'px';
            tv += 'px';
            ds.left = lv;
            ds.top = tv;
            ds.visibility = "visible";
        }
    }
}
*/
