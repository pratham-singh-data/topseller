import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const Header = ({ cartItems }) => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#121f3d",
        }}
      >
        <NavLink to="/topseller/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{ color: "#98ca3f", fontWeight: "bolder" }}
            variant="h5"
          >
            TopSeller
          </Typography>
        </NavLink>

        <NavLink to="/topseller/cart" style={{ textDecoration: "none" }}>
          <Button
            variant="contined"
            sx={{
              backgroundColor: "#98ca3f",
              color: "#121f3d",
              "&:hover": {
                backgroundColor: "#121f3d",
                color: "#98ca3f",
                border: "1px solid #98ca3f",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            Cart
            {cartItems ? ` ${cartItems}` : ""}
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
