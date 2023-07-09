import { Box, Typography } from "@mui/material"

import loginImage from '../../assets/login-background.svg'
import handsLoginImage from '../../assets/hands-login.svg'
import { Input } from "../../components/Forms/Input"
import { useForm } from "react-hook-form"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

import { LoginData, login as loginService } from "../../services/authService"

export const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit =  async (data: LoginData) => {
        try {
            const user = await loginService(data);
            login(user);
            navigate('/');

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box className={`
            grid grid-cols-[888px_1fr] w-full h-screen

            box-border
        `}
            sx={{
                fontFamily: 'Roboto'
            }}
        >
            <Box
                className='flex items-center justify-center'
                sx={{
                    backgroundImage: `url(${loginImage})`,
                }}

            >
                <Box className='flex flex-col w-[69.68rem] h-[39.76rem] bg-[#F5F5F5] rounded-[1rem]'>
                    <Typography
                        sx={{
                            fontFamily: 'Prata',
                            fontSize: '4rem',
                            fontWeight: 400,
                            padding: '3rem 4.5rem 0 4.5rem',
                            color: '#007A46',

                        }}
                    >
                        A partir da doação podemos fazer com que <span className="text-[#F8475E]">não</span> haja mais <span className="text-[#F8475E]">fome</span> amanhã
                    </Typography>
                    <Box className='flex justify-end pl-[4.5rem] pr-[10rem]'>
                        <img src={handsLoginImage}></img>
                    </Box>
                </Box>
            </Box>
            <Box

            >
                <Box className='w-full h-[20rem] flex items-end justify-center '>
                    <Typography
                        sx={{
                            fontSize: '5.76rem',
                            color: '#007A46',
                            fontFamily: 'Secular One',
                            fontWeight: 400,
                            lineHeight: '80px',

                        }}
                        component='h1'>
                        pluto
                    </Typography>
                </Box>
                <Box className='px-[7.2rem] py-[4.5rem]'>
                    <Typography
                        sx={{

                            fontSize: '2rem',
                            color: '#007A46',
                            fontWeight: 600,
                            fontFamily: 'Roboto',
                            lineHeight: '28px'
                        }}
                        component='h2'>
                        Seja bem-vindo!
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.28rem',
                            fontWeight: 400,
                            color: '#606060',

                        }}
                        component='span'>
                        Realize o login para prosseguir.
                    </Typography>
                </Box>
                <Box className='px-[7.2rem] flex flex-col'>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[1.5rem] flex-col">
                        <Input
                            label="Email"
                            name="email"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            name="password"
                            errors={errors}
                            register={register}
                        />

                        <button
                            className={`flex-1 bg-[#00C172] py-[1rem] px-[1.5rem] rounded text-[#F6F6E9]
                                text-[1.4rem] font-bold
                            `}
                        >
                            ENTRAR
                        </button>
                    </form>
                    <Box className='mt-[2rem] flex justify-between'>
                        <Typography
                            component='span'
                           
                            sx={{
                                fontSize: '1.68rem',
                                fontWeight: 400,
                                color: '#007A46',
                                lineHeight: '28px'
                            }}
                        >
                            Esqueci minha senha
                        </Typography>
                        <Typography
                            component='span'
                            sx={{
                                fontSize: '1.68rem',
                                fontWeight: 400,
                                color: '#606060'

                            }}
                        >
                            Não tem uma conta? <span className='text-[#007A46]'>Registrar-se</span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/*  <img src={loginImage} alt="" /> */}
        </Box>
    )
}

/* import "./styles.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, ReferenceLine } from "recharts";



export default function App() {
  return (
    
  );
} */