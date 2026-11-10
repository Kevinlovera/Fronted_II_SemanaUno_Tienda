import { Link } from 'react-router-dom';

import {
  Container,
  Typography,
  Button,
  Paper,
  Grid
} from '@mui/material';

function Home() {

  return (
    <Container sx={{ mt: 6, mb: 6 }}>

      <Paper
        elevation={3}
        sx={{
          p: 5,
          textAlign: 'center',
          backgroundColor: '#e8f5e9'
        }}
      >

        <Typography variant="h3" fontWeight="bold" color="#18794e">
          Bienvenido a FreshMarket
        </Typography>

        <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
          Tu supermercado de confianza. Calidad, variedad y buenos precios.
        </Typography>

        <Grid container spacing={2} justifyContent="center">

          <Grid item>
            <Button
              component={Link}
              to="/inventario"
              variant="contained"
              color="success"
            >
              Ver inventario
            </Button>
          </Grid>

          <Grid item>
            <Button
              component={Link}
              to="/agregar-producto"
              variant="outlined"
              color="success"
            >
              Agregar productos
            </Button>
          </Grid>

          <Grid item>
            <Button
              component={Link}
              to="/carrito"
              variant="contained"
              color="primary"
            >
              Mi carrito
            </Button>
          </Grid>

        </Grid>

      </Paper>

    </Container>
  );
}

export default Home;