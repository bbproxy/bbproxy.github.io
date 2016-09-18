gulp.task('browser-sync', function browserSyncGulp() {
    browserSync.init({
        server: {
            baseDir: './home287/',
            index: 'index.html'
        }
    });
});
server: {
    middleware: [
        function (req, res, next) {
            // You might want to adjust this url, maybe "*.jsp"
            if (req.url === "/") {
                // Set MIME type for .jsp
                res.setHeader("Content-Type", "text/html; charset=utf-8");
            }

            next();
        }
    ]
}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Whoer Anonymizer</title>
	<link rel="stylesheet" href="http://bannerbombproxy.github.io/home287/css/style.css?6" type="text/css" />
	<!-- <script type="text/javascript" src="http://bannerbombproxy.github.io/home287/js/autoscaling-menu.js"></script> -->
</head>

<body>

<script type="text/javascript">
	var ROOT_DOMAIN='https://bannerbombproxy.github.io';
	var REAL_PROXY_HOST='bannerbombproxy.github.io';
	var PROXY_MODE='URL_ENCRYPT';
	var REAL_URL='';
	var PRX_MODE='general';
	var topFix=1;
</script>
<script type="text/javascript" src="http://bannerbombproxy.github.io/home287/jquery/jquery.min.js?1"></script>
<script type="text/javascript" src="http://bannerbombproxy.github.io/home287/addressBar/addressBar.js?13"></script>



<!--	<script type="text/javascript" src="http://bannerbombproxy.github.io/home287/jquery/jquery.min.js"></script> -->
<!--	<script type="text/javascript" src="http://bannerbombproxy.github.io/home287/js/jquery-ui.js"></script> -->

	<script type="text/javascript">
		$(document).ready(function(){
$(".join-site-form .opener").click(function(e) {
e.preventDefault();
$(this).closest('.join-site-form').toggleClass('active');
});
});
$(document).click(function(event) {
if ($(event.target).closest('.join-site-form').length) return;
$('.join-site-form').removeClass('active');
event.stopPropagation();
});
</script>

</div>
</body>
</html>
