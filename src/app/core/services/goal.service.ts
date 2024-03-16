import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Goal } from '../models/goal.model';

@Injectable({
	providedIn: 'root',
})
export class GoalService {
	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<Goal[]> {
		return this.httpClient.get<Goal[]>(`${env.api.serverUrl}/api/data/goals`);
	}

	addGoal(goal: Goal): Observable<Goal> {
		return this.httpClient.post<Goal>(
			`${env.api.serverUrl}/api/data/goals`, goal
		);
	}
}
