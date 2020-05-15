<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

<title>TimVma</title>
<meta charset="utf-8">
<meta name="description" content="TimVma">
<meta name="keywords" content="TimVma">
<meta name="author" content="TimVma">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<link rel="icon" type="image/png" href="{{asset('images/bg1.jpg')}}">



<link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>

<body>
		<div id='preloader'><div><h5>Loading</h5><p>.&nbsp;.&nbsp;.</p></div></div>	


	<nav id="mySidenav" class="sidenav " role="navigation">
		<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
		<a href="about" onclick="closeNav()">About</a>
		<a href="projects" onclick="closeNav()">Projects</a>
		<a href="skills" onclick="closeNav()">Skills</a>
		<a href="contact" onclick="closeNav()">Contact</a>
	</nav>
				
	
<div class='wrapper'>
	<nav id='navbar' class='main-nav'>
		<i  onclick="openNav()" class="material-icons">menu</i>
	</nav>





</div>







<script src='{{asset('js/app.js')}}'></script>

</body>
</html>
