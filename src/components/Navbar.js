import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {CartWidget} from "./CartWidget";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const categories = [
    { name: "Remeras", route: "categories/Remeras", id:1 },
    { name: "Buzo", route: "categories/Buzo", id:2 },
    { name: "Pantalon", route: "categories/Pantalon", id:3 },
  ];
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >           
          </IconButton>
          <NavLink to="/">         
          </NavLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecommerce-Davanzo
          </Typography>
          {categories.map((links)=>{
                        return(<Button key={links.id} color="inherit" component={NavLink} to={links.route}>{links.name}</Button>)
          })}
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}