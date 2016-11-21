import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { WebSocketRoutes } from './websocket/index';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
        ...WebSocketRoutes
    	]
  	}
];
