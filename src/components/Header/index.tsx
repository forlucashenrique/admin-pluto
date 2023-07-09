import { Box, Typography } from "@mui/material";
import { HeaderButton } from "./components/HeaderButton";
import { IconHome2 } from '@tabler/icons-react';
import { IconHeartHandshake } from '@tabler/icons-react';
import { IconMapPinFilled } from '@tabler/icons-react';
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <header>
            <Box className='w-full h-80 flex flex-col gap-11 justify-center items-center'>
                <Link to='/'>
                    <Typography
                        sx={{
                            fontSize: '4.4rem',
                            color: '#f5f5f5',
                            fontFamily: 'Secular One',
                            fontWeight: 400,
                            lineHeight: '80px',

                        }}
                        component='h1'>
                        pluto
                    </Typography>
                </Link>

            </Box>
            <Box className='w-full flex flex-col items-center'>
                <Link to='/'>
                    <HeaderButton
                        icon={<IconHome2 size={24} color='#F5F5F5' />}
                    >
                        Página Inicial
                    </HeaderButton>
                </Link>

                <Box className='mt-[3.1rem]'>
                    <HeaderButton
                        icon={<IconHeartHandshake size={24} color='#F5F5F5' />}
                    >
                        Planos de doação
                    </HeaderButton>
                    <Link to='/listagem-planos'>
                        <HeaderButton>
                            Listagem dos planos
                        </HeaderButton>
                    </Link>
                    <Link to='/adicionar-plano'>
                        <HeaderButton>
                            Adicionar plano
                        </HeaderButton>
                    </Link>

                </Box>
                <Box className='mt-[3.1rem]'>
                    <HeaderButton
                        icon={<IconMapPinFilled size={24} color='#F5F5F5' />}
                    >
                        Unidades
                    </HeaderButton>
                    <Link to='/listagem-unidades'>
                        <HeaderButton>

                            Listagem das unidades
                        </HeaderButton>
                    </Link>
                    <Link to='/adicionar-unidade'>
                        <HeaderButton>
                            Adicionar unidade
                        </HeaderButton>
                    </Link>

                </Box>
            </Box>
        </header>
    )
}

export default Header;