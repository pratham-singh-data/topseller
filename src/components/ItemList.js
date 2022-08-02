import { Box } from '@mui/system'
import React from 'react'
import { ItemCard } from './ItemCard'

export const ItemList = ({data}) => {
  return (
    <Box sx={{px: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
        {data.map(element => <ItemCard key={element.id} data={element} />)}
    </Box>
  )
}
