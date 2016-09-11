function runChecks(justOnce)
{
	if(justOnce == undefined) justOnce = false;
	
	$.ajax({
		url: "http://www.google.com",
		success: function()
		{
			for(i in sites)
			{
				sites[i].updateStatus();
			}
		},
		error: function()
		{
			for(i in sites)
			{
				sites[i].setStatus(0);
			}
			updateIcon();
		}
	});
	
	if(!justOnce)
		setTimeout(runChecks, 60000 * minutesBetweenChecks);
}