// 1) Promedio de precio por categoría
db.productos.aggregate([
  { $group: { _id: "$categoria", promedioPrecio: { $avg: "$precio" } } },
  { $sort: { promedioPrecio: -1 } }
]);

// 2) Conteo de productos por categoría
db.productos.aggregate([
  { $group: { _id: "$categoria", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);

// 3) Top 5 productos con mejor rating
db.productos.aggregate([
  { $sort: { rating: -1, precio: -1 } },
  { $limit: 5 },
  { $project: { nombre: 1, categoria: 1, precio: 1, rating: 1 } }
]);

// 4) Stock total por categoría
db.productos.aggregate([
  { $group: { _id: "$categoria", stockTotal: { $sum: "$stock" } } },
  { $sort: { stockTotal: -1 } }
]);

// 5) Precio promedio y desviación estándar por categoría
db.productos.aggregate([
  { $group: {
      _id: "$categoria",
      promedioPrecio: { $avg: "$precio" },
      desviacionPrecio: { $stdDevSamp: "$precio" }
  }},
  { $sort: { promedioPrecio: -1 } }
]);

// 6) Productos por rango de precio
db.productos.aggregate([
  { $bucket: {
      groupBy: "$precio",
      boundaries: [0, 200, 500, 1000, 2000, 5000, 10000],
      default: ">=10000",
      output: { count: { $sum: 1 } }
  }}
]);