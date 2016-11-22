import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { AuthorRoutes } from './author/index';
import { PracticeRoutes } from './practice/index';
import { SourcesRoutes } from './sources/index';
import { SupervisorRoutes } from './supervisor/index';
import { TheoryRoutes } from './theory/index';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
        ...AuthorRoutes,
        ...PracticeRoutes,
        ...SourcesRoutes,
        ...SupervisorRoutes,
        ...TheoryRoutes
    	]
  	}
];
