import { Component, Input } from '@angular/core';
import { Goal } from 'src/app/core/models/goal.model';
import { GoalService } from 'src/app/core/services/goal.service';

@Component({
	selector: 'app-goal-form',
	templateUrl: './goal-form.component.html',
	styleUrls: ['./goal-form.component.css'],
})
export class GoalFormComponent {
	@Input()
	distances: String[] = [];

	goal = new Goal();
	goals: Goal[] = [];

	constructor(public goalService: GoalService) {}

	saveNewGoal() {
		this.goalService
			.addGoal(this.goal)
			.subscribe((goal) => this.goals.push(goal));

		// reload the whole page to show the new goal
		window.location.reload();
	}
}
