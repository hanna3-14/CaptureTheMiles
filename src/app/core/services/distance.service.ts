import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Distance } from '../models/distance.model';

@Injectable({
	providedIn: 'root',
})
export class DistanceService {
	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<Distance[]> {
		return this.httpClient.get<Distance[]>(
			`${env.api.serverUrl}/api/data/distances`,
		);
	}

	addDistance(distance: Distance): Observable<Distance> {
		console.log(distance);
		return this.httpClient.post<Distance>(
			`${env.api.serverUrl}/api/data/distances`,
			distance,
		);
	}

	updateDistance(distance: Distance) {
		this.httpClient
			.patch<number>(
				`${env.api.serverUrl}/api/data/distance/${distance.id}`,
				distance,
			)
			.subscribe();
	}

	deleteDistance(id: number) {
		this.httpClient
			.delete(`${env.api.serverUrl}/api/data/distance/${id}`)
			.subscribe();
	}
}
