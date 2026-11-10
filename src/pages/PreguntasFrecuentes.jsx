import { Container, Typography, Paper, Stack } from '@mui/material';

function PreguntasFrecuentes() {
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Preguntas frecuentes
      </Typography>

      <Stack spacing={2}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            ¿Cómo puedo consultar los productos?
          </Typography>
          <Typography>
            Ingresa a la sección Inventario para visualizar los productos
            disponibles y filtrarlos por categoría.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            ¿Cómo agrego productos al carrito?
          </Typography>
          <Typography>
            Selecciona un producto, ingresa a su detalle y presiona
            el botón Agregar al carrito.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            ¿El inventario se actualiza?
          </Typography>
          <Typography>
            Sí. Cuando agregas productos al carrito, las unidades
            disponibles disminuyen automáticamente.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold">
            ¿Puedo modificar las cantidades?
          </Typography>
          <Typography>
            Sí. Desde el carrito puedes aumentar o disminuir las
            cantidades y el inventario se actualiza.
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
}

export default PreguntasFrecuentes;