import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IPlan } from "../../types/IPlan";
import { ColorItem } from "../ColorItem";

function createData(
    imagemCard: string,
    tituloCard: string,
    corTitulo: string,
    valorPlano: string,
    corBotao: string,
    corTextoBotao: string,
    corIconeBotao: string,
) {
    return { imagemCard, tituloCard, corTitulo, valorPlano, corBotao, corTextoBotao, corIconeBotao };
}

const rows = [
    createData('', 'Quatro dias de água tratada para uma criança.', '#FFFFFF', 'R$50,00', '#F8475E', '#FFFFFF', '#FFFFFF'),
    createData('', 'Quatro dias de água tratada para uma criança.', '#FFFFFF', 'R$50,00', '#F8475E', '#FFFFFF', '#FFFFFF'),
    createData('', 'Quatro dias de água tratada para uma criança.', '#FFFFFF', 'R$50,00', '#F8475E', '#FFFFFF', '#FFFFFF'),
];

const titleColumnStyle = {
    width: '1.6rem',
    borderColor: '#00C172',
    borderRight: '1px solid #00C172',
    fontWeight: '500',
    fontSize: '1.22rem',
    lineHeight: '1.44rem',
    color: '#545454',
    '&:nth-last-child(1), &:nth-last-child(2)': { borderRight: 0, },
}

const textRowStyle = {
    borderColor: '#00C172',
    fontWeight: '400',
    fontSize: '1.28rem',
    lineHeight: '1.875rem',
    color: '#545454',
    textAlign: 'left',
    align: 'center',

    '&:last-child': { textAlign: 'center' },

}

interface Data {
    plans: IPlan[]
}


export const TableSystem = ({ plans }: Data) => {
    return (
        <TableContainer>
            <Table>
                <TableHead sx={{

                }}>
                    <TableRow>
                        <TableCell
                            sx={titleColumnStyle}
                        >
                            Imagem do card
                        </TableCell>
                        <TableCell sx={titleColumnStyle} >Título do card</TableCell>

                        <TableCell sx={titleColumnStyle} >Cor do título</TableCell>
                        <TableCell sx={titleColumnStyle} >Valor do plano</TableCell>
                        <TableCell sx={titleColumnStyle} >Cor do botão</TableCell>
                        <TableCell sx={titleColumnStyle} >Cor do texto do botão</TableCell>
                        <TableCell sx={titleColumnStyle} >Cor do ícone do botão</TableCell>
                        <TableCell sx={titleColumnStyle} ></TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {plans.map((plan) => (
                        <TableRow
                            key={plan.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderColor: '#00C172' }}
                        >
                            <TableCell sx={textRowStyle}>
                                <img className="w-[12rem] height=[10rem]" src={plan.cardImage} alt="" />
                            </TableCell>
                            <TableCell sx={textRowStyle}>{plan.titleCard}</TableCell>
                            <TableCell sx={textRowStyle}>
                                <ColorItem
                                    color={plan.titleColor}
                                >
                                    {plan.titleColor.toUpperCase()}
                                </ColorItem>
                            </TableCell>
                            <TableCell sx={textRowStyle}>{plan.planValue}</TableCell>
                            <TableCell sx={textRowStyle}>{plan.buttonColor}</TableCell>
                            <TableCell sx={textRowStyle}>{plan.textButtonColor}</TableCell>
                            <TableCell sx={textRowStyle}>{plan.iconButtonColor}</TableCell>
                            <TableCell sx={textRowStyle}>
                                <ModeEditIcon
                                    sx={{
                                        marginRight: '1rem',
                                        fontSize: '2rem',
                                    }}
                                />
                                <DeleteIcon
                                    sx={{
                                        marginRight: '1rem',
                                        fontSize: '2rem',
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    )
}