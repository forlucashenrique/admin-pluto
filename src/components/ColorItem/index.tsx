
import { ReactNode } from "react";

interface ColorItem {
    color: string;
    children: ReactNode;

}


export const ColorItem = ({ color, children }: ColorItem) => {
    return (
        <div className='flex gap-2 items-center'>
            <span
                style={{
                    backgroundColor: `${color}`,
                }}
                className="w-[2.4rem] h-[2.4rem] rounded-full  flex items-center justify-center shadow-md"
            >
            </span>
            {children}
        </div>

    )
}