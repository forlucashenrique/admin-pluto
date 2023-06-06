import { ReactNode } from "react"


interface HeaderButtonProps {
    children: ReactNode;
    icon?: ReactNode;
}

export const HeaderButton = ({ children, icon}: HeaderButtonProps) => {
    //bg-[#31CB8A]
    return (
        <button
            className={`
                flex items-center  gap-3  text-[#F5F5F5] font-normal
                w-[23.5rem] h-[5.2rem] text-[1.6rem] leading-[1.875rem] py-4 pl-6

                ${icon ? 'justify-start' : 'pl-[4.5rem]'}
            `}>
            {icon}
            {children}
        </button>
    )
}