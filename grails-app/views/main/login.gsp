<html>
<head>
	<title>Login</title>
</head>
<body>

	<div id="nav_bar"></div>

	<div class="jumbotron">
		<div class="container">

			<div class="row">
				<div class="col-xs-8 login-paragraph">
					<div class="container header-container">
						<h2>Login to Project Petition</h2>
						<h4>
							Get updates for new petitions that may interest you
						</h4>
						<h4>Test change</h4>
					</div>
					<div class="container header-container">
						<div class="new-account-message">Sign up if you don't already have an account...</div>
						<a href="signup.html" class="btn btn-primary" type="submit">Create a new account</a>
					</div>
				</div>
				<div class="col-xs-4">
					<form class="login-form clearfix">
						
						<h2>Sign in</h2>
						
						<label for="email_input" class="sr-only">Email address</label>
						<input type="email" id="email_input" class="form-control" placeholder="Email address" required autofocus>
						
						<label for="password_input" class="sr-only">Password</label>
						<input type="password" id="password_input" class="form-control" placeholder="Password" required>

						<div class="checkbox">
							<label>
								<input type="checkbox"> Remember me
							</label>
						</div>
						<button class="btn btn-success pull-right" type="submit">Sign in</button>
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