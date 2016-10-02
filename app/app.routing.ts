import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { WallComponent } from './wall/index';
const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },{
         path: 'wall',
        component: WallComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
