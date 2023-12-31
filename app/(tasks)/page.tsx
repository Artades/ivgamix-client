"use client";
import Tasks from "@/components/Tasks/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { TaskItemProps } from "@/interfaces/task-item.interface";
import { NextPage } from "next";
import * as Api from "@/api";
import {  setTasks } from "@/store/slices/taskSlice";

import useAuthentication from "@/hooks/useAuthentication";


interface HomeProps {
	tasks: TaskItemProps[] | undefined;
}

const Home = () => {

	const dispatch = useDispatch();
	// Use the custom authentication hook
	useAuthentication();

	const { data: fetchedTasks, isLoading } = useQuery("tasks", async () => {
		return await Api.tasks.getAllTasks();
	});

	 
	 
	dispatch(setTasks(fetchedTasks));
	

	return (
		<>
			<Tasks isLoading={isLoading} />
			
		</>
	);
};

export default Home;
