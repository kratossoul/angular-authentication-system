import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './pages/guard/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path:'login',
        component:LoginComponent,

    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component:DashboardComponent,
                canActivate: [authGuard]
            }
        ]
    },
    {
        path:'',
        component: NotFoundComponent,
        children: [
            {
                path: 'not-found',
                component:DashboardComponent,
                canActivate: [authGuard]
            }
        ]
    }
];
