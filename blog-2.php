<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Revolver Yoga" />
	<meta name="keywords" content="revovler yoga studio walla massage reiki yogi business downtown washington"/>
	<meta name="description" content="Revolver Yoga Studio is a yoga studio located in historic downtown Walla Walla, WA. We look forward to having you in class!"/>
	<meta property="og:title" content="Revolver Yoga Studio" />
	<meta property="og:url" content="http://www.revolveryoga.com/" />
	<meta property="og:image" content="img/outside.jpg"/>
	<meta property="og:site_name" content="Revolver Yoga Studio"/>
	<meta property="og:type"   content="website" />  

	<link href='img/icon.ico' rel='shortcut icon' type='image/ico'>

	<title>Revolver Yoga</title>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

	<script src="//use.typekit.net/ozy1plt.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>

	<link rel="stylesheet" href="css/reset.css">

	<link rel="stylesheet" href="css/style.css">



</head>
<body>

	<div class="container">
  <span class="dark-filter"></span>
		<div class="row">
			<nav class="col">

				<a href="index.html" class="homeLink">
					<div>
						<img src="img/navLogo.png" class="navLogo" alt="Revolver Yoga Logo">
						<h1>Revolver Yoga Studio</h1>
					</div>
				</a>
				<span class="menu-btn"></span>
					<ul>
						<li><a href="about.html">About</a></li>
						<li><a href="instructors.html">Instructors</a></li>
						<li><a href="classes.html">Classes</a></li>
<li><a href="schedule.html">Schedule</a></li>
<li><a href="tuition.html">Tuition</a></li>
						<li><a href="new-students.html">New Students</a></li>
						<li><a href="massage-and-reiki.html">Massage &amp; Reiki</a></li>
						<li><a href="giving.html">Giving</a></li>
						<li><a href="blog.php" class="active-nav-link">Blog</a></li>
						<li><a href="teacher-training.html">Teacher Training</a></li>
						<li><a href="contact.html">Contact</a></li>
						</ul>
							<a class="std-btn margin-top-10 signUp" href="sign-up.html">Sign Up</a>
<a class="margin-top-10 social-icon" href="https://www.facebook.com/RevolverYoga"><img src="img/fb.png"></a>

						</nav>

						<div class="col content-stage">
								<section class="text-container classes-section">
									<figure class="blog-header heading-img">
										<h1 class="page-title">Blog</h1>
									</figure>
									       <?php

$xml = simplexml_load_file('http://revolveryoga.tumblr.com/api/read?type=post&start=0&num=8');
$posts = $xml->xpath("/tumblr/posts/post[@type='regular']");

foreach($posts as $post) {?>
<?echo '<article class="blog-roll">';?>
<?echo '<h1 class="post-title">'.$post->{'regular-title'}.'</h1>';?>
<?echo '<h2 class="date">'.date("F jS, Y",strtotime($post['date'])).'</h2>';?>
<?echo $post->{'regular-body'};?>
<?echo '</article>';?>

<?}?>

								</section> <!-- end of text container -->

						</div> <!-- end of content stage -->

					</div> <!-- end of row -->
				</div> <!-- end of container -->






				<script src="js/min/wuj-min.js"></script>
			</body>
			</html>