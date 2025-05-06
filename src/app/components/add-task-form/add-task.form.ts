import { Component, Input, Output, EventEmitter  } from "@angular/core";
import { TaskService } from "../../service/task.service";
import { Task } from "../../model/task.model";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';



@Component({
selector: 'add-task-component',
templateUrl:'./add-task.form.html',
styleUrls:['./add-task.form.css',],
standalone:true,
imports: [CommonModule, ReactiveFormsModule, ]
})

export class AddTaskComponent{
    taskForm:FormGroup;
    id_controller:number=0;
    @Output() save=new EventEmitter<any>();
    @Output() close=new EventEmitter<void>();


    constructor( private fb:FormBuilder){;  
        this.taskForm=fb.group({
            title: ['', Validators.required],
            description:[''],
            status:['pending']
        })
    }
    onSubmit(){
        if(this.taskForm.valid){
        this.save.emit(this.taskForm.value);
        this.taskForm.reset;
        this.taskForm.reset();
        }
        else{
            this.taskForm.markAllAsTouched();
        }
    }
    onClose(){
        this.close.emit();
    }
}