import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { ResultFormComponent } from '../result-form/result-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ResultsComponent, ResultFormComponent],
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
