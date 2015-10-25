<!DOCTYPE html> 
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Full Screen Gif Slider</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

<style type="text/css">
html, body {
	margin: 0;
	padding: 0;
}
img {
	float: left;
}
#wrapper {
	overflow: hidden;
}
#images {
	display:none;
}
.key {
	margin: 6px 4px;
	border: solid 1px #AAA;
	padding: 20px;
	border-radius: 6px;
	width:60px;
	height:60px;
}
.key-group .key {
	display:inline-block;
}
.glyphicon-chevron-right {
	border: solid 2px #000;
}
.lead {
	margin-top:30px;
}
.btn-lg {
	margin: 20px 0 30px;
}
.modal-header {
	border-bottom: none;
}
.modal-content {
	background-color: rgba(255,255,255,.8);;
}
.mobile {
	display:none;
}
@media (max-width:500px){
	.desktop {
		display:none;
	}
	.mobile {
		display:block;
	}
}

</style>

</head>
<body>

<div id="wrapper">

	<div id="slider"></div>

</div>

<div id="images"></div>

<div class="modal fade" id="dirModal">
	<div class="modal-dialog">
		<div class="modal-content text-center">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">X</button>
			</div>
			<div class="modal-body desktop">
				<b class="key glyphicon glyphicon-chevron-up"></b>
				<div class="key-group"><b class="key glyphicon glyphicon-chevron-left"></b>
					<b class="key glyphicon glyphicon-chevron-right"></b>
				</div>
				<b class="key glyphicon glyphicon-chevron-down"></b>
				<div class="lead">
					<p>Use your keyboard's right arrow key to navigate<br>(or just click anywhere).</p>
					<p>You can also hit F11 to make it true full screen, but don't forget to hit it again to return to normal.</p>
				</div>
				<button class="btn btn-default btn-lg" data-dismiss="modal">OK Got it</button>
			</div>
			<div class="modal-body mobile">
				<div class="lead">Swipe to navigate.</div>
				<div class="lead">For a better viewing experience, rotate your mobile device to landscape mode.</div>
				<button class="btn btn-default btn-lg" data-dismiss="modal">OK Got it</button>
			</div>
		</div>
	</div>
</div>

<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script>
$(function() {
	$("#dirModal").modal();
});
</script>

<script src="full-screen-gif-slider.js"></script>

</body>
</html>