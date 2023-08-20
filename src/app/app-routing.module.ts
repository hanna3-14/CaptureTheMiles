import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
