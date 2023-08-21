import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadChildren: () =>
			import('./../app/features/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'results',
		loadChildren: () =>
			import('./../app/features/results/results.module').then(
				(m) => m.ResultsModule,
			),
		canActivate: [AuthGuard],
	},
	{
		path: 'goals',
		loadChildren: () =>
			import('./../app/features/goals/goals.module').then((m) => m.GoalsModule),
		canActivate: [AuthGuard],
	},
	{
		path: 'callback',
		loadChildren: () =>
			import('./../app/features/callback/callback.module').then(
				(m) => m.CallbackModule,
			),
	},
	{
		path: '**',
		loadChildren: () =>
			import('./../app/features/not-found/not-found.module').then(
				(m) => m.NotFoundModule,
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
