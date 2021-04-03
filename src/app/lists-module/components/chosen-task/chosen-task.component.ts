import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Task } from '../../models/task';
import {FormControl, FormGroup} from '@angular/forms';
import {ToDo} from '../../models/to-do';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-chosen-task',
  templateUrl: './chosen-task.component.html',
  styleUrls: ['./chosen-task.component.css']
})
export class ChosenTaskComponent implements OnInit {

  private url = 'http://localhost:8080';
  chosenTask: Task;
  chosenToDo: ToDo;
  todo: ToDo;
  todos: ToDo[];

  title = new FormControl();
  body = new FormControl();
  finaldata = new FormControl();

  addTodo = new FormGroup({
    title: this.title,
    body: this.body,
    finaldata: this.finaldata
  });


  titleTodo = new FormControl();

  findTodo = new FormGroup({
    title: this.titleTodo
  });

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(value => {
      this.chosenTask = router.getCurrentNavigation().extras.state as Task;
    });
  }

  action(): void {
    console.log(this.addTodo.value);
    this.httpClient.post<ToDo>(this.url + '/lists/' + this.chosenTask.id + 'saveToDo', this.addTodo.value)
      .subscribe(() => {
        this.httpClient.get<ToDo[]>(this.url + '/lists/' + this.chosenTask.id).subscribe(value => this.todos = value);
      });
  }

  findToDo(): void {
    console.log(this.findTodo.value);
    this.httpClient.post<ToDo>(this.url + '/lists/' + this.chosenTask.id, this.findTodo.value)
      .subscribe(value => this.chosenToDo = value);
  }

  ngOnInit(): void {
    this.httpClient.get<ToDo[]>(this.url + '/lists/' + this.chosenTask.id).subscribe(value => this.todos = value);
  }


}
