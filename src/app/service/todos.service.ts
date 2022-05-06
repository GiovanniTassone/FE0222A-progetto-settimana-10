import { Todo } from "../interface/todo";

export let arrayToDo: Todo[] = [];
export let ricerca1: number = 0;

export async function aggTask(task: string): Promise<Todo> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const newTodo: Todo = {
        id: arrayToDo.length + 1,
        title: task,
        completed: false,
        modificated: false,
      };
      arrayToDo.push(newTodo);
      res(newTodo);
    }, 2000);
  });
}

export async function riceviTask(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(arrayToDo);
    }, 2000);
  });
}

export function addiz(): number {
  return ricerca1++;
}

export function sottr(): number {
  return ricerca1--;
}
