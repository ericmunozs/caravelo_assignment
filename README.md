## README

### Tecnologías Utilizadas

- **React**: Para la creación de componentes de interfaz de usuario.
- **React Context**: Para la gestión global del estado y la comunicación entre componentes.
- **TypeScript**: Para proporcionar tipado estático y mejorar la seguridad del código.
- **Jest y React Testing Library**: Para realizar pruebas unitarias.
- **Tailwind CSS**: Para estilizar componentes de manera modular y eficiente.
- **Axios**: Para manejar solicitudes HTTP de manera sencilla.
- **Vite**: Para un entorno de desarrollo rápido y moderno.

### Descripción del Proyecto

Para esta prueba técnica, se ha desarrollado un pequeño dashboard que muestra la siguiente información:

- **Nombre del cliente**: Hardcodeado al mío :D
- **Listado de módulos de suscripción**: Indica si están activos o desactivados (estos estados se muestran de forma aleatoria).
- **Botón para editar vuelos**: Eje principal de la prueba

El diseño del dashboard sigue los estilos del primer ejemplo que se mencionaba en el documento de [Airline RFI](https://docs.google.com/document/d/1pm71VuhuXoA-vWgisG0zUFKARx1F9Kk9BbX_fkeu37o/edit#heading=h.7pb623zglks6) (**_Airline’s mockups_**). Los módulos que se muestran son los **_Platform modules_** que aparecen al principio de ese documento. He añadido el dashboard para que se viera más completa la aplicación junto al botón de **_Editar vuelos_**.

He usado un patrón de diseño atómico, organizando el código en carpetas: `atoms`, `molecules`, `organisms`, `templates` y `pages`. He creado algunos componentes básicos desde cero (como el `Button` y el `Select`) y para otros como el toaster y el dialog, he utilizado [Shadcn](https://ui.shadcn.com/) para ahorrar tiempo. Para los estilos, me he decidido por [TailwindCSS](https://tailwindcss.com) porque es una forma rápida de maquetar.

A la hora de realizar los tests unitarios he utilizado **_Jest_** y **_Testing Library_**. Para mockear las APIs utilicé una librería que funciona bien con React: [Axios](https://www.npmjs.com/package/axios). Para persistir los datos del modal se ha hecho con **_React Context_**.

### Prerequisitos

- **yarn**

```bash
npm install -g yarn
```

### Instalación y Ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/ericmunozs/caravelo_assignment
```

2. Navegar al directorio del proyecto:

```bash
cd caravelo_assignment
```

3. Instalar las dependencias:

```bash
yarn
```

4 Ejecutar el proyecto:

```bash
yarn dev
```

### Ejecutar tests

```bash
yarn test
```

### Hacer build

```bash
yarn build
```
