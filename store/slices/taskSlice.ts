// tasksSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskItemProps } from "@/interfaces/task-item.interface";

// Определение начального состояния
interface TasksState {
	tasks: TaskItemProps[] | undefined;
}

const initialState: TasksState = {
	tasks: [],
};

// Создание среза (slice)
const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		setTasks: (state, action: PayloadAction<TaskItemProps[] | undefined>) => {
			state.tasks = action.payload;
		},

		// setSetTasks: (
		// 	state,
		// 	action: PayloadAction<TaskItemProps[] | undefined>
		// ) => {
		// 	if (state) {
		// 		state.tasks = action.payload?.filter(
		// 			(task) => task.status.toLowerCase() === "set"
		// 		);
		// 	}
		// },
		// setInProcessTasks: (
		// 	state,
		// 	action: PayloadAction<TaskItemProps[] | undefined>
		// ) => {
		// 	if (state) {
		// 		state.tasks = action.payload?.filter(
		// 			(task) => task.status.toLowerCase() === "in process"
		// 		);
		// 	}
		// },
		// setCompletedTasks: (
		// 	state,
		// 	action: PayloadAction<TaskItemProps[] | undefined>
		// ) => {
		// 	if (state) {
		// 		state.tasks = action.payload?.filter(
		// 			(task) => task.status.toLowerCase() === "completed"
		// 		);
		// 	}
		// },

		// addTask: (state, action: PayloadAction<TaskItemProps>) => {
		// 	state.tasks.push(action.payload);
		// },
		// removeTask: (state, action: PayloadAction<number>) => {
		// 	state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		// },
	},
});

// Экспорт редукс-действий
export const {
	setTasks /*setSetTasks, setInProcessTasks, setCompletedTasks addTask, removeTask */,
} = tasksSlice.actions;

// Экспорт редукс-редюсера
export default tasksSlice.reducer;
