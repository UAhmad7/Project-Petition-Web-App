package epetitions

class User {

	String email;
	String firstName;
	String lastName;
	String password;
	Date joined;
	Boolean activated;  

	static constraints = {

		email email: true, blank: false
		firstName blank: false
		lastName blank: false
		password blank: false

	}

	static mapping = {

		table "User"
			email column: "Email"
			firstName column: "FirstName"
			lastName column: "LastName"
			password column: "Password"
			joined column: "Joined"
			activated column: "Activated"
	}
}
