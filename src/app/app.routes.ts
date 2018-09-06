import { Routes, RouterModule } from '@angular/router';

import { DataComponent } from './components/data/data.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
    { path: 'data', component: DataComponent },
    { path: 'template', component: TemplateComponent },
    { path: '**', redirectTo: 'data' },
];

export const app_routes = RouterModule.forRoot(routes);
