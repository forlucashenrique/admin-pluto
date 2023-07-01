import { Typography } from "@mui/material";
import { ReactNode } from "react";


interface FormProps {
    title: string,
    children: ReactNode;
    handleOnSubmit: () => void
}


export const Form = ({ title, children, handleOnSubmit }: FormProps) => {

    return (
        <div className="border-[.5rem] border-[#31CB8A] rounded-xl w-[61.12rem] h-[60.32rem] p-[4.8rem] ">
            <Typography
                component='span'
                sx={{
                    fontSize: '2.56rem',
                    fontWeight: '700',
                    lineHeight: '3.75rem',
                    color: '#00C172',
                    
                    
                }}
            >
                {title}
            </Typography>
            <form className="mt-[3rem]" onSubmit={handleOnSubmit}>
                {children}
            </form>
        </div>
    )
}