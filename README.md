# Inprocode Backend

Esta aplicación es un backend desarrollado en Node.js con Express y Sequalize para interactuar con una base de datos MySQL creadas con phpMyAdmin. Se encarga de gestionar los usuarios, ubicaciones, eventos y gráficos a través de una API RESTful.

## Características

- **CRUD**: La aplicación permite realizar operaciones de Crear, Leer, Actualizar y Eliminar en las tablas de datos.
- **Mapas**: La aplicación tiene la capacidad de mostrar datos en forma de mapas para una visualización geográfica.
- **Calendario**: La aplicación puede mostrar datos en un calendario, permitiendo una visualización temporal de los datos.
- **Gráficos (Chart.js)**: La aplicación puede visualizar datos en forma de gráficos utilizando la biblioteca Chart.js.

## 📌 Instrucciones para iniciar el Servidor

Asegúrate de tener instalado Node.js y npm antes de seguir estos pasos.

**✔️ Paso 1:** Clonar el Repositorio

```bash
git clone https://github.com/JoaquinCapel/InprocodeBack.git
```

**✔️ Paso 2:** Ingresa al directorio del proyecto:
```bash
cd inprocodeBack
```

**✔️ Paso 3:** Instalar las Dependencias
```bash
npm install
```

**✔️ Paso 4:** Configuración de la Base de Datos
Asegúrate de tener una base de datos MySQL en ejecución y configura las credenciales de acceso en el archivo _**db/connection.ts**_.

**✔️ Paso 4:** Levantar el Servidor
Abre dos consolas, una para compilar TypeScript y otra para ejecutar el servidor.

- Consola 1 (Compilar TypeScript - Manténla Abierta):
```bash
tsc --watch
```

- Consola 2 (Levantar el Servidor - En una Nueva Consola):
```bash
nodemon dist/app.js
```

El servidor estará disponible en http://localhost:8000 por defecto.


📁 ESTRUCTURA DEL CÓDIGO

server.ts: Este es el archivo principal que inicia el servidor y configura todas las rutas y middlewares.

routes: Esta carpeta contiene todas las rutas de la aplicación, organizadas por funcionalidad (producto, calendario, mapa, gráficos).

db: Esta carpeta contiene la configuración de la base de datos.

validations: Contiene las validaciones correspondientes a los datos introducidos por el usuario.


