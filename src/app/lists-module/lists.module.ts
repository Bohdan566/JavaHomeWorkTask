import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import {ListService} from './services/list.service';
import {ListsRoutingModule} from './lists-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ChosenTaskComponent } from './components/chosen-task/chosen-task.component';
import { ToDoComponent } from './components/to-do/to-do.component';






@NgModule({
  declarations: [TasksComponent, TaskComponent, ChosenTaskComponent, ToDoComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [

  ],
  providers: [ListService]
})
export class ListsModule { }
