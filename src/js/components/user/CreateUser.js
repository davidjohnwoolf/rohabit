import React from 'react';

export default class CreateUser extends React.Component {
	postUser(e) {
		e.preventDefault();

		const formBody = new FormData(document.querySelector('.form-create-user'));

		fetch("/user", {
		  method: "POST",
		  body: formBody
		});
	}

	render() {
		return (
			<section className="component-create-user">
				<h1>Create Account</h1>
				<form className="form-create-user form">
					<div className="form-field required">
						<input type="text" name="username" id="username" placeholder="username *" />
					</div>
					<div className="form-field">
						<input type="email" name="email" id="email" placeholder="email" />
					</div>
					<div className="form-field required">
						<input type="password" name="password" id="password" placeholder="password *" />
					</div>
					<div className="form-field required">
						<input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="password confirmation *" />
					</div>
					<button className="form-submit" onSubmit={ this.postUser }>Create Account</button>
				</form>
			</section>
		);
	}
}