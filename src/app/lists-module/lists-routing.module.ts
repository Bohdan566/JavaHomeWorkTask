
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksComponent} from './components/tasks/tasks.component';
import {ChosenTaskComponent} from './components/chosen-task/chosen-task.component';



const routes: Routes = [{
  path: '', component: TasksComponent
},
  {
    path: ':id', component: ChosenTaskComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListsRoutingModule { }
