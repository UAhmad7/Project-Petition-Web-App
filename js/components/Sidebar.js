var Sidebar = React.createClass({

	render: function() {
		return (
			<div className="ui vertical inverted sticky menu fixed top nav-sidebar">
				<a className="item" href="index.html">
					<i className="home icon"></i>
					Home
				</a>
				<a className="item" href="activity.html">
					<i className="file text icon"></i>
					Petitioning Activity
				</a>
				<a className="hidden item" href="graphs.html">
					<i className="pie graph icon"></i>
					Data Graphs
				</a>
				<a className="item" href="members.html">
					<i className="users icon"></i>
					Members
				</a>
				<a className="item" href="about.html">
					<i className="info circle icon"></i>
					About
				</a>
			</div>
		);
	}

});

var navigationSidebar = React.render(<Sidebar />, document.getElementById('navigation-menu'));