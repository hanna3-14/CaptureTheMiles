import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './callback.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';

@NgModule({
	declarations: [CallbackComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: CallbackComponent,
			},
		]),
	],
})
export class CallbackModule {}
