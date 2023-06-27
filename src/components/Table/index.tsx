import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IPlan } from "../../types/IPlan";
import { ColorItem } from "../ColorItem";



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
    plans: IPlan[],
    handleOnDelete: (id: number) => void;
    handleOnEdit: (id: number) => void;
}


export const TableSystem = ({ plans, handleOnDelete, handleOnEdit}: Data) => {
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
                            <TableCell sx={textRowStyle}>
                                <ColorItem
                                    color={plan.buttonColor}
                                >
                                    {plan.buttonColor}
                                </ColorItem>
                            </TableCell>
                            <TableCell sx={textRowStyle}>
                                <ColorItem
                                    color={plan.textButtonColor}
                                >
                                    {plan.textButtonColor}
                                </ColorItem>
                            </TableCell>
                            <TableCell sx={textRowStyle}>
                                <ColorItem
                                    color={plan.iconButtonColor}
                                >
                                    {plan.iconButtonColor}
                                </ColorItem>
                            </TableCell>
                            <TableCell sx={textRowStyle}>
                                <ModeEditIcon
                                    sx={{
                                        marginRight: '1rem',
                                        fontSize: '2rem',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleOnEdit(plan.id as number)}
                                />
                                <DeleteIcon
                                    sx={{
                                        marginRight: '1rem',
                                        fontSize: '2rem',
                                        cursor: 'pointer',

                                    }}

                                    onClick={() => handleOnDelete(plan.id as number)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    )
}