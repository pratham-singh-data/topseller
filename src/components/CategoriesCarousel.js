import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { CategoriesCard } from "./CategoriesCard";
import { EmptyComponent } from "./EmptyComponent";

export const CategoriesCarousel = ({
  categories,
  setFilter,
  isLoading,
  setIsLoading,
}) => {
  return (
    <Box
      sx={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {isLoading && <CircularProgress color="success" />}

      {/* categories could be undefined or empty */}
      {!isLoading && (!categories || categories.length === 0) && (
        <EmptyComponent />
      )}

      {!isLoading && categories && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "max-content",
          }}
        >
          {categories.map((data) => (
            <CategoriesCard
              key={data.id}
              setIsLoading={setIsLoading}
              setFilter={setFilter}
              data={data}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
