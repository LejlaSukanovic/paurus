import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    },
    {
        path: 'overview',
        pathMatch: 'full',
        loadComponent: () => import('./pages/overview/overview').then(m => m.Overview)
    },
    {
        path: 'student/add',
        loadComponent: () => import('./pages/add-student/add-student').then(m => m.AddStudent)
    },
    {
        path: 'student/:id',
        loadComponent: () => import('./pages/student-details/student-details').then(m => m.StudentDetails)
    }
];
