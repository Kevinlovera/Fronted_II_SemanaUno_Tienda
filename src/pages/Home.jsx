function Home() {
return ( <main className="contenido"> <section className="bienvenida"> <h2>Bienvenido a FreshMarket</h2> <p>Gestiona y consulta nuestros productos en un solo lugar.</p> </section>


  <section className="inventario">
    <h2>Productos destacados</h2>

    <div className="productos">
      <article className="producto">
        <span>🍎</span>
        <h3>Frutas</h3>
        <p>Productos frescos y naturales.</p>
      </article>

      <article className="producto">
        <span>🥛</span>
        <h3>Lácteos</h3>
        <p>Productos esenciales para tu hogar.</p>
      </article>

      <article className="producto">
        <span>🥦</span>
        <h3>Verduras</h3>
        <p>Calidad y frescura cada día.</p>
      </article>
    </div>
  </section>
</main>


);
}

export default Home;
