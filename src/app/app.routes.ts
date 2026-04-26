import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Calculator } from './pages/calculator/calculator';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "calculator", component: Calculator },
    { path: "about", component: About },
    { path: "**", component: NotFound}
];
