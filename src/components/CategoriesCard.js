import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const CategoriesCard = ({data, setFilter}) => {
    const categoryClickHandler = () => {
        setFilter(data.id);
    }

  return (
    <Card sx={{width: "150px", margin: "10px", "&:hover":{cursor: "pointer"}}} onClick={categoryClickHandler}>
        <CardMedia component="img" image={data.image} height="170px" alt={data.name}/>
        <CardContent sx={{display: "flex", justifyContent: "space-around"}}>
            <Typography variant="h6" >{data.name}</Typography>
        </CardContent>
    </Card>
  )
}
