import React from 'react';
import { FaPlus } from "react-icons/fa6";

const CreateButton = () => {
    return (
			<div className="md:block hidden hover:from-pink-900 hover:to-primary transtion duration-300 p-[1px] cursor-pointer bg-gradient-to-r from-pink-400 to-primary rounded-[0.5rem]">
				<div className="bg-black   flex items-center gap-x-3 rounded-[0.5rem] px-6  py-2">
					<p className="text-white text-bold">Create</p>
					<FaPlus className="w-4 h-4 text-primary text-bold" />
				</div>
			</div>
		);
};

export default CreateButton;