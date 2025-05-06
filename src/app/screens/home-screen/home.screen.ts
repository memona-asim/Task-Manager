import { Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { TaskService } from "../../service/task.service";
import { EditTaskComponent } from "../../components/edit-task-form/edit-task.form";



@Component({
    selector: 'home-screen-component',
    templateUrl: './home.screen.html',
    styleUrls: ['./home.screen.css',],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, EditTaskComponent]
})
export class HomeScreenComponent{
    tasks;
    selectedTask: any = null;
    showEditTaskForm=false;

    constructor(private taskService:TaskService){
        this.tasks=taskService.getTasks();
    }
    handleEdit(task: any){
        this.showEditTaskForm=true;
        this.selectedTask = { ...task };
    }
    saveEdit(updatedData:any){
        this.taskService.editTask(this.selectedTask.id, updatedData);
        this.tasks = this.taskService.getTasks(); 
        this.selectedTask = null;
        this.showEditTaskForm=false;
    }
    handleClose(){
        this.showEditTaskForm=false;
    }
    handleDelete(task:any){
        this.selectedTask = { ...task };
        this.taskService.deleteTask(this.selectedTask.id);
    }
}