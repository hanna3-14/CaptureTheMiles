import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';

@NgModule({
	declarations: [ResultsComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: ResultsComponent,
			},
		]),
	],
})
export class ResultsModule {}
