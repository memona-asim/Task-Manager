import { Injectable, signal } from '@angular/core';
import { Task } from '../model/task.model';
import { finalize } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    private tasks=signal<Task[]>([]);

    getTasks(){
        return this.tasks;
    }
    addTask(t:Task){
        this.tasks.update(tasks=>[...tasks, t]);
    }
    deleteTask(id: number){
        this.tasks.update(tasks=>tasks.filter(task=>id!==task.id));
    }
    editTask(id: number, updatedData:any){
        let task = this.tasks().find(t=>t.id===id)
        if(task){
            task.description=updatedData.description;
            task.status=updatedData.status;
            task.title=updatedData.title;
            this.tasks.set([...this.tasks()]);
        }
    }
} 