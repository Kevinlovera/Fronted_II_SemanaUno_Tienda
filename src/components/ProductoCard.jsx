import { Card, CardContent, CardActions, Typography, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductoCard({ producto }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {producto.nombre}
        </Typography>

        <Typography color="text.secondary">
          Marca: {producto.marca}
        </Typography>

        <Typography>
          Categoría: {producto.categoria}
        </Typography>

        <Typography fontWeight="bold" sx={{ mt: 1 }}>
          ${Number(producto.precio).toLocaleString('es-CL')}
        </Typography>

        <Chip
          label={`Stock: ${producto.stock}`}
          color={producto.stock > 0 ? 'success' : 'error'}
          sx={{ mt: 1 }}
        />
      </CardContent>

      <CardActions>
        <Button
          component={Link}
          to={`/producto/${producto.id}`}
          variant="contained"
          color="success"
          fullWidth
        >
          Ver detalle
        </Button>
      </CardActions>

    </Card>
  );
}

export default ProductoCard;