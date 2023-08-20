import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../models/result.model';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ResultService {
	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<Result[]> {
		return this.httpClient.get<Result[]>(
			`${env.api.serverUrl}/api/data/results`,
		);
	}
}
