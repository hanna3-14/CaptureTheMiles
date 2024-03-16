import { Component, Input, OnInit } from '@angular/core';
import { Goal } from 'src/app/core/models/goal.model';
import { GoalService } from 'src/app/core/services/goal.service';

@Component({
	selector: 'app-goals',
	templateUrl: './goals.component.html',
})
export class GoalsComponent implements OnInit {
	@Input()
	public goals: Goal[] = [];

	constructor(public goalService: GoalService) {}

	ngOnInit(): void {
		this.goalService.getAll().subscribe((response) => {
			this.goals = response;
		});
	}

	removeGoal(id: number) {
		this.goalService.deleteGoal(id)
		window.location.reload()
	}
}
