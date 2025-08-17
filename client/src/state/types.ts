
export interface Project{
        id:number;
        name:number;
        description?:string;
        startDate?:string;
        endDate?:string;
}

export enum  Priority{
    Urgent="Urgent",
    High="High",
    Medium="Medium",
    Low="Low",
    Backlog="Backlog"
}
export interface User {
    userId?:number,
    username:string;
    email:string;
    profilePictureUrl?:string,
    cognioId?:string;
    teamId?:number
}
export interface Attachment{
    id:number;
    fileUrl:string;
    fileName:string;
    taskId:number;
    uploadedById:number;
}
export interface Comment{

}
export enum Status{
    Todo = "To Do",
    WorkInProgress="Work in Progress",
    UnderReview="Under Review",
    Completed="Completed"
}

export interface Task{
    id:number;
    title?:string;
    description?:string;
    status?:Status,
    priority?:Priority,
    tags?:string,
    startDate?:string;
    dueDate?: string;
    points?:number;
    projectId?:number;
    authorUserId?:number;
    assignedUserId?:number;

    author?:User;
    assignee?:User;
    comment?:Comment[];
    attachments?:Attachment[];
}