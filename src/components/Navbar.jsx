import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#18794e' }}>
      <Toolbar sx={{ flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          🛒 FreshMarket
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/inventario">Inventario</Button>
          <Button color="inherit" component={Link} to="/agregar-producto">Agregar</Button>
          <Button color="inherit" component={Link} to="/carrito">Carrito</Button>
          <Button color="inherit" component={Link} to="/quienes-somos">Nosotros</Button>
          <Button color="inherit" component={Link} to="/preguntas-frecuentes">FAQ</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;