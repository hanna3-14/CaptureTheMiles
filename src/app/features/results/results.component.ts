import { Component, Input, OnInit } from '@angular/core';
import { Distance } from 'src/app/core/models/distance.model';
import { RaceEvent } from 'src/app/core/models/raceEvent.model';
import { Result } from 'src/app/core/models/result.model';
import { DistanceService } from 'src/app/core/services/distance.service';
import { EventService } from 'src/app/core/services/event.service';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
	public results: Result[] = [];
	public editMode: boolean[] = [];
	public distancename: string = '';
	public distances: Distance[] = [];
	public eventname: string = '';
	public events: RaceEvent[] = [];

	constructor(
		public resultService: ResultService,
		public eventService: EventService,
		public distanceService: DistanceService,
	) {}

	ngOnInit(): void {
		this.resultService.getAll().subscribe((response) => {
			this.results = response;
		});
		this.eventService.getAll().subscribe((response) => {
			this.events = response;
		});
		this.distanceService.getAll().subscribe((response) => {
			this.distances = response;
		});
	}

	editResult(result: Result) {
		this.editMode[result.resultId] = true;
	}

	saveResult(result: Result) {
		this.events.forEach((event) => {
			if (event.name === this.eventname) {
				result.eventId = event.id;
			}
		}, null);
		this.distances.forEach((distance) => {
			if (distance.name === this.distancename) {
				result.distanceId = distance.id;
			}
		}, null);
		this.resultService.updateResult(result);
		this.editMode[result.resultId] = false;
	}

	removeResult(id: number) {
		this.resultService.deleteResult(id);
		window.location.reload();
	}
}
