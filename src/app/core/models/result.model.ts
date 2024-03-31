import { CategoryNumbers } from './categoryNumbers.model';
import { RaceTime } from './raceTime.model';

export class Result {
	resultId!: number;
	eventId!: number;
	date = '';
	distanceId!: number;
	timeGross: RaceTime = new RaceTime();
	timeNet: RaceTime = new RaceTime();
	category? = '';
	agegroup? = '';
	place: CategoryNumbers = new CategoryNumbers();
	finisher: CategoryNumbers = new CategoryNumbers();
	relativePlaces: CategoryNumbers = new CategoryNumbers();
}
