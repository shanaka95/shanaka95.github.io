<!DOCTYPE HTML>
<html>
	<head>
		<title>Welcome to My website!</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />

 <style>
 #mypic img {
    transition: -webkit-transform 0.25s ease;
    transition: transform 0.25s ease;
}

#mypic img:active {
    -webkit-transform: scale(2);
    transform: scale(2);
}
#mypic .button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body>

		<!-- Header -->
			<div id="header">

				<div class="top">

					<!-- Logo -->
						<div id="logo">
							<span class="image avatar48"><img src="images/avatar.jpg" alt="" /></span>
							<h1 id="title">ShanakaAnuradha</h1>
							<p>Back-End Web Developer<br>Software Developer</p>
						</div>

					<!-- Nav -->
						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link" class="skel-layers-ignoreHref"><span class="icon fa-home">Intro</span></a></li>
								<li><a href="#portfolio" id="portfolio-link" class="skel-layers-ignoreHref"><span class="icon fa-th">Portfolio</span></a></li>
								<li><a href="#about" id="about-link" class="skel-layers-ignoreHref"><span class="icon fa-user">About Me</span></a></li>
								<li><a href="#contact" id="contact-link" class="skel-layers-ignoreHref"><span class="icon fa-envelope">Contact</span></a></li>
							</ul>
						</nav>

				</div>

				<div class="bottom">

					<!-- Social Icons -->
						<ul class="icons">
							<li><a href="http://twitter.com/shanaka1995" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="http://facebook.com/cruz404" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
							<li><a href="http://github.com/shanaka95" class="icon fa-github"><span class="label">Github</span></a></li>
							<li><a href="shanaka95@gmail.com" class="icon fa-envelope"><span class="label">Email</span></a></li>
						</ul>

				</div>

			</div>

		<!-- Main -->
			<div id="main">

				<!-- Intro -->
					<section id="top" class="one dark cover">
						<div class="container">

							<header>
								<h2 class="alt">Hi! I'm <strong>Shanaka Anuradha</strong>, <br />
								</h2>
								I love Python
								<br />I live with PHP<br>
                            But I don't forget SQL
                                <br>
                            </p>
								<br>
							</header>

							<footer>
								<a href="#portfolio" class="button scrolly">I'm in love with Developing!</a>
							</footer>

						</div>
					</section>

				<!-- Portfolio -->
					<section id="portfolio" class="two">
						<div class="container">

							<header>
								<h2>Portfolio</h2>
                            <h4>Its show time!</h4>
							</header>
						
							<p>Lets see some projects I have done!</p>
					<div id='me'>
							<div class="row" >
								<div class="4u 12u$(mobile)">
                                                                
									<article class="item">
										<a href="#portfolio" class="image fit" onclick="set_portfolio('finance');"><img src="images/projects/Untitled.png" alt="" /></a>
										<header>
											<h3>Fully Functional Software project for Finance Company.</h3>
										</header>
									</article>
                                
									<article class="item">
										<a href="#portfolio" class="image fit" onclick="set_portfolio('soft_sft');"><img src="images/projects/soft.jpg" alt="" /></a>
										<header>
											<h3>Software Project to Manage Students in a Tution Class</h3>
										</header>
									</article>
                                

								</div>
								<div class="4u 12u$(mobile)">
									<article class="item">
										<a href="#portfolio" class="image fit" onclick="set_portfolio('zchool');"><img src="images/projects/zchool.png" alt="" /></a>
										<header>
											<h3>Zchool.lk a Rising Educational Website in Sri Lanka!</h3>
										</header>
									</article>
									<article class="item">
										<a href="#portfolio" class="image fit" onclick="set_portfolio('sh')"><img src="images/projects/sh.png" alt="" /></a>
										<header>
											<h3>Sinhalahacker.blogspot.com is a Leading Technology blog in Sri Lanka!</h3>
										</header>
									</article>
								</div>
								<div class="4u$ 12u$(mobile)">
                                	<article class="item">
										<a href="#portfolio" class="image fit" onclick="set_portfolio('gw')"><img src="images/projects/gw1.png" alt="" /></a>
										<header>
											<h3>Genius Works! is a leading Technology and Education YouTube Channel in SriLanka</h3>
										</header>
									</article>
									<article class="item">
										<a href="#portfolio" class="image fit" onclick="set_portfolio('rg')"><img src="images/projects/rgrab.png" alt="" /></a>
										<header>
											<h3>Collect GCE A\L and O\L results of list of index numbers quickly!</h3>
										</header>
									</article>

								</div>
							</div>
				</div>
						</div>
					</section>

				<!-- About Me -->
					<section id="about" class="three">
						<div class="container">

							<header>
								<h2>About Me</h2>
							</header>

							<a href="#" class="image featured"><img src="images/projects/me.png" alt="" /></a>

							<p>It's a pleasure to see you here in my website! I'm Shanaka Anuradha Samarakoon ,first year undergraduate of University of Sri Jayewardenapura</p>
							<p>I'm inerested in Backend Web develoing,Software developing and also I like Pentesting Very much! Python is my favourite language and I'm using mod_pyhon and PHP for bakcend web developing.Also I'm using Qt designer for UI design and PyQt4 framework for software developing.Also I'm interested in Arduino programming and I have developed few automations such as RFID door lock system, Bluetooth controled robot car with a robot arm etc.I have worked for Fiverr and Also I have completed satisfied local projects.</p>
						</div>
					</section>

				<!-- Contact -->
					<section id="contact" class="four">
						<div class="container">

							<header>
								<h2>Contact</h2>
							</header>

							<p>Feel Free to contact me any time!</p>

							<form  >
								<div class="row" id='cont'>
									<div class="6u 12u$(mobile)"><input id='n1' type="text" name="name" placeholder="Name" /></div>
									<div class="6u$ 12u$(mobile)"><input id='e1' type="text" name="email" placeholder="Email" /></div>
									<div class="12u$">
										<textarea name="message" id='t1' placeholder="Message"></textarea>
									</div>
									<div class="12u$">
										<input type="button" value="Send Message" onclick="contact();" />
									</div>
                                <div id='cm'>
                                
                                </div>
								</div>
							</form>

						</div>
					</section>

			</div>

		<!-- Footer -->
			<div id="footer">

				<!-- Copyright -->
					<ul class="copyright">
						<li>&copy; Vitaz. All rights reserved.</li>
					</ul>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollzer.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>
			<script src="assets/js/my.js"></script>
<script>
function contact()
{
document.getElementById("cm").innerHTML = '<center><div class="loader"></div></center>';
var response = '';
$.ajax({ type: "GET",   
         url: "http://zchool.lk/me/contact.php?name="+document.getElementById("n1").value+'&email='+document.getElementById("e1").value+'&message='+document.getElementById("t1").value,   
         async: false,
         success : function(text)
         {
             response = text;
         }
});
document.getElementById("cm").innerHTML =response;
}
</script>
	</body>
</html>