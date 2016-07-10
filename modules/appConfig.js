module.exports = {
	port: 3000,
	sessionsSecretToken: 'Something strange-happens-here_this_summer_sometimes!!!!!////===++-',
	strings: {
		user: {
			registration: {
				success: 'You have registered successfully',
				unknownError: 'There are some errors, You have not registered succesfully!',
			},
			update: {
				success: 'User has been updated!',
				failure: 'User has\'t been updated!'
			},
			login: {
				success: 'User was logged In!',
				failure: 'User wasn\'t logged In!'
			},
			notObtained1: 'User wesn\'t obtained!',
			notObtainedN: 'Users weren\'t obtained!',
			notRemoved: 'User hasn\'t been removed successfully',
			removed: 'User removed successfully',
			invalidEmail: 'Invalid Email',
			invalidFname: 'Invalid First Name',
			invalidLname: 'Invalid Last Name',
			invalidImage: 'Invalid Image',
			invalidPassword: 'Invalid Password',
			invalidConfirmPasswod: 'Invalid Confirm Password field'
		}
	}
};