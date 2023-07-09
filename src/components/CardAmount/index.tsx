import { Box, Typography } from "@mui/material"

interface CardAmountProps {
    text?: string;
    amount: number;
    icon?: any;
    index: number;

}

export const CardAmount = ({ text, amount, icon, index }: CardAmountProps) => {

    const renderTitle = () => {
        if (index === 1) {
            return `${amount > 1 ? `${amount} Planos` : `${amount} Plano`}`
        }
        if (index === 2) {
            return `${amount > 1 ? `${amount} Unidades` : `${amount} Unidade`} `
        }
        if (index === 3) {
            return `${amount > 1 ? `R$ ${amount},00` : `R$ ${amount},00`}`
        }
    }


    return (
        <Box className='border-2 flex items-center gap-8 px-[3.6em] py-[3rem] w-[38rem] h-[16rem]'>
            <Box>
                <img
                    src={icon}
                    className="w-[14rem] h-[14rem]"
                >
                </img>
            </Box>
            <Box className='flex flex-col gap-5'>
                <Typography
                    component='span'
                    sx={{
                        fontSize: '1.68rem',
                        fontWeight: '700',
                        lineHeight: '2.461rem',
                        color: '#606060'
                    }}
                >
                    {text}
                </Typography>
                <Typography
                    component='span'
                    sx={{
                        fontSize: '2.72rem',
                        fontWeight: '700',
                        lineHeight: '3.984rem',
                        color: '#00C172'
                    }}
                >   
                    {renderTitle()}
                </Typography>
            </Box>


        </Box>
    )
}