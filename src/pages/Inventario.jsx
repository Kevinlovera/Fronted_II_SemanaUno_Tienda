import { useMemo, useState } from 'react';
import {
  Container, Typography, FormControl,
  InputLabel, Select, MenuItem, Grid
} from '@mui/material';

import { useInventario } from '../context/InventarioContext';
import ProductoCard from '../components/ProductoCard';

function Inventario() {
  const { productos } = useInventario();

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  const categorias = [
    'Todas',
    ...new Set(productos.map((p) => p.categoria))
  ];

  const productosFiltrados = useMemo(() => {
    if (categoriaSeleccionada === 'Todas') {
      return productos;
    }

    return productos.filter(
      (p) => p.categoria === categoriaSeleccionada
    );
  }, [productos, categoriaSeleccionada]);

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Inventario FreshMarket
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Consulta nuestros productos y sus existencias disponibles.
      </Typography>

      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel>Filtrar por categoría</InputLabel>

        <Select
          value={categoriaSeleccionada}
          label="Filtrar por categoría"
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        >
          {categorias.map((categoria) => (
            <MenuItem key={categoria} value={categoria}>
              {categoria}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        {productosFiltrados.map((producto) => (
          <Grid key={producto.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductoCard producto={producto} />
          </Grid>
        ))}
      </Grid>

      {productosFiltrados.length === 0 && (
        <Typography>No hay productos en esta categoría.</Typography>
      )}

      <Typography sx={{ mt: 3 }}>
        Productos encontrados: {productosFiltrados.length}
      </Typography>
    </Container>
  );
}

export default Inventario;