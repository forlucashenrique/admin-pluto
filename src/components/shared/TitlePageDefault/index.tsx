import { Box, Typography } from "@mui/material";

interface TitleProps {
    title: string;
    description: string;
}

export const TitlePageDefault = ({ title, description }: TitleProps) => {

    return (
        <>

            <Typography
                component='h1'
                sx={{
                    fontSize: '2.56rem',
                    fontWeight: '700',
                    lineHeight: '3.75rem',
                    color: '#00C172',
                }}
            >
                {title}
            </Typography>
            <Box className='w-[41.36rem] h-[6.72rem] mt-[1rem]'>
                <Typography
                    component='p'
                    sx={{

                        fontSize: '1.28rem',
                        fontWeight: '400',
                        lineHeight: '2.24rem',
                        letterSpacing: '0.015em',
                    }}
                >
                    {description}
                    
                </Typography>
            </Box>
        </>
    )
}