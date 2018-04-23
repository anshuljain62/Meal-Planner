<?php
session_start();
include_once 'dbconnect.php';
?>
    <!DOCTYPE html>
    <html ng-app="myApp">

    <head>

        <title>Eat How Much</title>
        <link rel="icon" href="icon.ico" />
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js"></script>
        <script src="app.js"></script>
        <script src="healthdetailformCtrl.js"></script>
        <script src="reminder/js/index.js"></script>
        <script src="routing.js"></script>
        <script src="mealplanner/script.js"></script>
        <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/jquery-2.1.0.min.js'></script>
        <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/responsive.js'></script>
        <script src="blog/js/blog.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src='http://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js'></script>
        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCTPEEhUdoWWHHfnY_O16e-coun-rbDYDA&libraries=places'></script>
        <script src="google/js/index.js"></script>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="google/css/style.css">
        <link href="http://fonts.googleapis.com/css?family=Cookie|Open+Sans:400,700" rel="stylesheet" />
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="bgvideo/css/style.css">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="main.css">
        <meta charset="UTF-8">
        <script type="text/javascript">
            $(window).load(function() {
                $(".loader").fadeOut("slow");
            })
        </script>

    </head>

    <body>

        <div class="loader"></div>


        <header>

            <div class="navbar navbar-default navbar-static-top">
                <div class="navbar-header">
                    <a href="main.php"> <img class="logo_class" src="images/logo.jpg" alt="logo" />
                        <a href="main.php" class="navbar-brand" style="color: fuchsia"><i class="ion-ios7-pulse-strong"></i> &nbsp; &nbsp;Eat How Much &nbsp; </a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a ui-sref="home">Home</a></li>
                    <li><a ui-sref="hiw">About Us</a></li>
                    <li><a ui-sref="physicalprofile">Physical Profile</a></li>
                    <li><a ui-sref="mealplanner">Meal Planner</a></li>
                    <li><a ui-sref="reminder">Reminder</a></li>
                    <li><a ui-sref="blog">Discussion Portal</a></li>
                </ul>
              <div class="collapse navbar-collapse" id="navbar1">
			<ul class="nav navbar-nav navbar-right">
				<?php if (isset($_SESSION['user_username'])) { ?>
				<li><p class="navbar-text">Signed in as <?php echo $_SESSION['user_username']; ?></p></li>
				<li><a href="logout.php">Log Out</a></li>
				<?php } else { ?>
				 <li><a href="register.php"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                 <li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
				<?php } ?>
			</ul>
		</div>
            </div>
        </header>
        <script>
        </script>
        <div class="container">
            <div ui-view>
            </div>
        </div>
    </body>

    </html>