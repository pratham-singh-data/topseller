import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const ItemCard = ({data}) => {
  return (
    <Card sx={{width: {sm: "30%", xs: "100%"}, marginLeft: {md: "20px", xs: "0px"}, marginBottom: "20px"}}>
        <CardHeader title={data.title} subheader={data.category.name}/>
        <CardMedia component="img" image={data.images[0]} height="200px"/>
        <CardContent>
            <Typography>{data.description}</Typography>

            <Box sx={{display: "flex", flexDirection: "row"}}>
                <AttachMoneyIcon/>
                <Typography sx={{my: "2px"}}>{data.price}</Typography>
            </Box>

            <Button sx={{width: "100%"}} variant="contained" color="success">Buy</Button>
        </CardContent>
    </Card>
  )
}
