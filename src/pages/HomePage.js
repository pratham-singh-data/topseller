import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { CategoriesCarousel } from '../components/CategoriesCarousel';
import { ItemList } from '../components/ItemList';
import { getCategories, getData } from '../utils/helpers';

export const HomePage = () => {
  const [fullData, setFullData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData({setFullData: setFullData});
    getCategories({setCategories: setCategories});
  }, [])

  useEffect(() => {
    if(! filter){
      setData(fullData);
      return;
    }

    const filteredData = fullData.filter(data => data.category.id === filter);
    setData(filteredData);
  }, [fullData, filter]);

  return (
    <main>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10px", px: "20px"}}>
        <Typography variant="h5" sx={{fontWeight: "bolder", color: "#ffffff"}}>Categories:</Typography>

        <Button sx={{backgroundColor: "#98ca3f", color: "#121f3d", "&:hover": {backgroundColor: "#121f3d", color: "#98ca3f", border: "1px solid #98ca3f"}}}>
          Reset
        </Button>
      </Box>
      <CategoriesCarousel categories={categories}/>

      <Typography variant="h5" sx={{my: "10px", mx: "20px", fontWeight: "bolder", color: "#ffffff"}}>Results:</Typography>
      <ItemList data={data}/>
    </main>
  )
}
