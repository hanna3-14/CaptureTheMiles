import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RaceEvent } from '../models/raceEvent.model';

@Injectable({
	providedIn: 'root',
})
export class EventService {
	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<RaceEvent[]> {
		return this.httpClient.get<RaceEvent[]>(
			`${env.api.serverUrl}/api/data/events`,
		);
	}

	addEvent(event: RaceEvent): Observable<RaceEvent> {
		return this.httpClient.post<RaceEvent>(
			`${env.api.serverUrl}/api/data/events`,
			event,
		);
	}

	updateEvent(event: RaceEvent) {
		this.httpClient
			.patch<number>(`${env.api.serverUrl}/api/data/event/${event.id}`, event)
			.subscribe();
	}

	deleteEvent(id: number) {
		this.httpClient
			.delete(`${env.api.serverUrl}/api/data/event/${id}`)
			.subscribe();
	}
}
