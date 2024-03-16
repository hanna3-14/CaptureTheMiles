import { Component } from '@angular/core';
import { Result } from 'src/app/core/models/result.model';
import { ResultService } from 'src/app/core/services/result.service';

@Component({
	selector: 'app-result-form',
	templateUrl: './result-form.component.html',
})
export class ResultFormComponent {

	distances = ["Marathon", "Half Marathon", "10K", "5K", "Badische Meile"]

	result = new Result
	results: Result[] = [];

	constructor(public resultService: ResultService) {}

	saveNewResult(){
		this.resultService
			.addResult(this.result)
			.subscribe(result => this.results.push(result))

		// reload the whole page to show the new result
		window.location.reload()
	}

}
