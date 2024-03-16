import { Component, Input, OnInit } from '@angular/core';
import { Goal } from 'src/app/core/models/goal.model';
import { GoalService } from 'src/app/core/services/goal.service';

@Component({
	selector: 'app-goals',
	templateUrl: './goals.component.html',
})
export class GoalsComponent implements OnInit {
	public goals: Goal[] = [];
	public editMode: boolean[] = [];
	public distances = [
		'Marathon',
		'Half Marathon',
		'10K',
		'5K',
		'Badische Meile',
	];

	constructor(public goalService: GoalService) {}

	ngOnInit(): void {
		this.goalService.getAll().subscribe((response) => {
			this.goals = response;
		});
	}

	editGoal(goal: Goal) {
		this.editMode[goal.id] = true;
	}

	saveGoal(goal: Goal) {
		this.goalService.updateGoal(goal);
		this.editMode[goal.id] = false;
	}

	removeGoal(id: number) {
		this.goalService.deleteGoal(id)
		window.location.reload()
	}
}
