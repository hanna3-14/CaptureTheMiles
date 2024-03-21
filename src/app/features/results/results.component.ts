import { Component, Input, OnInit } from '@angular/core';
import { RaceEvent } from 'src/app/core/models/raceEvent.model';
import { Result } from 'src/app/core/models/result.model';
import { EventService } from 'src/app/core/services/event.service';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {
	public results: Result[] = [];
	public editMode: boolean[] = [];
	public distances = [
		'Marathon',
		'Half Marathon',
		'10K',
		'5K',
		'Badische Meile',
	];
	public events: RaceEvent[] = [];

	constructor(
		public resultService: ResultService,
		public eventService: EventService,
	) {}

	ngOnInit(): void {
		this.resultService.getAll().subscribe((response) => {
			this.results = response;
		});
		this.eventService.getAll().subscribe((response) => {
			this.events = response;
		});
	}

	editResult(result: Result) {
		this.editMode[result.resultId] = true;
	}

	saveResult(result: Result) {
		this.resultService.updateResult(result);
		this.editMode[result.resultId] = false;
	}

	removeResult(id: number) {
		this.resultService.deleteResult(id);
		window.location.reload();
	}
}
