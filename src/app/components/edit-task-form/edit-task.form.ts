import { Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";



@Component({
    selector: 'edit-task-component',
    templateUrl: './edit-task.form.html',
    styleUrls: ['./edit-task.form.css',],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class EditTaskComponent implements OnInit{
    taskForm!: FormGroup;
    @Input() task:any;
    @Output() save=new EventEmitter<any>();
    @Output() close=new EventEmitter<void>();
    constructor(private fb: FormBuilder){}
    ngOnInit(){
        this.taskForm=this.fb.group({
            title:[this.task.title, Validators.required],
            description:this.task.description,
            status:this.task.status,
        });
    }
    onSubmit(){
        if(this.taskForm.valid){
            this.save.emit(this.taskForm.value);
        }
        else{
            this.taskForm.markAllAsTouched();
        }
    }
    onClose(){
        this.close.emit();
    }
}