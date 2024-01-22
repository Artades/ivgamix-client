// TaskItem.tsx

import { TaskItemProps } from "@/interfaces/task-item.interface";
import React from "react";


import * as Api from "@/api"
import Indicator from "./Indicator";
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
			className={`relative border w-full focus:opacity-60 transition bg-white/5 rounded-[.5rem] cursor-pointer`}
		>
			<div className="px-4 py-5 flex flex-col items-start ">
				<Indicator className="absolute top-3 left-3" />
				<div className="flex items-center">
					<span className=" text-xs text-muted-foreground mb-5">{name}</span>
				</div>
				<p className="text-sm ">{description}</p>
			</div>
		</div>
	);
	
};

export default TaskItem;