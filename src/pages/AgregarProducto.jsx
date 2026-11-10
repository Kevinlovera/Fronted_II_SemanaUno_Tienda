import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Stack
} from '@mui/material';

import { useInventario } from '../context/InventarioContext';

function AgregarProducto() {

  const { agregarProducto } = useInventario();

  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [descripcion, setDescripcion] = useState('');

  function manejarEnvio(evento) {
    evento.preventDefault();

    if (
      !nombre.trim() ||
      !marca.trim() ||
      !categoria ||
      precio === '' ||
      stock === '' ||
      Number(precio) <= 0 ||
      Number(stock) < 0
    ) {
      alert('Completa correctamente todos los campos.');
      return;
    }

    agregarProducto({
      nombre,
      marca,
      categoria,
      precio: Number(precio),
      stock: Number(stock),
      descripcion
    });

    alert('¡Producto registrado correctamente!');

    setNombre('');
    setMarca('');
    setCategoria('');
    setPrecio('');
    setStock('');
    setDescripcion('');
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>

      <Paper elevation={3} sx={{ p: 4 }}>

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Agregar producto
        </Typography>

        <Typography sx={{ mb: 3 }}>
          Registra nuevos artículos en FreshMarket.
        </Typography>

        <form onSubmit={manejarEnvio}>

          <Stack spacing={2}>

            <TextField
              label="Nombre del producto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              fullWidth
            />

            <TextField
              label="Marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              required
              fullWidth
            />

            <TextField
              select
              label="Categoría"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
              fullWidth
            >
              {['Frutas', 'Verduras', 'Lácteos', 'Bebidas', 'Abarrotes', 'Otros'].map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Precio"
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
              inputProps={{ min: 1 }}
              fullWidth
            />

            <TextField
              label="Cantidad disponible"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              inputProps={{ min: 0 }}
              fullWidth
            />

            <TextField
              label="Descripción"
              multiline
              rows={3}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
            >
              Registrar producto
            </Button>

          </Stack>

        </form>

      </Paper>

    </Container>
  );
}

export default AgregarProducto;