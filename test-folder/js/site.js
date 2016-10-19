function Site(name, url)
{
	this.name = name;
	this.status = 0;
	this.url = url;
	this.expected = '';
	this.order = 0;
}

Site.prototype.setExpected = function(expected)
{
	this.expected = expected;
}

Site.prototype.setStatus = function(status)
{
	this.status = status;
}

Site.prototype.setOrder = function(order)
{
	this.order = order;
}

Site.prototype.updateStatus = function()
{
	var _this = this;
	var previousStatus = this.status;
	var url = this.url;
	if(url.substring(0, 7) != "http://" && url.substring(0, 8) != "https://")
		url = "http://" + url;
	
	var method = "GET";
	if(this.expected == '') method = 'HEAD';
	
	$.ajax({
		url: url,
		success: function(data)
		{
			if(_this.expected == '' || $.trim(data) == _this.expected)
			{
				_this.setStatus(3);
				if(_this.status != previousStatus && previousStatus != 0 && notifyOnRepair)
				{
					var notification = webkitNotifications.createNotification('img/ok.png', 'Server Restored', _this.name + ' has resumed normal function.');
					notification.show();
					setTimeout(function() { notification.cancel(); }, 5000);
				}
			}
			else
			{
				_this.setStatus(2);
				if(_this.status != previousStatus && previousStatus != 0 && notifyOnWarning)
				{
					var notification = webkitNotifications.createNotification('img/error.png', 'Unexpected Result', _this.name + ' responded, but with unexpected results.');
					notification.show();
					setTimeout(function() { notification.cancel(); }, 5000);
				}
			}
			updateIcon();
		},
		error: function()
		{
			_this.setStatus(1);
			if(_this.status != previousStatus && previousStatus != 0 && notifyOnError)
			{
				var notification = webkitNotifications.createNotification('img/exclamation.png', 'Server Not Responding', _this.name + ' has become unresponsive or took too long to respond.');
				notification.show();
				setTimeout(function() { notification.cancel(); }, 5000);
			}
			updateIcon();
		}
	});
}

function getSitesFromLocalStorage()
{
	var sites = new Array();
	for(name in localStorage)
	{
		if(name.substring(0,5) == "site:")
		{
			parameters = localStorage[name].split(",");
			if(parameters.length > 2)
			{
				s = new Site(name.substring(5), parameters[1]);
				s.setExpected(parameters[2]);
				s.setOrder(parameters[0]);
				sites.push(s);
			}
			else
			{
				s = new Site(name.substring(5), parameters[0]);
				s.setExpected(parameters[1]);
				s.setOrder(0);
				sites.push(s);
			}
		}
	}
	sites.sort(function(a, b) { return a.order - b.order; });
	return sites;
}

function clearSitesFromLocalStorage()
{
	for(name in localStorage)
	{
		if(name.substring(0,5) == "site:")
		{
			localStorage.removeItem(name);
		}
	}
}

function writeSiteToLocalStorage(s)
{
	localStorage['site:' + s.name] = [s.order, s.url, s.expected];
}
