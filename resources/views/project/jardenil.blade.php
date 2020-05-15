<!DOCTYPE html>
<html lang="en">
<head>
	<!-- Meta Files -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<title>Jardenil + Jardenil</title>

<link rel="icon" href="	{{asset('project/jj/img/logo.png')}}">

<!-- CSS -->

<!-- Bootstrap Core CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<!-- Custom Fonts -->
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
<!-- Plugin CSS -->


<!-- Custom CSS -->

<link href="{{ asset('project/jj/css/main.css') }}" rel="stylesheet">
<link href="{{ asset('project/jj/css/parallax.css') }}" rel="stylesheet">



</head>

<body id="page-top" >
	<!-- NAVIGATION -->
	<nav id='MainNav' class="navbar navbar-light nav-down">
	<div class='container-fluid'>
		<a class="navbar-brand" href="index.php"><img src="{{asset('project/jj/img/logo.png')}}" height='40'></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">MENU
			<i class="navbar-toggler-icon"></i>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a class="nav-link" href="index.php">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="">Initiatives</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="projects.php">Projects</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="">Partners</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="">Clients</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="">Contact</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

	<!-- BANNER-->
	<div id='asd'>
	<section class="parallax-container">
		<video loop muted autoplay>
			<source src="{{ asset('project/jj/video/parallax.mp4') }}" type="video/mp4">	
		</video>
		<div class="header-content">
			<div class='w-100 h-100 text-center text-white'>
			<h1 class='display-1' style='margin-top:20%;'>JARDENIL + JARDENIL</h1>
			<p class='lead'>Suspendisse sed urna ipsum. </p>
			</div>
		</div>
	</section>	
</div>

	
	
	<section>
		<div class='container-fluid'>
			<div class='row'>
			
				<div class='col-md-1'></div>
				<div class='col-md-4 hover-fade'>
					<div class='srLeft'>
					<a href='project1.php'><img class="img-fluid " src="{{ asset('project/jj/img/build/3.jpg') }}" alt="Card image" width='100%'></a>	
					<h4 class='mt-4'>Phasellus auctor eros ultricies vulputate pretium. Pellentesque eu malesuada leo.</h4>
					</div>
				</div>
				
				<div class='col-md-1'></div>
				<div class='col-md-5'>
					<h1 class='srBottom' style='margin-bottom:30%;'>Aenean id metus sem. Vivamus porttitor pharetra volutpat. Praesent libero neque, venenatis a tincidunt at, imperdiet nec lectus. Nunc dignissim velit nulla, nec cursus risus pretium vitae. Mauris vestibulum tincidunt finibus.</h1>
					<div class='srBottom hover-fade'>
						<a href='#'><img class="img-fluid my-4" src="{{ asset('project/jj/img/build/2.jpg') }}" alt="Card image" ></a>	
						<h4>Ut pharetra nisl sed nibh hendrerit lacinia. Vestibulum tempus aliquet condimentum.</h4>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	
	<section>
		<div class='container-fluid'>
			<div class='row srLeft '>
				<a href='project1.php' class='hover-fade'><img class="w-100" src="{{ asset('project/jj/img/build/1.png') }}" alt="Card image"></a>
			</div>
			<div class='row'>	
				<div class='col-md-1'></div>
				<div class='srLeft'>
					
					<h4 class='col-md-11 mt-4'>Nam facilisis tellus quis viverra commodo. Pellentesque vitae mollis risus.</h4>
				</div>
			</div>
		</div>
	</section>
	

	<section>
		<div class='container-fluid'>
			<div class='row'>
				<div class='col-md-1'></div>
				<div class='col-md-5'>
					<div class='srBottom'>
						<a href='project1.php'>
							<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img class="d-block w-100" src="{{asset('project/jj/img/projects/2.jpg')}}" alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="{{asset('project/jj/img/projects/2.jpg')}}" alt="Second slide">
									</div>
								</div>
							</div>
						</a>
						<h4 class='mt-4'>Fusce faucibus cursus eros vitae elementum.</h4>
						
					</div>
				</div>
				<div class='col-md-1'></div>
				
				<div class='col-md-4'>
					<div class='srBottom' style='margin-top:30%;'>
						<a href='#'><img class="img-fluid" src="{{asset('project/jj/img/projects/1.jpg')}}" alt="Second slide"></a>
						<h4 class='mt-4'>Morbi ac magna sit amet magna mollis pharetra.</h4>
					
					</div>
				</div>
			</div>
		</div>
	</section>	



	<!-- SCRIPTS -->

	<footer class="bg-secondary">
	<div class='container-fluid '>
		<div class='p-5'>
			<p>© <?=date('Y')?> ARCH INC.</p>
			<ul class='list-inline'>
				<li class="list-inline-item"><a href='www.facebook.com/' class='text-primary'><i class='fa fa-facebook  rounded p-2 bg-light text-dark'></i></a></li>
				<li class="list-inline-item"><a href='www.twitter.com/' class='text-primary'><i class='fa fa-twitter  rounded p-2 bg-light text-dark'></i></a></li>
				<li class="list-inline-item"><a href='www.instagram.com/' class='text-primary'><i class='fa fa-instagram rounded p-2 bg-light text-dark'> </i></a></li>
				<li class="list-inline-item"><a href='www.instagram.com/' class='text-primary'><i class='fa fa-flickr rounded p-2 bg-light text-dark'> </i></a></li>
				<li class="list-inline-item"><a href='www.instagram.com/' class='text-primary'><i class='fa fa-google-plus-circle rounded p-2 bg-light text-dark'> </i></a></li>
				<li class="list-inline-item"><a href='www.instagram.com/' class='text-primary'><i class='fa fa-linkedin-square rounded p-2 bg-light text-dark'> </i></a></li>
				<li class="list-inline-item"><a href='www.instagram.com/' class='text-primary'><i class='fa fa-youtube-play rounded p-2 bg-light text-dark'> </i></a></li>
			</ul>
		</div>
	</div>
</footer>


	

	<!-- SCRIPTS -->


<!-- jQuery -->
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>


<!-- Bootstrap Core JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


<!-- Plugins JavaScript -->




<!-- Theme JavaScript -->
<script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script> 
<script src="{{ asset('project/jj/js/jquery.nicescroll.min.js')}}"></script>
<script src="{{ asset('project/jj/js/jquery.easing.min.js')}}"></script>





<!--Custom Scripts -->
<script src="{{ asset('project/jj/js/custom-scripts.js')}}"></script>

</body>
</html>
