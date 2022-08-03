import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import NoImageFound from "../assets/no_image_found.jpg";

export const CategoriesCard = ({ data, setFilter, setIsLoading }) => {
  // if a filter is selected then the loading state is set to true and filter is set in state
  const categoryClickHandler = () => {
    setIsLoading(true);
    setFilter(data.id);
  };

  return (
    <Card
      sx={{ width: "150px", margin: "10px", "&:hover": { cursor: "pointer" } }}
      onClick={categoryClickHandler}
    >
      <CardMedia
        component="img"
        image={data.image ? data.image : NoImageFound}
        height="170px"
        alt={data.name}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography variant="h6">{data.name}</Typography>
      </CardContent>
    </Card>
  );
};
