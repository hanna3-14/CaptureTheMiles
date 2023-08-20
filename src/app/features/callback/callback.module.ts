import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './callback.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [CallbackComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: CallbackComponent,
			},
		]),
	],
})
export class CallbackModule {}
