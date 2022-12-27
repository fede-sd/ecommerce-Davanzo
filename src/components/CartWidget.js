import * as React from 'react';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="primary">
      <AddShoppingCartIcon color="action" />
    </Badge>
  );
}