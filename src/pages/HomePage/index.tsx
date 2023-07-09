import { Box, Typography } from "@mui/material"
import { CardAmount } from "../../components/CardAmount"
import CurrencyImage from '../../assets/currency.svg'
import HeartHouseImage from '../../assets/hearthouse.svg'
import PiggyBankImage from '../../assets/piggybank.svg'
import { TitlePageDefault } from "../../components/shared/TitlePageDefault"
import { useEffect, useState } from "react"
import { getPlans } from "../../services/planServices"
import { getUnits } from "../../services/unitServices"
import { HorizontalBarChart } from "../../components/charts/HorizontalBarChart"

export const HomePage = () => {


    const [totalPlans, setTotalPlans] = useState(0)
    const [totalUnits, setTotalUnits] = useState(0)

    useEffect(() => {

        const getAllPlans = async () => {

            const plans = await getPlans();

            setTotalPlans(plans.length)
        }

        getAllPlans();
    }, [])


    useEffect(() => {

        const getAllUnits = async () => {
            const units = await getUnits();
            setTotalUnits(units.length);
        }

        getAllUnits();

    }, [])


    return (
        <>
            <TitlePageDefault

                title='Olá, seja bem-vindo!'
                description='A partir desse sistema você consegue gerenciar informações a serem exibidas no site do seu projeto. Dê uma olhada em alguns dados gerenciais que coletamos .'
            />

            <Box className='flex flex-1 gap-11 mt-[4.5rem]'>
                <CardAmount
                    icon={CurrencyImage}
                    text="Quantidade de planos ofertados"
                    amount={totalPlans}
                    index={1}
                />
                <CardAmount
                    icon={HeartHouseImage}
                    text="Unidades do projeto cadastradas"
                    amount={totalUnits}
                    index={2}
                />
                <CardAmount
                    icon={PiggyBankImage}
                    text="Valor total de doações arrecadadas"
                    amount={550}
                    index={3}
                />

            </Box>

            <Box className='mt-[3.6rem] flex justify-between w-full'>
                <HorizontalBarChart
                    chartTitle='Planos x Unidades'
                    legends={['Planos Ofertados', 'Unidades cadastradas']}
                    totalPlans={totalPlans}
                    totalUnits={totalUnits}
                    ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />

                <HorizontalBarChart
                    chartTitle='Arrecadações por plano'
                    legends={['Plano 01', 'Plano 02']}

                    totalPlans={150}
                    totalUnits={400}
                    ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}

                />

            </Box>

        </>
    )
}