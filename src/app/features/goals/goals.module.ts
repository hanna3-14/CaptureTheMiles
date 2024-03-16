import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { SharedModule } from 'src/app/shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GoalFormComponent } from '../goal-form/goal-form.component';

@NgModule({
	declarations: [GoalsComponent, GoalFormComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: GoalsComponent,
			},
		]),
		FormsModule,
	],
})
export class GoalsModule {}
