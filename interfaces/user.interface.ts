import { TaskItemProps } from "./task-item.interface";

export interface User {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	activity: string;
	password: string,
    dateOfAccountCreation: Date,
    tasks: TaskItemProps[],
}
