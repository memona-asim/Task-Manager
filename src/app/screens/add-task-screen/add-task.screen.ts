import { Component } from "@angular/core";
import { TaskService } from "../../service/task.service";
import { Task } from "../../model/task.model";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from "../../components/add-task-form/add-task.form";



@Component({
selector: 'add-task-screen-component',
templateUrl:'./add-task.screen.html',
styleUrls:['./add-task.screen.css',],
standalone:true,
imports: [CommonModule, ReactiveFormsModule, AddTaskComponent]
})

export class AddTaskScreenComponent{
    tasks;
    showAddTaskForm = false;
    showToast = false;

    constructor(private taskService:TaskService, private fb:FormBuilder){
        this.tasks = this.taskService.getTasks();  
    }
    handleSubmit(taskInfo:any){
        const newTask={
            id:taskInfo.id,
            title:taskInfo.title,
            description:taskInfo.description,
            status:taskInfo.status
        }
        this.taskService.addTask(newTask);
        this.showAddTaskForm = false;
        this.showToast = true;

        setTimeout(() => this.showToast = false, 3000);
    }
    handleClose(){
        this.showAddTaskForm = false;
    }
}