import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { ColorItem } from "../ColorItem";
import { IUnit } from "../../types/IUnit";



const titleColumnStyle = {
    width: '20rem',
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
    units: IUnit[],
    handleOnDelete: (id: number) => void;
    handleOnEdit: (id: number) => void;

}


export const TableUnits = ({ units, handleOnDelete, handleOnEdit }: Data) => {
    return (
        <TableContainer>
            <Table>
                <TableHead sx={{

                }}>
                    <TableRow>
                        <TableCell
                            sx={titleColumnStyle}
                        >Nome da unidade</TableCell>
                        <TableCell sx={titleColumnStyle} >Endereço</TableCell>
                        <TableCell sx={titleColumnStyle} >Cidade - Estado</TableCell>
                        <TableCell sx={titleColumnStyle} >Responsável</TableCell>
                        <TableCell sx={titleColumnStyle} >Email do Responsável</TableCell>
                        <TableCell sx={titleColumnStyle} >Cor dos títulos</TableCell>
                        <TableCell sx={titleColumnStyle} >Cor do corpo do texto</TableCell>
                        <TableCell sx={titleColumnStyle} ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {units.map((unit) => (
                        <TableRow
                            key={unit.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderColor: '#00C172' }}
                        >
                            <TableCell sx={textRowStyle}>
                                {unit.name}
                            </TableCell>
                            <TableCell sx={textRowStyle}>{unit.address}</TableCell>
                            <TableCell sx={textRowStyle}>
                                {unit.cityState}
                            </TableCell>
                            <TableCell sx={textRowStyle}>{unit.owner}</TableCell>
                            <TableCell sx={textRowStyle}>

                                {unit.ownerEmail}
                            </TableCell>
                            <TableCell sx={textRowStyle}>
                                <ColorItem
                                    color={unit.titleColor}
                                >
                                    {unit.titleColor}
                                </ColorItem>
                            </TableCell>
                            <TableCell sx={textRowStyle}>
                                <ColorItem
                                    color={unit.bodyTextColor}
                                >
                                    {unit.bodyTextColor}
                                </ColorItem>
                            </TableCell>
                            <TableCell sx={textRowStyle}>
                                <ModeEditIcon
                                    sx={{
                                        marginRight: '1rem',
                                        fontSize: '2rem',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleOnEdit(unit.id as number)}
                                />
                                <DeleteIcon
                                    sx={{
                                        marginRight: '1rem',
                                        fontSize: '2rem',
                                        cursor: 'pointer',

                                    }}

                                    onClick={() => handleOnDelete(unit.id as number)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    )
}