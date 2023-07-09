import React from 'react'
import { Box, Typography } from '@mui/material';

import { BarChart, Bar, XAxis, YAxis, ReferenceLine } from "recharts";


interface HorizontalBarChartProps {
    chartTitle: string;
    totalPlans?: number;
    totalUnits?: number;
    ticks: number[];
    legends: string[];
}


export const HorizontalBarChart = ({ chartTitle, totalPlans, totalUnits, ticks, legends }: HorizontalBarChartProps) => {


    const data = [
        {
            line1: totalUnits
        },
        {
            line2: totalPlans
        }
    ];

    console.log(ticks[0])
    console.log(ticks[ticks.length - 1])

    return (
        <Box
            className='flex flex-col gap-4 justify-center items-center'
            sx={{
                width: '48%',
                height: '25.84rem',
                border: '5px solid #31cb8b7c',
                boxShadow: '0px 4px 4px 0px #31CB8A40',
                borderRadius: '10px',
                padding: '3.5rem'
            }}
        >
            <Box
                className='w-full flex justify-between'
            >
                <Typography
                    component='span'

                    sx={{
                        fontSize: '2.08rem',
                        fontWeight: 700,
                        color: '#606060',
                        lineHeight: '2.4376rem'

                    }}
                >
                    {chartTitle}
                </Typography>
                <Box className='flex justify-center items-center gap-[2.88rem]'>
                    <Box className='flex justify-center items-center gap-2'>
                        <Box className='w-6 h-6 rounded-sm bg-[#F5DF4D] '></Box>
                        <Typography
                            component='span'
                            sx={{
                                fontSize: '0.96rem',
                                fontWeight: 400,
                                color: 'black',
                                lineHeight: '1.4376rem'
                            }}
                        >
                            {legends[0]}
                        </Typography>
                    </Box>
                    <Box className='flex justify-center items-center gap-2'>
                        <Box className='w-6 h-6 rounded-sm bg-[#FF6E80]'></Box>
                        <Typography
                            component='span'
                            sx={{
                                fontSize: '0.96rem',
                                fontWeight: 400,
                                color: 'black',
                                lineHeight: '1.4376rem'
                            }}
                        >
                            {legends[1]}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <BarChart width={500} height={150} data={data} layout="vertical">
                <XAxis
                    type="number"
                    domain={[ticks[0], ticks[ticks.length - 1]]}
                    axisLine={false}
                    tickLine={false}
                    tickCount={ticks.length}
                />

                <YAxis type="category" reversed hide />

                {ticks.map((tick) => (
                    <ReferenceLine key={tick} x={tick} strokeWidth={2} stroke="#B9E8CC" />
                ))}

                <Bar dataKey="line1" fill="#FF6E80" barSize={40} />
                <Bar dataKey="line2" fill="#F5DF4D" barSize={40} />
            </BarChart>
        </Box>



    )
}