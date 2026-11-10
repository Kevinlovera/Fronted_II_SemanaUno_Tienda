import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Button,
  Stack,
  Chip
} from '@mui/material';

import { useInventario } from '../context/InventarioContext';

function DetalleProducto() {
  const { id } = useParams();

  const { productos, agregarAlCarrito } = useInventario();

  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return (
      <Container sx={{ mt: 5 }}>
        <Typography variant="h5">Producto no encontrado.</Typography>
        <Button component={Link} to="/inventario">
          Volver al inventario
        </Button>
      </Container>
    );
  }

  function comprarProducto() {
    const agregado = agregarAlCarrito(producto.id);

    if (!agregado) {
      alert('No hay stock disponible.');
      return;
    }

    alert('Producto agregado al carrito.');
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>

      <Paper elevation={3} sx={{ p: 4 }}>

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {producto.nombre}
        </Typography>

        <Stack spacing={2}>
          <Typography>Marca: {producto.marca}</Typography>
          <Typography>Categoría: {producto.categoria}</Typography>
          <Typography>Descripción: {producto.descripcion}</Typography>

          <Typography variant="h5" color="success.main">
            ${Number(producto.precio).toLocaleString('es-CL')}
          </Typography>

          <Chip
            label={`Existencias disponibles: ${producto.stock}`}
            color={producto.stock > 0 ? 'success' : 'error'}
          />

          <Button
            variant="contained"
            color="success"
            disabled={producto.stock <= 0}
            onClick={comprarProducto}
          >
            Agregar al carrito
          </Button>

          <Button component={Link} to="/inventario">
            Volver al inventario
          </Button>
        </Stack>

      </Paper>

    </Container>
  );
}

export default DetalleProducto;