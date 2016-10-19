var _window = window;

function blockScreen()
{
	if($('#blocker').length == 0)
		$('body').append('<div id="blocker"></div>');
}

function unblockScreen()
{
	$('#blocker').remove();
}

function center(obj)
{
	var h = $(window).height();
	var w = $(window).width();
	var letterWidth = obj.outerWidth();
	var letterHeight = obj.outerHeight();
	obj.css({top: (h / 2 - letterHeight / 2) + "px", left: (w / 2 - letterWidth / 2) + "px"})
}

function generateHtmlFields(s)
{
	var html = '<fieldset><legend>' + s.name + '</legend>'
		+ '<form><table>'
		+ '<tr><td valign="top"><label for="' + s.name + 'name">Site name:</label></td><td><input type="text" class="nameField" id="' + s.name + 'name" value="' + s.name + '" /></td></tr>'
		+ '<tr><td valign="top"><label for="' + s.name + 'url">URL:</label></td><td><input type="text" class="urlField" id="' + s.name + 'url" value="' + s.url + '" /></td></tr>'
		+ '<tr><td valign="top">Expect:</td><td>'
		+ '<input type="radio" name="responseType" id="' + s.name + 'anyResponse" value="any" ' + (s.expected == '' ? 'checked="checked"' : '' ) + '/><label for="' + s.name + 'anyResponse">Any response</label><br />'
		+ '<input type="radio" class="specificResponse" name="responseType" id="' + s.name + 'thisResponse" value="specific" ' + (s.expected != '' ? 'checked="checked"' : '' ) + '/><label for="' + s.name + 'thisResponse">This response:</label>&nbsp;&nbsp;&nbsp;<a href="#" class="getCurrentResponse">Use Current Response</a><br />'
		+ '<textarea ' + (s.expected == '' ? 'disabled="disabled"' : '' ) + ' name="' + s.name + 'response">' + s.expected + '</textarea>'
		+ '</td></tr>'
		+ '<tr><td colspan="2" style="text-align: right;"><a href="#" class="deleteThis">Delete Entry</a></td></tr>'
		+ '</table></form></fieldset>';
	return html;
}

$(".nameField").live("change keyup", function()
{
	$(this).closest("fieldset").find("legend").html($(this).val());
});

$(".getCurrentResponse").live("click", function(e)
{
	e.preventDefault();
	var url = $(this).closest("fieldset").find(".urlField").val();
	if(url.substring(0, 7) != "http://" && url.substring(0, 8) != "https://")
		url = "http://" + url;
	
	var responseTextArea = $(this).siblings("textarea");
	$(this).siblings(".specificResponse").attr("checked","checked");
	responseTextArea.attr("disabled","");
	$.ajax({
		url: url,
		success: function(data)
		{
			responseTextArea.html($.trim(data));
		}
	});
});

$("#cancel").live("click", function()
{
	_window.close();
});

$("#addNewServer").live("click", function()
{
	var numNewServers = 1;
	$("#servers legend").each(function()
	{
		if($(this).html().substring(0, 10) == "New Server") numNewServers++;
	});
	$("#servers").prepend(generateHtmlFields(new Site("New Server" + numNewServers, "http://")));
});

$(".deleteThis").live("click", function(e)
{
	e.preventDefault();
	$(this).closest("fieldset").remove();
});

$("input[name='responseType']:checked").live("change", function()
{
	if($(this).val() == 'any')
	{
		$(this).closest("fieldset").find("textarea").attr("disabled","disabled");
	}
	else
	{
		$(this).closest("fieldset").find("textarea").attr("disabled","");
	}
});

$("#save").live("click", function()
{
	var newSites = new Array();
	var sitesToAdd = $("#servers fieldset");
	
	for(i=0;i<sitesToAdd.length;i++)
	{
		var name = $(sitesToAdd[i]).find(".nameField").val();
		if(name in newSites)
		{
			alert("Each server must be given a unqiue name. Please rename \"" + name + "\" and try again.");
			return;
		}
		else
		{
			newSites[name] = new Site(name, $(sitesToAdd[i]).find(".urlField").val());
			newSites[name].setOrder(i);
			if($(sitesToAdd[i]).find("input:checked").val() == "specific")
			{
				var expected = $(sitesToAdd[i]).find("textarea").val();
				newSites[name].setExpected($.trim(expected));
			}
		}
	}
	clearSitesFromLocalStorage();
	for(i in newSites)
	{
		writeSiteToLocalStorage(newSites[i]);
	}
	
	localStorage['setting:minutesBetweenChecks'] = Math.abs(parseInt($("#interval").val()));
	localStorage['setting:notifyOnError'] = $("#notifyOnError").attr("checked") ? 1 : 0;
	localStorage['setting:notifyOnWarning'] = $("#notifyOnWarning").attr("checked") ? 1 : 0;
	localStorage['setting:notifyOnRepair'] = $("#notifyOnRestore").attr("checked") ? 1 : 0;
	localStorage['setting:timeout'] = Math.abs(parseInt($("#timeout").val())) * 1000;
	
	var bgPage = chrome.extension.getBackgroundPage();
	bgPage.sites = bgPage.getSitesFromLocalStorage();
	bgPage.minutesBetweenChecks = parseInt($("#interval").val());
	bgPage.notifyOnError = $("#notifyOnError").attr("checked");
	bgPage.notifyOnWarning = $("#notifyOnWarning").attr("checked");
	bgPage.notifyOnRepair = $("#notifyOnRestore").attr("checked");
	bgPage.$.ajaxSetup({timeout: localStorage['setting:timeout']});
	chrome.extension.getBackgroundPage().runChecks(true);
	_window.close();
});

$("#help").live("click", function()
{
	chrome.tabs.create({url: "http://peterbaehr.com/servermonitor/help"});
});

$("#reorderServers").live("click", function()
{
	blockScreen();
	$("body").append('<div id="popup"><h1>Reorder Servers</h1><ul id="serverList"></ul><button id="closePopup"><img src="/test-folder/img/accept.png" /> OK</button></div>');
	center($("#popup"));
	
	var sitesToAdd = $("#servers fieldset");
	for(i=0;i<sitesToAdd.length;i++)
	{
		$("#serverList").append("<li>" + $(sitesToAdd[i]).find(".nameField").val() + "<img src='/test-folder/img/up.png' alt='Move Up' title='Move Up' class='moveUp' /><img src='/test-folder/img/down.png' alt='Move Down' title='Move Down' class='moveDown' /></li>");
		$("#serverList li:last").data("name", $(sitesToAdd[i]).find(".nameField").val());
	}
});

$("#closePopup").live("click", function()
{
	$("#popup").remove();
	unblockScreen();
});

$(".moveUp").live("click", function()
{
	if($(this).closest("li").prev().length > 0)
	{
		var name = $(this).closest("li").data("name");
		$(this).closest("li").prev().before($(this).closest("li").detach());
		var sitesToAdd = $("#servers fieldset");
		for(i=0;i<sitesToAdd.length;i++)
		{
			if($(sitesToAdd[i]).find(".nameField").val() == name)
			{
				$(sitesToAdd[i]).prev().before($(sitesToAdd[i]).detach());
				break;
			}
		}
	}
});

$(".moveDown").live("click", function()
{
	if($(this).closest("li").next().length > 0)
	{
		var name = $(this).closest("li").data("name");
		$(this).closest("li").next().after($(this).closest("li").detach());
		var sitesToAdd = $("#servers fieldset");
		for(i=0;i<sitesToAdd.length;i++)
		{
			if($(sitesToAdd[i]).find(".nameField").val() == name)
			{
				$(sitesToAdd[i]).next().after($(sitesToAdd[i]).detach());
				break;
			}
		}
	}
});
