<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">



<link href="{{ asset('project/suzuki/css/main.css') }}" rel="stylesheet">
</head>
<body style='overflow-x:;'>

	<nav class="navbar navbar-expand-md navbar-white">
		<div class='container'>
			<a class="navbar-brand" href="#"><img src="{{ asset('project/suzuki/img/logo.jpg') }}" alt='logo'></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-inverse navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">HOMEPAGE <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item"> <a class="nav-link" href="#">ABOUT SUZUKI</a> </li>
					<li class="nav-item"> <a class="nav-link" href="#">CAREERS</a> </li>
					<li class="nav-item"> <a class="nav-link" href="#">NEWS & EVENTS</a> </li>
					<li class="nav-item"> <a class="nav-link" href="#">CUSTOMER CARE</a> </li>
				</ul>
				
				<ul class="navbar-nav ">
					<li class="nav-item"> <a class="nav-link" href="#" ><i class="fab fa-facebook-f "></i></a> </li>
					<li class="nav-item"> <a class="nav-link" href="#"><i class="fab fa-instagram "></i></a> </li>

				</ul>				
			</div>
		</div>
	</nav>
	
	
	
	
	<div class='container-fluid'>
	<div class='row' >
			<div class='col-sm-4 text-center p-2 bg-primary' data-target="#carouselExampleSlidesOnly" data-slide-to="0">
				<a id='' href='#' class='text-white'> <i class="fas fa-car"></i> AUTOMOBILE</a>
			</div>
			<div class='col-sm-4 text-center p-2 bg-danger' data-target="#carouselExampleSlidesOnly" data-slide-to="1">
				<a id='' href='#' class='text-white'> <i class="fas fa-motorcycle"></i> MOTORCYCLE</a>
			</div>
			<div class='col-sm-4 text-center p-2 bg-info' data-target="#carouselExampleSlidesOnly" data-slide-to="2">
				<a id='' href='#' class='text-white'> <i class="fas fa-ship"></i> MARINE</a>
			</div>

	</div>
	</div>
	

	<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img class="d-block w-100" src="{{ asset('project/suzuki/img/banner2.jpg') }}" alt="First slide">
			</div>
			<div class="carousel-item">
				<div class="card text-white">
					<img class="d-block w-100" src="{{ asset('project/suzuki/img/banner1.jpg') }}" alt="Second slide">
					<div class="card-img-overlay">
						<div class='thumbnail-banner1 img-thumbnail' data-target="#carouselExampleSlidesOnly" data-slide-to="0"></div>
						<div class='thumbnail-banner2 img-thumbnail' data-target="#carouselExampleSlidesOnly" data-slide-to="1"></div>
						<div class='thumbnail-banner3 img-thumbnail' data-target="#carouselExampleSlidesOnly" data-slide-to="2"></div>
					</div>
				</div>
			</div>
			<div class="carousel-item">
				<div class="card text-white">
					<img class="d-block w-100" src="{{ asset('project/suzuki/img/banner3.jpg') }}" alt="Second slide">
					<div class="card-img-overlay">
						<div class='thumbnail-banner1 img-thumbnail' data-target="#carouselExampleSlidesOnly" data-slide-to="0"></div>
						<div class='thumbnail-banner2 img-thumbnail' data-target="#carouselExampleSlidesOnly" data-slide-to="1"></div>
						<div class='thumbnail-banner3 img-thumbnail' data-target="#carouselExampleSlidesOnly" data-slide-to="2"></div>
					</div>
				</div>
			</div>
		</div>
		

		
		
	</div>
	
	
	
	<footer class=''>
		<div class='text-center align-middle p-1'>
			<p class='font-weight-bold' ><i class="far fa-copyright"></i> 2017 SUZUKI PHILIPPINES ALL RIGHT RESERVED.<a href='#' class='font-weight-light text-muted'> DISCLAIMER / CUSTOMER CARE</a></p>
		</div>
	</footer>




<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>
</html>