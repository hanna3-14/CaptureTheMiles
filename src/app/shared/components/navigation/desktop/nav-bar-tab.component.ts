import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-nav-bar-tab',
	templateUrl: './nav-bar-tab.component.html',
	styleUrls: ['./nav-bar-tab.component.css'],
})
export class NavBarTabComponent {
	@Input() path: string | undefined;
	@Input() label: string | undefined;
}
