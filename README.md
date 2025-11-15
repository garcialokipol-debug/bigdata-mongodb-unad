# bigdata-mongodb-unad
- Implementación de base de datos MongoDB para curso Big Data UNAD – Tarea 4.
 # Proyecto Big Data – MongoDB (UNAD)

Este repositorio contiene la implementación de la **Tarea 4 – Almacenamiento y Consultas de Datos en Big Data** del curso de la UNAD.  
Se desarrolla un caso de uso con **MongoDB** para aplicar técnicas de análisis y visualización sobre grandes conjuntos de datos.

---

## 📌 Objetivos

### Objetivo General
Aplicar técnicas de análisis y visualización a grandes conjuntos de datos mediante la implementación de una base de datos NoSQL en MongoDB.

### Objetivos Específicos
1. Comparar los principales tipos de bases de datos NoSQL (clave-valor, documentos, columnar stores, column-family y grafos).
2. Diseñar un esquema de base de datos en MongoDB para un caso de uso realista.
3. Implementar consultas básicas, filtros y agregaciones en MongoDB.
4. Documentar y analizar los resultados obtenidos.
5. Publicar el código y evidencias en un repositorio colaborativo.

---

## 📑 Fases de la Actividad

### Fase 1 – Investigación
Ensayo comparativo de los tipos de bases de datos NoSQL:
- **Clave-valor:** rápidas y simples, ideales para caché.
- **Documentos:** flexibles, esquema dinámico (ej. MongoDB).
- **Columnar stores analíticos:** optimizados para OLAP y BI.
- **Column-family NoSQL:** escalables para datos distribuidos (ej. Cassandra).
- **Grafos:** modelan relaciones complejas (ej. Neo4j).

### Fase 2 – MongoDB
- **Caso de uso:** Catálogo de productos de una tienda online.
- **Colección:** `productos`.
- **Documentos:** 100 registros con campos como nombre, categoría, marca, precio, stock, rating, fecha_ingreso y características.
- **Consultas implementadas:**
  - CRUD básico (insertar, seleccionar, actualizar, eliminar).
  - Filtros y operadores (`$gt`, `$lte`, `$in`, `$regex`, `$and`).
  - Agregaciones (`$group`, `$avg`, `$sum`, `$stdDevSamp`, `$bucket`).

---

## 📂 Estructura del Repositorio
---

## 🚀 Ejecución de los Scripts

1. Abrir MongoDB Shell o Compass.  
2. Crear la base de datos:
   ```js
   use tienda_online;

