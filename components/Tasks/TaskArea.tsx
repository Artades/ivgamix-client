"use client";
import React, { FC, useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { TaskAreaProps } from "@/config/areas";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Separator } from "../ui/separator";
import TaskItem from "./TaskItem";
import { Skeleton } from "../ui/skeleton";
import { TaskItemProps } from "@/interfaces/task-item.interface";

const TaskArea: FC<TaskAreaProps & { isLoading?: boolean }> = ({
	label,
	tasks,
	isLoading,
	Icon,
}) => {
	const [filteredTasks, setFilteredTasks] = useState<
		TaskItemProps[] | undefined
	>([]);

	tasks = useSelector((state: RootState) => state.tasks.tasks);

	useEffect(() => {
		if (label === "Задачи") {
			setFilteredTasks(
				tasks?.filter((task) => task.status.toLowerCase() === "set") || []
			);
		} else if (label === "В процессе") {
			setFilteredTasks(
				tasks?.filter((task) => task.status.toLowerCase() === "in process") ||
					[]
			);
		} else if (label === "Выполнено") {
			setFilteredTasks(
				tasks?.filter((task) => task.status.toLowerCase() === "completed") || []
			);
		} else {
			setFilteredTasks([]);
		}
	}, [label, tasks]);
	return (
		<div className="h-[70vh]  rounded-[0.5rem] border">
			<div className="w-full flex flex-col h-16 items-start justify-center px-4">
				<h4 className=" text-lg font-bold leading-none flex">
					{label}{" "}
					<span className="ml-3">
						<Icon className="w-5 h-5 " />
					</span>
				</h4>
			</div>
			<Separator className={"w-full "} />
			<ScrollArea className="w-full h-[60vh]">
				<div className="p-4 flex flex-col items-start gap-y-3">
					{isLoading
						? Array(9)
								.fill(null)
								.map((_, index) => (
									<Skeleton
										key={index}
										className="w-full h-[100px] rounded-[.5rem]"
									/>
								))
						: filteredTasks?.map((task) => (
								<TaskItem
									key={task.id}
									name={task.name}
									deadline={task.deadline}
									description={task.description}
									dateOfCreation={task.dateOfCreation}
									status={task.status}
									color={task.color}
								/>
						  ))}
				</div>
			</ScrollArea>
		</div>
	);
};

export default TaskArea;
