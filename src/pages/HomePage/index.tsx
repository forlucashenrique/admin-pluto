import { Box, Typography } from "@mui/material"
import { CardAmount } from "../../components/CardAmount"
import CurrencyImage from '../../assets/currency.svg'
import HeartHouseImage from '../../assets/hearthouse.svg'
import PiggyBankImage from '../../assets/piggybank.svg'
import { TitlePageDefault } from "../../components/shared/TitlePageDefault"

export const HomePage = () => {



    return (
        <>
            <TitlePageDefault

                title='Olá, seja bem vindo!'
                description='A partir desse sistema você consegue gerenciar informações a serem exibidas no site do seu projeto. Dê uma olhada em alguns dados gerenciais que coletamos .'
            />

            <Box className='flex flex-1 gap-11 mt-[4.5rem]'>
                <CardAmount
                    icon={CurrencyImage}
                    text="Quantidade de planos ofertados"
                    amount={7}
                    index={1}
                />
                <CardAmount
                    icon={HeartHouseImage}
                    text="Unidades do projeto cadastradas"
                    amount={3}
                    index={2}
                />
                <CardAmount
                    icon={PiggyBankImage}
                    text="Valor total de doações arrecadadas"
                    amount={550}
                    index={3}
                />

            </Box>

        </>
    )
}