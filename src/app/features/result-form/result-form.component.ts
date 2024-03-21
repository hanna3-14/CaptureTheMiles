import { Component, Input } from '@angular/core';
import { RaceEvent } from 'src/app/core/models/raceEvent.model';
import { Result } from 'src/app/core/models/result.model';
import { EventService } from 'src/app/core/services/event.service';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
	selector: 'app-result-form',
	templateUrl: './result-form.component.html',
})
export class ResultFormComponent {
	@Input()
	public distances: String[] = [];
	public result = new Result();
	private results: Result[] = [];
	public eventname: string = '';
	public events: RaceEvent[] = [];

	constructor(
		public resultService: ResultService,
		public eventService: EventService,
	) {}

	ngOnInit(): void {
		this.eventService.getAll().subscribe((response) => {
			this.events = response;
		});
	}

	saveNewResult() {
		this.events.forEach((event) => {
			if (event.name === this.eventname) {
				this.result.eventId = event.id;
			}
		}, null);
		this.resultService
			.addResult(this.result)
			.subscribe((result) => this.results.push(result));

		// reload the whole page to show the new result
		window.location.reload();
	}
}
