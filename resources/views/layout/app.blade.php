<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

<title>TimVma</title>
<meta charset="utf-8">

<meta name="description" content="Tim Vma Portfolio Test">
<meta name="keywords" content="timvma, Tim, profile">
<meta name="author" content="Tim Ambi">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<meta name="theme-color" content="#000000">

<link rel="icon" type="image/png" href="{{asset('images/bg2.png')}}">

<link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>

<body  id='bodyScroll' >
	<?php // <div id='preloader'><div><h5>Loading</h5><p>.&nbsp;.&nbsp;.</p></div></div>?>	
	
<!------------------------ NAV ---->	
@yield('content', View::make('../parts/nav'))
	
<div class='wrapper' id='bodyWrap'>
<!------------------------ NAV ---->


<nav class='nav-menu' id='nav-move'>
	<i id='nav-menu' onclick="nav()"></i>
</nav>

<!------------------------ HERO ---->	
@yield('content', View::make('../parts/hero'))
<!------------------------ INTRO ---->	
@yield('content', View::make('../parts/intro'))
<!------------------------ ABOUT ---->	
@yield('content', View::make('../parts/about'))
<!------------------------ PROJECT ---->	
@yield('content', View::make('../parts/project'))
<!------------------------ SKILLS ---->	
@yield('content', View::make('../parts/skills'))
<!------------------------ FOOTER ---->	
@yield('content', View::make('../parts/footer'))

</div>






<!------------------------ MODAL ---->	
@yield('content', View::make('../parts/modal'))


<script src="{{asset('js/app.js')}}"></script>

</body>
</html>
