import type { ReactElement } from "react";

interface SidebarProps {
    text: string;
    icon: ReactElement
}

export const SidebarItem = ({text, icon}: SidebarProps) => {
    return (
        <div className="flex items-center space-x-3 p-3 gap-3 rounded-lg mb-2 transition-colors duration-150 hover:bg-blue-100 text-blue-700 font-semibold cursor-pointer">
            {icon} {text}
        </div>
    )
}