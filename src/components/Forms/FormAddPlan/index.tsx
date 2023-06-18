import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface FormAddPlanProps {
    title: string,
    children: ReactNode;
}


export const FormAddPlan = ({ title, children }: FormAddPlanProps) => {

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
            <form className="mt-[3rem]">
                {children}
            </form>
        </div>
    )
}