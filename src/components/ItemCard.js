import { Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NoImageFound from "../assets/no_image_found.jpg";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ItemCard = ({data, cart, setCart}) => {
  const buyHandler = () => {
    setCart({
      ...cart,
      [data.id]: {
        ...data,
        count: 1
      }
    })
  }

  const removeHandler = () => {
    setCart({
      ...cart,
      [data.id]: null
    })
  }

  const addItemHandler = () => {
    setCart({
      ...cart,
      [data.id]: {
        ...cart[data.id],
        count: cart[data.id].count + 1
      }
    })
  }

  const removeItemHandler = () => {
    if(cart[data.id].count === 1){
      removeHandler();
      return;
    }

    setCart({
      ...cart,
      [data.id]: {
        ...cart[data.id],
        count: cart[data.id].count - 1
      }
    })
  }

  return (
    <Card sx={{width: {sm: "30%", xs: "100%"}, marginLeft: {md: "20px", xs: "0px"}, marginBottom: "20px"}}>
        <CardHeader title={data.title} subheader={data.category.name}/>
        <CardMedia component="img" image={data.images[0] ? data.images[0] : NoImageFound} height="200px"/>
        <CardContent>
            <Typography>{data.description}</Typography>

            <Box sx={{display: "flex", flexDirection: "row"}}>
                <AttachMoneyIcon/>
                <Typography sx={{my: "2px"}}>{data.price}</Typography>
            </Box>

            {!cart[data.id] && <Button sx={{width: "100%"}} variant="contained" color="success" onClick={buyHandler}>Buy</Button>}
            {cart[data.id] && 
            <Box>
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                  <IconButton sx={{"&:hover": {color: "#d32f2f"}}} onClick={removeItemHandler}>
                    <RemoveIcon/>
                  </IconButton>

                  <Typography>{cart[data.id].count}</Typography>

                  <IconButton sx={{"&:hover": {color: "#2e7d32"}}} onClick={addItemHandler}>
                    <AddIcon />
                  </IconButton>
                </Box>

                <Button sx={{width: "100%"}} variant="contained" color="error" onClick={removeHandler}>Remove</Button>
            </Box>}
        </CardContent>
    </Card>
  )
}
