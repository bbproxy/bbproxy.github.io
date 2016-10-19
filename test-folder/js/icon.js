function generateIcon(sites)
{
	var colors = ["grey", "red", "yellow", "green"];
	
	var canvas = document.getElementById("icon");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, 19, 19);
	var numWedges = sites.length;
	var angleIncrement = Math.PI * 2 / numWedges;
	for(i=0;i<numWedges;i++)
	{
		ctx.fillStyle = colors[sites[i].status];
		ctx.beginPath();
		ctx.arc(9.5, 9.5, 9.5, angleIncrement * i, angleIncrement * (i + 1), false);
		ctx.lineTo(9.5, 9.5);
		ctx.closePath();
		ctx.fill();
	}
	if(numWedges > 1)
	{
		ctx.strokeStyle = "white";
		ctx.beginPath();
		for(i=0;i<numWedges;i++)
		{
			ctx.moveTo(9.5, 9.5);
			ctx.lineTo(9.5 + 9.5 * Math.cos(angleIncrement * i), 9.5 + 9.5 * Math.sin(angleIncrement * i));
			ctx.stroke();
		}
	}
	
	var radgrad = ctx.createRadialGradient(6,5,3,9.5,9.5,9.5);
	radgrad.addColorStop(0, 'rgba(255, 255, 255, .5)');
	radgrad.addColorStop(1, 'rgba(0,0,0,.3)');
	ctx.fillStyle = radgrad;
	ctx.beginPath();
	ctx.arc(9.5, 9.5, 9.5, 0, 2 * Math.PI, true);
	ctx.closePath();
	ctx.fill();
	
	return ctx.getImageData(0, 0, 19, 19);
}

function updateIcon()
{
	var iconData = generateIcon(sites);
	chrome.browserAction.setIcon({imageData: iconData});
}