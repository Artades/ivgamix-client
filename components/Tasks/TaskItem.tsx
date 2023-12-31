// TaskItem.tsx

import { TaskItemProps } from "@/interfaces/task-item.interface";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

import * as Api from "@/api"
const TaskItem: React.FC<TaskItemProps> = ({
	id,
	name,
	deadline,
	description,
	dateOfCreation,
	status,
	color,
}) => {
	const handleStatusUpdate = async (taskId: number, newStatus: string) => {
		try {
			const response = await Api.tasks.updateTaskStatus(taskId, newStatus);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	return (
	
				<div
					
					className={`border w-full focus:opacity-60 transition bg-white/5 rounded-[.5rem] cursor-pointer`}
				>
					<div className="p-4">
						<p className="text-sm text-muted-foreground">{description}</p>
					</div>
				</div>
			)
	
};

export default TaskItem;