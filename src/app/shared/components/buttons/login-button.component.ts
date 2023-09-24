import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-login-button',
	templateUrl: './login-button.component.html',
})
export class LoginButtonComponent {
	constructor(private auth: AuthService) {}

	handleLogin(): void {
		this.auth.loginWithRedirect({
			appState: {
				target: '/results',
			},
			authorizationParams: {
				prompt: 'login',
			},
		});
	}
}
