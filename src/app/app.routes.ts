import { Routes } from '@angular/router';
import { AddTaskScreenComponent } from './screens/add-task-screen/add-task.screen';
import { HomeScreenComponent } from './screens/home-screen/home.screen';
export const routes: Routes = [
    {path:'add-task', component:AddTaskScreenComponent},
    {path:'', component: HomeScreenComponent}
];
