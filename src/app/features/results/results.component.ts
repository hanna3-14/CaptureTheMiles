import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/core/models/result.model';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit {
	@Input()
	public results: Result[] = [];

	constructor(public resultService: ResultService) {}

	ngOnInit(): void {
		this.resultService.getAll().subscribe((response) => {
			this.results = response;
		});
	}
}
