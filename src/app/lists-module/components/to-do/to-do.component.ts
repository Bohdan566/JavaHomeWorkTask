import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from '../../models/to-do';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  private url = 'http://localhost:8080';

  @Input()
  todo: ToDo;


  title = new FormControl();
  body = new FormControl();
  finaldata = new FormControl();

  update = new FormGroup({
    title: this.title,
    body: this.body,
    finaldata: this.finaldata
  });

  constructor(private httpClient: HttpClient) { }

  deleteToDo(todo: ToDo): void {
    this.httpClient.delete<ToDo>(this.url + '/lists/' + todo.id).subscribe(value => console.log(value));
  }

  updateToDo(todo: ToDo, update: FormGroup): void {
    console.log(update);
    this.httpClient.post<ToDo>(this.url + '/lists/' + todo.id + 'update', update.value).subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }



}
