
import React from "react";
import { areas } from "@/config/areas";
import TaskArea from "./TaskArea";

const Tasks = ({ isLoading }: { isLoading?: boolean }) => {
	return (
		<div className="my-40 grid md:grid-cols-3 grid-cols-1 gap-10">
			{areas.map((area) => (
				<TaskArea
					key={area.id}
					label={area.label}
					tasks={area.tasks}
					isLoading={isLoading}
                    Icon={area.Icon}
				/>
			))}
		</div>
	);
};

export default Tasks;
