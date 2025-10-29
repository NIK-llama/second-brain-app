import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./Sidebaritem"

export const Sidebar = () => {
    return (
        <div className="w-64 bg-white shadow-xl shadow-gray-200/50 flex flex-col p-4 border-r border-gray-200 absolute" >
            <div className="text-2xl font-bold text-blue-600 mb-8 p-2">
                Second Brain App
            </div>
            <nav className="">
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
            </nav>
        </div>
    )
}