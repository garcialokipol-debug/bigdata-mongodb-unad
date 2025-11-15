// Inserción individual
db.productos.insertOne({
  nombre: "Mouse Logitech M100",
  categoria: "Accesorios",
  marca: "Logitech",
  precio: 70,
  stock: 160,
  rating: 4.0,
  fecha_ingreso: "2024-09-30",
  caracteristicas: { tipo: "cableado", dpi: 800 },
  tags: ["mouse","logitech","oficina"]
});

// Selección básica
db.productos.find({ categoria: "Accesorios" });

// Actualización: cambiar precio
db.productos.updateOne(
  { nombre: "SSD Samsung 970 EVO 1TB" },
  { $set: { precio: 620 } }
);

// Eliminación
db.productos.deleteOne({ nombre: "Cable VGA 3m" });

// Filtros y operadores
db.productos.find({ precio: { $gt: 1000 } });          // precio mayor a 1000
db.productos.find({ stock: { $lte: 20 } });            // stock bajo
db.productos.find({ rating: { $gte: 4.5 } });          // alta calificación
db.productos.find({ categoria: { $in: ["Gaming","Audio"] } }); // categorías específicas
db.productos.find({ nombre: { $regex: "SSD", $options: "i" } }); // texto parcial
db.productos.find({ $and: [ { precio: { $gt: 500 } }, { stock: { $lt: 50 } } ] }); // combinación