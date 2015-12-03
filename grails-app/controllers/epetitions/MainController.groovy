package epetitions

class MainController
{

	def index() {
		render (view: 'index.gsp')
	}

	def login() {
		render (view: 'login.gsp')
	}

	def signup() {
		render (view: 'signup.gsp')
	}

	def about() {
		render (view: 'about.gsp')
	}
}
