import { Component, Input } from '@angular/core';
import { Distance } from 'src/app/core/models/distance.model';
import { DistanceService } from 'src/app/core/services/distance.service';

@Component({
	selector: 'app-distance-form',
	templateUrl: './distance-form.component.html',
})
export class DistanceFormComponent {
	@Input()
	public distance = new Distance();
	public distances: Distance[] = [];

	constructor(public distanceService: DistanceService) {}

	saveNewDistance() {
		this.distanceService
			.addDistance(this.distance)
			.subscribe((distance) => this.distances.push(distance));

		// reload the whole page to show the new distance
		window.location.reload();
	}
}
