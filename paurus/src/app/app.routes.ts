import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'overview',
        pathMatch: 'full',
        loadComponent: () => import('./pages/overview/overview').then(m => m.Overview)
    }
];
