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
  const [tipo, setTipo] = useState('');

  function manejarEnvio(evento) {
    evento.preventDefault();

    if (!nombre.trim() || !marca.trim() || !tipo) {
      alert('Completa todos los campos');
      return;
    }

    agregarProducto({
      nombre,
      marca,
      tipo
    });

    alert('¡Producto agregado correctamente!');

    setNombre('');
    setMarca('');
    setTipo('');
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>

      <Paper elevation={3} sx={{ p: 4 }}>

        <Typography variant="h4" gutterBottom>
          Agregar producto
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Registra un nuevo producto en nuestro inventario.
        </Typography>

        <form onSubmit={manejarEnvio}>

          <Stack spacing={3}>

            <TextField
              label="Nombre del producto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              fullWidth
            />

            <TextField
              label="Marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              fullWidth
            />

            <TextField
              select
              label="Tipo de producto"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              fullWidth
            >
              <MenuItem value="Fruta">Fruta</MenuItem>
              <MenuItem value="Verdura">Verdura</MenuItem>
              <MenuItem value="Lácteo">Lácteo</MenuItem>
              <MenuItem value="Bebida">Bebida</MenuItem>
              <MenuItem value="Abarrote">Abarrote</MenuItem>
              <MenuItem value="Otro">Otro</MenuItem>
            </TextField>

            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
            >
              Guardar producto
            </Button>

          </Stack>

        </form>

      </Paper>

    </Container>
  );
}

export default AgregarProducto;