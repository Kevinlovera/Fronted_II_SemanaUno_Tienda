import { createContext, useContext, useState } from 'react';

const InventarioContext = createContext();

const productosIniciales = [
  {
    id: 1,
    nombre: 'Leche entera',
    marca: 'Colun',
    tipo: 'Lácteo'
  },
  {
    id: 2,
    nombre: 'Manzana roja',
    marca: 'Sin marca',
    tipo: 'Fruta'
  },
  {
    id: 3,
    nombre: 'Arroz',
    marca: 'Tucapel',
    tipo: 'Abarrote'
  }
];

export function InventarioProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales);

  function agregarProducto(producto) {
    setProductos((actuales) => [
      ...actuales,
      {
        ...producto,
        id: Date.now()
      }
    ]);
  }

  return (
    <InventarioContext.Provider value={{ productos, agregarProducto }}>
      {children}
    </InventarioContext.Provider>
  );
}

export function useInventario() {
  return useContext(InventarioContext);
}