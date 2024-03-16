import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/core/models/result.model';
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

	constructor(public resultService: ResultService) {}

	ngOnInit(): void {
		this.resultService.getAll().subscribe((response) => {
			this.results = response;
		});
	}

	editResult(result: Result) {
		this.editMode[result.id] = true;
	}

	saveResult(result: Result) {
		this.resultService.updateResult(result);
		this.editMode[result.id] = false;
	}

	removeResult(id: number) {
		this.resultService.deleteResult(id);
		window.location.reload();
	}
}
