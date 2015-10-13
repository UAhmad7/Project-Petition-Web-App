var NavigationBar = React.createClass({

	render: function() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<div className="navbar-brand">
							Project Petition
						</div>
					</div>
					<div className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li>
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="wordcloud.html">Word Cloud</a>
							</li>
							<li>
								<a href="responses.html">Responses</a>
							</li>
							<li>
								<a href="about.html">About</a>
							</li>
						</ul>

						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="login.html">Login</a>
							</li>
							<li>
								<a href="signup.html">Signup</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}

});

var navBar = ReactDOM.render(<NavigationBar />, document.getElementById('nav_bar'));