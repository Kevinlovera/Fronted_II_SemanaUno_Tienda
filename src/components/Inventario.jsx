import { createContext, useContext, useState } from 'react';

const InventarioContext = createContext();

const productosIniciales = [
  {
    id: 1,
    nombre: 'Leche entera',
    marca: 'Colun',
    categoria: 'Lácteos',
    precio: 1200,
    stock: 20,
    descripcion: 'Leche entera de larga vida.'
  },
  {
    id: 2,
    nombre: 'Manzana roja',
    marca: 'Sin marca',
    categoria: 'Frutas',
    precio: 1500,
    stock: 30,
    descripcion: 'Manzanas rojas frescas.'
  },
  {
    id: 3,
    nombre: 'Arroz grado 1',
    marca: 'Tucapel',
    categoria: 'Abarrotes',
    precio: 1800,
    stock: 15,
    descripcion: 'Arroz grado 1 de excelente calidad.'
  },
  {
    id: 4,
    nombre: 'Coca-Cola',
    marca: 'Coca-Cola',
    categoria: 'Bebidas',
    precio: 2000,
    stock: 25,
    descripcion: 'Bebida gaseosa original.'
  }
];

export function InventarioProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales);
  const [carrito, setCarrito] = useState([]);

  // Registrar un producto nuevo
  function agregarProducto(producto) {
    setProductos((actuales) => [
      ...actuales,
      { ...producto, id: Date.now() }
    ]);
  }

  // Agregar un producto al carrito y descontar stock
  function agregarAlCarrito(id) {
    const producto = productos.find((p) => p.id === id);

    if (!producto || producto.stock <= 0) {
      return false;
    }

    setProductos((actuales) =>
      actuales.map((p) =>
        p.id === id ? { ...p, stock: p.stock - 1 } : p
      )
    );

    setCarrito((actuales) => {
      const existe = actuales.find((p) => p.id === id);

      if (existe) {
        return actuales.map((p) =>
          p.id === id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }

      return [...actuales, { ...producto, cantidad: 1 }];
    });

    return true;
  }

  // Aumentar o disminuir unidades desde el carrito
  function actualizarCantidadCarrito(id, cambio) {
    const producto = productos.find((p) => p.id === id);
    const item = carrito.find((p) => p.id === id);

    if (!producto || !item) return;

    if (cambio > 0 && producto.stock < cambio) {
      return;
    }

    if (item.cantidad + cambio < 0) {
      return;
    }

    setCarrito((actuales) =>
      actuales
        .map((p) =>
          p.id === id
            ? { ...p, cantidad: p.cantidad + cambio }
            : p
        )
        .filter((p) => p.cantidad > 0)
    );

    setProductos((actuales) =>
      actuales.map((p) =>
        p.id === id
          ? { ...p, stock: p.stock - cambio }
          : p
      )
    );
  }

  // Quitar un producto y devolver sus unidades al inventario
  function quitarDelCarrito(id) {
    const item = carrito.find((p) => p.id === id);

    if (!item) return;

    setProductos((actuales) =>
      actuales.map((p) =>
        p.id === id
          ? { ...p, stock: p.stock + item.cantidad }
          : p
      )
    );

    setCarrito((actuales) =>
      actuales.filter((p) => p.id !== id)
    );
  }

  return (
    <InventarioContext.Provider
      value={{
        productos,
        carrito,
        agregarProducto,
        agregarAlCarrito,
        actualizarCantidadCarrito,
        quitarDelCarrito
      }}
    >
      {children}
    </InventarioContext.Provider>
  );
}

export function useInventario() {
  return useContext(InventarioContext);
}