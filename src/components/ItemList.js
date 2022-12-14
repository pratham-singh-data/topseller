import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { EmptyComponent } from "./EmptyComponent";
import { ItemCard } from "./ItemCard";

export const ItemList = ({ data, isLoading, cart, setCart }) => {
  return (
    <Box
      sx={{
        px: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {isLoading && <CircularProgress color="success" />}
      {/* data could be undefined or empty */}
      {!isLoading && (!data || data.length === 0) && <EmptyComponent />}
      {!isLoading &&
        data &&
        data.map((element) => (
          <ItemCard
            key={element.id}
            data={element}
            cart={cart}
            setCart={setCart}
          />
        ))}
    </Box>
  );
};
