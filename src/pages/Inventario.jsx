import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import { useInventario } from '../context/InventarioContext';

function Inventario() {

  const { productos } = useInventario();

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>

      <Typography variant="h4" gutterBottom>
        Inventario de productos
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Aquí puedes consultar todos los productos registrados.
      </Typography>

      <TableContainer component={Paper} elevation={3}>

        <Table>

          <TableHead>
            <TableRow sx={{ backgroundColor: '#e8f5e9' }}>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Marca</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {productos.map((producto) => (
              <TableRow key={producto.id}>

                <TableCell>{producto.id}</TableCell>
                <TableCell>{producto.nombre}</TableCell>
                <TableCell>{producto.marca}</TableCell>
                <TableCell>{producto.tipo}</TableCell>

              </TableRow>
            ))}

            {productos.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No hay productos registrados.
                </TableCell>
              </TableRow>
            )}

          </TableBody>

        </Table>

      </TableContainer>

      <Typography sx={{ mt: 2 }}>
        Total de productos: {productos.length}
      </Typography>

    </Container>
  );
}

export default Inventario;