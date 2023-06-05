import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Box className='w-screen h-screen grid grid-cols-[295px_1fr]'>
            <Box className='bg-[#00C172]'>
                <Box className='w-full h-80 flex justify-center items-center'>
                    <Typography 
                        sx={{
                            fontSize: '5.5rem',
                            color: '#f5f5f5',
                            fontFamily: 'Secular One',
                            fontWeight: 400,
                            lineHeight: '80px',
                        }}
                        component='h1'>
                        pluto
                    </Typography>
                </Box>

            </Box>

            <Box className=' bg-[#F5F5F5]'>
                {children}
            </Box>
        </Box>
    )
}