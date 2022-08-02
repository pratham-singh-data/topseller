import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

export const BillItem = ({data, cart, setCart}) => {
    console.log(data)

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
    <Card sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: {md: "50%", xs: "100%"}, marginTop: "10px"}}>
        <Box sx={{display: "flex", flexDirection: "row"}}>
            <CardMedia component="img" image={data.images[0]} sx={{width: "151px"}} />

            <Box sx={{display: "flex", flexDirection: "column"}}>
                <CardContent>
                    <Typography variant="h6" sx={{fontWeight: "bolder"}}>{data.title}</Typography>
                    <Typography variant="h6">{data.category.name}</Typography>

                    <Box sx={{display: "flex", flexDirection: "row"}}>
                        <Typography sx={{fontWeight: "bolder", marginRight: "10px"}}>Number: </Typography>
                        <Typography>{data.count}</Typography>
                    </Box>

                    <Box sx={{display: "flex", flexDirection: "row"}}>
                        <Typography sx={{fontWeight: "bolder", marginRight: "10px"}}>Total: </Typography>
                        <Typography>{data.count * data.price}</Typography>
                    </Box>
                </CardContent>
            </Box>
        </Box>

        <Box>
            <CardContent sx={{display: "flex", flexDirection: "column"}}>
                <IconButton onClick={addItemHandler}>
                   <AddIcon/>
                </IconButton>

                <IconButton onClick={removeHandler}>
                   <DeleteIcon/>
                </IconButton>

                <IconButton onClick={removeItemHandler}>
                   <RemoveIcon/>
                </IconButton>
            </CardContent>
        </Box>
    </Card>
  )
}
