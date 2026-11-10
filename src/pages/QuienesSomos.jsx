import { Container, Typography, Paper } from '@mui/material';

function QuienesSomos() {
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          ¿Quiénes somos?
        </Typography>

        <Typography paragraph>
          Somos FreshMarket, un supermercado comprometido con ofrecer
          productos de calidad y una experiencia de compra sencilla.
        </Typography>

        <Typography paragraph>
          Nuestra plataforma permite consultar productos, revisar su
          disponibilidad y agregarlos a un carrito de compras.
        </Typography>

        <Typography>
          Nuestro objetivo es facilitar la administración de productos
          y mejorar la experiencia de nuestros clientes.
        </Typography>
      </Paper>
    </Container>
  );
}

export default QuienesSomos;