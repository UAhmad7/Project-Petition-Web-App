<html>
<head>
	<title>Sign Up</title>
</head>
<body>

	<div id="nav_bar"></div>

	<div class="jumbotron">
		<div class="container">

			<div class="row">
				<div class="col-xs-8 login-paragraph">
					<div class="container header-container">
						<h2>Create a New Account</h2>
						<h4>
							Why should I sign up?
						</h4>
						<div>
							[Reason]<br>
							[Reason]
						</div>
					</div>
				</div>
				<div class="col-xs-4">
					<form class="signup-form clearfix">
						
						<h2>Sign up</h2>
						
						<label for="fname_input" class="sr-only">First name</label>
						<input type="text" id="fname_input" class="form-control" placeholder="First name" required>

						<label for="lname_input" class="sr-only">Last name</label>
						<input type="text" id="lname_input" class="form-control" placeholder="Last name" required>
						
						<label for="email_input" class="sr-only">Email address</label>
						<input type="email" id="email_input" class="form-control" placeholder="Your email address" required>

						<label for="password_input" class="sr-only">Password</label>
						<input type="password" id="password_input" class="form-control" placeholder="New password" required>

						<button class="btn btn-success pull-right" type="submit">Sign up</button>
					</form>

				</div>
			</div>

		</div>
	</div>

	<script type="text/babel" src="/assets/components/NavigationBar.js"></script>

	<script type="text/javascript" src="/assets/angular.min.js"></script>
	<script type="text/javascript" src="/assets/jquery.min.js"></script>
	<script type="text/javascript" src="/assets/bootstrap.min.js"></script>

</body>
</html>