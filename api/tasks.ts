import { TaskItemProps } from "@/interfaces/task-item.interface";
import axios from "../core/axios";

export const getAllTasks = async ():Promise<TaskItemProps[]> => {
     return (await axios.get('/tasks')).data;
};

export const updateTaskStatus = async(id: number, status: string): Promise<{status: string}> => {
     return (await axios.patch(`/tasks/${id}/status`, {status})).data
}