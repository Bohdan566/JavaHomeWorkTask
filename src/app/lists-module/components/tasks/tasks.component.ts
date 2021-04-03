import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../services/list.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  tasks: Task[];

  private url = 'http://localhost:8080';

  title = new FormControl();

  saveTask = new FormGroup({
    title: this.title
  });


  constructor(private httpClient: HttpClient) { }

  action(): void{
    this.httpClient.post<Task>(this.url + '/save', this.saveTask.value).subscribe(() => {
      this.httpClient.get<Task[]>(this.url).subscribe(value => this.tasks = value);
    });
  }


  ngOnInit(): void {
    this.httpClient.get<Task[]>(this.url).subscribe(value => this.tasks = value);
  }


}
