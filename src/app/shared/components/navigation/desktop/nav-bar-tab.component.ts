import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-nav-bar-tab',
	templateUrl: './nav-bar-tab.component.html',
})
export class NavBarTabComponent {
	@Input() path: string | undefined;
	@Input() label: string | undefined;
}
