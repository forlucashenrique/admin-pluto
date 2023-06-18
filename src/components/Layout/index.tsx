import { Box } from "@mui/material";
import { ReactNode } from "react";
import Header from "../Header";

interface LayoutProps {
    children: ReactNode;
    
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Box className='w-screen h-screen grid grid-cols-[236px_1fr]'>
            <Box className='bg-[#00C172]'>
                <Header />
            </Box>

            <Box className='pl-[3.8rem] pt-[3.8rem] pr-[6.5rem] bg-[#F5F5F5]'>
                {children}
            </Box>
        </Box>
    )
}