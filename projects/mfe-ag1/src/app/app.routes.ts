import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'shash', 
        loadChildren: () => import('./shash/shash-quash/shash.module')
            .then(m => m.ShashModule)
    }
];
