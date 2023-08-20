import { Component } from '@angular/core';
import { environment as env } from './../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	constructor() {
		console.log(env.production); // Logs false for development environment
	}

	title = 'CaptureTheMiles';
}
