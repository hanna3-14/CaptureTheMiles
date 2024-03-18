import { Component, Input } from '@angular/core';
import { RaceEvent } from 'src/app/core/models/raceEvent.model';
import { EventService } from 'src/app/core/services/event.service';

@Component({
	selector: 'app-event-form',
	templateUrl: './event-form.component.html',
})
export class EventFormComponent {
	@Input()
	public event = new RaceEvent();
	private events: RaceEvent[] = [];

	constructor(public eventService: EventService) {}

	saveNewEvent() {
		this.eventService
			.addEvent(this.event)
			.subscribe((event) => this.events.push(event));

		// reload the whole page to show the new event
		window.location.reload();
	}
}
