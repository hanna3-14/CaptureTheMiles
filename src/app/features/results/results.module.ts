import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { ResultFormComponent } from '../result-form/result-form.component';
import { FormsModule } from '@angular/forms';
import { DistanceFormComponent } from '../distance-form/distance-form.component';

@NgModule({
	declarations: [ResultsComponent, ResultFormComponent, DistanceFormComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: ResultsComponent,
			},
		]),
		FormsModule,
	],
})
export class ResultsModule {}
