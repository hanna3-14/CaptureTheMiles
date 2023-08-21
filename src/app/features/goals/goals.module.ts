import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { SharedModule } from 'src/app/shared';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [GoalsComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: GoalsComponent,
			},
		]),
	],
})
export class GoalsModule {}
