import React from 'react';

export default class CreateUser extends React.Component {
	postUser() {
		const form = new FormData(document.getElementById('form-create-user'));
		fetch("/user", {
		  method: "POST",
		  body: form
		});
	}

	render() {
		return (
			<div className="component-create-user">
				<h1>Create User</h1>
				<form id="form-create-user" onSubmit={ this.postUser }>
					<div className="form-field">
						<label htmlFor="username">Username</label>
						<input type="text" name="username" id="username" />
					</div>
					<div className="form-field">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div className="form-field">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<div className="form-field">
						<label htmlFor="passwordConfirmation">Password Confirmation</label>
						<input type="password" name="passwordConfirmation" id="passwordConfirmation" />
					</div>
					<button>Create User</button>
				</form>
			</div>
		);
	}
}