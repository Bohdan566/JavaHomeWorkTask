import {ToDo} from './to-do';

export interface Task {
  id: number;
  title: string;
  tasksList: ToDo[];
}
