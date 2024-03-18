import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { EventFormComponent } from '../event-form/event-form.component';
import { EventsComponent } from './events.component';

@NgModule({
	declarations: [EventsComponent, EventFormComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: EventsComponent,
			},
		]),
		FormsModule,
	],
})
export class EventsModule {}
