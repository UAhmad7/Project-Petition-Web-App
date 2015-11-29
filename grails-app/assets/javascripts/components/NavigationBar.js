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
								<a href="index">Home</a>
							</li>
							<li>
								<a href="wordcloud">Word Cloud</a>
							</li>
							<li>
								<a href="responses">Responses</a>
							</li>
							<li>
								<a href="about">About</a>
							</li>
						</ul>

						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="login">Login</a>
							</li>
							<li>
								<a href="signup">Signup</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}

});

var navBar = ReactDOM.render(<NavigationBar />, document.getElementById('nav_bar'));