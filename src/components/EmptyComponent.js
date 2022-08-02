import { Box, Typography } from '@mui/material'
import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const EmptyComponent = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", my: "10px"}}>
        <CloseRoundedIcon sx={{color: "#ff0000"}} />
        <Typography sx={{color: "#ffffff"}}>No data to display</Typography>
    </Box>
  )
}
