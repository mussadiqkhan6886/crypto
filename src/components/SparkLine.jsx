import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const SparkLine = ({data, change}) => {
  return (
   <Stack direction="row" sx={{ width: '100%' }}>
      <Box >
        <SparkLineChart color={change >= 0 ? "green" : "red"} data={data} height={100} />
      </Box>
    </Stack>
  )
}

export default SparkLine
