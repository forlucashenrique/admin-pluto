import { Box, Typography } from "@mui/material";
import { HeaderButton } from "./components/HeaderButton";
import { IconHome2 } from '@tabler/icons-react';
import { IconHeartHandshake } from '@tabler/icons-react';
import { IconMapPinFilled } from '@tabler/icons-react';


export const Header = () => {
    return (
        <header>
            <Box className='w-full h-80 flex flex-col gap-11 justify-center items-center'>
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
            <Box className='w-full flex flex-col items-center'>
                <HeaderButton
                    icon={<IconHome2 size={24} color='#F5F5F5' />}
                >
                    Página Inicial
                </HeaderButton>
                <Box className='mt-[3.1rem]'>
                    <HeaderButton
                        icon={<IconHeartHandshake size={24} color='#F5F5F5' />}
                    >
                        Planos de doação
                    </HeaderButton>
                    <HeaderButton>
                        Listagem dos planos
                    </HeaderButton>
                    <HeaderButton>
                        Adicionar plano
                    </HeaderButton>
                </Box>
                <Box className='mt-[3.1rem]'>
                    <HeaderButton
                        icon={<IconMapPinFilled size={24} color='#F5F5F5' />}
                    >
                        Unidades
                    </HeaderButton>
                    <HeaderButton>
                        
                        Listagem das unidades
                    </HeaderButton>
                    <HeaderButton>
                        Adicionar unidade
                    </HeaderButton>
                </Box>
            </Box>
        </header>
    )
}

export default Header;