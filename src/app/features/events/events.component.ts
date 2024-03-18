import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { RaceEvent } from 'src/app/core/models/raceEvent.model';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
	public events: RaceEvent[] = [];
	public editMode: boolean[] = [];

	constructor(public eventService: EventService) {}

	ngOnInit(): void {
		this.eventService.getAll().subscribe((response) => {
			this.events = response;
		});
	}

	editEvent(event: RaceEvent) {
		this.editMode[event.id] = true;
	}

	saveEvent(event: RaceEvent) {
		this.eventService.updateEvent(event);
		this.editMode[event.id] = false;
	}

	removeEvent(id: number) {
		this.eventService.deleteEvent(id);
		window.location.reload();
	}
}
