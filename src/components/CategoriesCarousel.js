import { Box } from '@mui/material'
import React from 'react'
import { CategoriesCard } from './CategoriesCard'

export const CategoriesCarousel = ({categories, setFilter}) => {
  return (
    <Box sx={{overflow: "scroll", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "max-content"}}>
            {categories.map(data => <CategoriesCard key={data.id} setFilter={setFilter} data={data}/>)}
        </Box>
    </Box>
  )
}
