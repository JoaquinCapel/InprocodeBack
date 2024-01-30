Mi Aplicación Backend
Esta aplicación es un backend desarrollado en Node.js con Express, diseñado para interactuar con varias tablas de datos creadas con phpMyAdmin. Proporciona una serie de funcionalidades para manipular y visualizar los datos de manera eficiente y efectiva.

Características
CRUD: La aplicación permite realizar operaciones de Crear, Leer, Actualizar y Eliminar en las tablas de datos.
Mapas: La aplicación tiene la capacidad de mostrar datos en forma de mapas para una visualización geográfica.
Calendario: La aplicación puede mostrar datos en un calendario, permitiendo una visualización temporal de los datos.
Gráficos (Chart.js): La aplicación puede visualizar datos en forma de gráficos utilizando la biblioteca Chart.js.
Cómo ejecutar la aplicación
Para ejecutar la aplicación, necesitarás tener instalado Node.js y Nodemon en tu sistema. Una vez instalados, puedes iniciar la aplicación utilizando el siguiente comando:

nodemon dist/index.js

Para compilar los archivos TypeScript en tiempo real, puedes usar el siguiente comando:

tsc --watch

Estructura del código
El código se organiza en varias partes:

server.ts: Este es el archivo principal que inicia el servidor y configura todas las rutas y middlewares.
routes: Esta carpeta contiene todas las rutas de la aplicación, organizadas por funcionalidad (producto, calendario, mapa, gráficos).
db: Esta carpeta contiene la configuración de la base de datos.
Conclusión
Esta aplicación backend es una herramienta poderosa para manipular y visualizar datos de varias tablas creadas con phpMyAdmin. Con su amplia gama de funcionalidades, es una excelente opción para cualquier proyecto que requiera una gestión de datos eficiente y efectiva.
