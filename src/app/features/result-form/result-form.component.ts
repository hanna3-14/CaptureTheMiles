import { Component, Input } from '@angular/core';
import { Distance } from 'src/app/core/models/distance.model';
import { RaceEvent } from 'src/app/core/models/raceEvent.model';
import { Result } from 'src/app/core/models/result.model';
import { DistanceService } from 'src/app/core/services/distance.service';
import { EventService } from 'src/app/core/services/event.service';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
	selector: 'app-result-form',
	templateUrl: './result-form.component.html',
	// styleUrls: ['./result-form.component.css'],
})
export class ResultFormComponent {
	@Input()
	public distances: Distance[] = [];
	public result = new Result();
	private results: Result[] = [];
	public eventname: string = '';
	public events: RaceEvent[] = [];
	public distancename: string = '';

	constructor(
		public resultService: ResultService,
		public eventService: EventService,
		public distanceService: DistanceService,
	) {}

	ngOnInit(): void {
		this.eventService.getAll().subscribe((response) => {
			this.events = response;
		});
		this.distanceService.getAll().subscribe((response) => {
			this.distances = response;
		});
	}

	saveNewResult() {
		this.events.forEach((event) => {
			if (event.name === this.eventname) {
				this.result.eventId = event.id;
			}
		}, null);
		this.distances.forEach((distance) => {
			if (distance.name === this.distancename) {
				this.result.distanceId = distance.id;
			}
		}, null);
		this.resultService
			.addResult(this.result)
			.subscribe((result) => this.results.push(result));

		// reload the whole page to show the new result
		window.location.reload();
	}
}
