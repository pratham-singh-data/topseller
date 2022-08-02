import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import React from 'react'
import { Navigate, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static">
        <Toolbar sx={{display: "flex", justifyContent: "space-between", backgroundColor: "#121f3d"}}>
            <NavLink to="/">
                <Typography sx={{color: "#98ca3f", fontWeight: "bolder"}} variant="h5">TopSeller</Typography>
            </NavLink>

            <Box>
                <IconButton aria-label="filter" sx={{backgroundColor: "#98ca3f", color: "#121f3d", mx: "10px", "&:hover": {backgroundColor: "#121f3d", color: "#98ca3f", border: "1px solid #98ca3f"}}}>
                    <FilterAltOutlinedIcon/>
                </IconButton>
                
                <NavLink to="/cart">
                    <Button variant="contined" sx={{backgroundColor: "#98ca3f", color: "#121f3d", "&:hover": {backgroundColor: "#121f3d", color: "#98ca3f", border: "1px solid #98ca3f"}}}>Cart</Button>
                </NavLink>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
