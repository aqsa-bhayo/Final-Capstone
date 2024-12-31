import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../redux/ProductsSlice';
import { Drawer, Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartList = ({ open, toggleDrawer }) => {
  const cartItems = useSelector((state) => state.product.items); // Access cart items from Redux
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      <Box sx={{ width: 350, padding: 2 }}>
        <Typography variant="h6">Cart Items</Typography>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={`${item.name} (x${item.quantity})`}
                secondary={`Rs. ${item.price * item.quantity}`}
              />
              <IconButton onClick={() => dispatch(increaseQuantity(item))}>
                <AddIcon />
              </IconButton>
              <IconButton onClick={() => dispatch(decreaseQuantity(item))}>
                <RemoveIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default CartList;
