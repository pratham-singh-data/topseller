import { Box, Button } from "@mui/material";
import React from "react";
import { BillItem } from "../components/BillItem";
import { EmptyComponent } from "../components/EmptyComponent";

export const Cart = ({ cart, setCart, cartItems }) => {
  return (
    <Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {cartItems === 0 && <EmptyComponent />}
        {Object.values(cart).map((item) => {
          if (item === null) return <></>;

          return (
            <BillItem key={item.id} data={item} cart={cart} setCart={setCart} />
          );
        })}
        {cartItems > 0 && (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              sx={{
                backgroundColor: "#98ca3f",
                color: "#121f3d",
                "&:hover": {
                  backgroundColor: "#121f3d",
                  color: "#98ca3f",
                  border: "1px solid #98ca3f",
                },
                my: "10px",
                mx: "20px",
              }}
              onClick={() => {
                alert("This is a demo site and no purchase could be made here");
              }}
            >
              Buy
            </Button>

            <Button
              sx={{
                backgroundColor: "#d32f2f",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#121f3d",
                  color: "#d32f2f",
                  border: "1px solid #d32f2f",
                },
                my: "10px",
                mx: "20px",
              }}
              onClick={() => {
                setCart({});
              }}
            >
              Clear Cart
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
