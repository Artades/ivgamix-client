
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { burnAuthToken } from "@/utils/setAuthStatus";
import { useRouter } from "next/navigation";

export function ActionsButton() {
	const router = useRouter();
    const handleLogout = () => {
         burnAuthToken();
		 router.push('/auth');
		 
    };
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Avatar className="cursor-pointer">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>AG</AvatarFallback>
				</Avatar>
			</PopoverTrigger>
			<PopoverContent className="w-40 z-[1001] rounded-[0.5rem] mt-5">
				<div className="grid grid-cols-1 gap-y-2 ">
					<div className="cursor-pointer w-full justify-start flex items-center hover:text-primary rounded-t-[0.5rem]">
						<span className="text-sm ">FAQ</span>
					</div>
					<Separator className="w-full" />
					<div className="cursor-pointer w-full justify-start flex items-center hover:text-primary rounded-t-[0.5rem]">
						<span onClick={() => handleLogout()} className="text-sm">Log out</span>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
