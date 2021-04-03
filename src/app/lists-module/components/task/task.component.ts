import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../../models/task';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToDo} from '../../models/to-do';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task;

  tasks: Task[];

  chosenTask: Task;

  private url = 'http://localhost:8080';

  title = new FormControl( );

  updateList = new FormGroup({
    title: this.title
  });

  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }


  update(task: Task): void {
    console.log(this.updateList);
    this.httpClient.post<Task>(this.url + '/' + task.id + 'update', this.updateList.value)
      .subscribe(value => task = value);
  }


  delete(task: Task): void {
    this.httpClient.delete<Task>(this.url + '/' + task.id).subscribe(value => console.log(value));
  }

  gotoList(task: Task): void {
    this.router.navigate([task.id], {
      relativeTo: this.activatedRoute, state: task});
  }

  ngOnInit(): void {
  }

}
