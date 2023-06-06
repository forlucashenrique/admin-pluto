import { Box } from "@mui/material";
import { ReactNode } from "react";
import Header from "../Header";

interface LayoutProps {
    children: ReactNode;
    
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Box className='w-screen h-screen grid grid-cols-[295px_1fr]'>
            <Box className='bg-[#00C172]'>
                <Header />
            </Box>

            <Box className=' bg-[#F5F5F5]'>
                {children}
            </Box>
        </Box>
    )
}