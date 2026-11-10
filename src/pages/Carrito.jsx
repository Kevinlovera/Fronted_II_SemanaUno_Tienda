import { Link } from 'react-router-dom';

import {
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Stack
} from '@mui/material';

import { useInventario } from '../context/InventarioContext';

function Carrito() {
  const {
    carrito,
    actualizarCantidadCarrito,
    quitarDelCarrito
  } = useInventario();

  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0
  );

  return (
    <Container sx={{ mt: 5, mb: 5 }}>

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Mi carrito de compras
      </Typography>

      {carrito.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography>Tu carrito está vacío.</Typography>

          <Button
            component={Link}
            to="/inventario"
            variant="contained"
            color="success"
            sx={{ mt: 2 }}
          >
            Ir al inventario
          </Button>
        </Paper>
      ) : (

        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Subtotal</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {carrito.map((producto) => (
                <TableRow key={producto.id}>
                  <TableCell>{producto.nombre}</TableCell>

                  <TableCell>
                    ${Number(producto.precio).toLocaleString('es-CL')}
                  </TableCell>

                  <TableCell>{producto.cantidad}</TableCell>

                  <TableCell>
                    ${(producto.precio * producto.cantidad).toLocaleString('es-CL')}
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        onClick={() => actualizarCantidadCarrito(producto.id, 1)}
                      >
                        +
                      </Button>

                      <Button
                        variant="outlined"
                        onClick={() => actualizarCantidadCarrito(producto.id, -1)}
                      >
                        -
                      </Button>

                      <Button
                        color="error"
                        onClick={() => quitarDelCarrito(producto.id)}
                      >
                        Quitar
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Typography variant="h5" fontWeight="bold" sx={{ mt: 3 }}>
            Total: ${total.toLocaleString('es-CL')}
          </Typography>
        </>
      )}

    </Container>
  );
}

export default Carrito;