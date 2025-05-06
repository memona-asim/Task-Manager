export interface Task{
    title:string,
    description:string,
    id:number,
    status:'pending'| 'completed'
}