/**
 * @author Kirk Ouimet
 * @website http://www.yougetsignal.com/tools/open-ports/
 * @copyright 2008 Kirk Ouimet Design. All rights reserved.
 */

/* AJAX request to check port status
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––*/
var ajaxUpdater = new Ajax.Request('', {});
function checkPort(remoteAddress, portNumber) {
	if(validPort(portNumber)) {
		document.getElementById('statusDescription').innerHTML = "<p><img src=\"/img/loader.gif\" alt=\"Please wait...\" title=\"Please wait...\" style=\"width: 2.6875em; height: 0.6875em;\" /> Obtaining port status...</p>";
		var div = "statusDescription";
		var url = "http://ports.yougetsignal.com/check-port.php";
		var parameters = "remoteAddress=" + remoteAddress + "&portNumber=" + portNumber;
		ajaxUpdater.transport.abort(); // Cancel the previous request
		ajaxUpdater = new Ajax.Updater(div, url, {method: "post", postBody: parameters});	
	}
	else {
		document.getElementById('statusDescription').innerHTML = "<p>Please enter a valid port number, 1-65535.</p>";
	}
}

/* AJAX request to do a short scan across common ports
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––*/
function shortScan(remoteAddress) {
	document.getElementById('statusDescription').innerHTML = "<p><img src=\"/img/loader.gif\" alt=\"Please wait...\" title=\"Please wait...\" style=\"width: 2.6875em; height: 0.6875em;\" /> Performing short scan across common ports...</p>";
	var div = "statusDescription";
	var url = "http://ports.yougetsignal.com/short-scan.php";
	var parameters = "remoteAddress=" + remoteAddress;
	ajaxUpdater.transport.abort(); // Cancel the previous request	
	ajaxUpdater = new Ajax.Updater(div, url, {method: "post", postBody: parameters});	
}

/* Validate port number
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––*/
function validPort(value) {
	// Valid ports include 1 through 65535
	if(value > 0 && value < 65536) {
		return true;
	}

	return false;
}

/* Submit AJAX request using enter key
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––*/
function submitUsingEnter(e) {
	var characterCode;
	if(e && e.which){ // If which property of event object is supported (NN4)
		e = e;
		characterCode = e.which // Character code is contained in NN4's which property
	}
	else {
		e = event;
		characterCode = e.keyCode; // Character code is contained in IE's keyCode property
	}
	
	if(characterCode == 13){ // If generated character code is equal to ASCII 13 (the enter key)
		checkPort(document.getElementById('remoteAddress').value, document.getElementById('portNumber').value);
		return false;
	}
	else {
		return true;
	}
}
