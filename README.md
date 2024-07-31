## README

### Technologies Used

- **React**: For building user interface components.
- **React Context**: For global state management and inter-component communication.
- **TypeScript**: For static typing and improving code safety.
- **Jest y React Testing Library**: For unit testing.
- **Tailwind CSS**: For modular and efficient styling of components.
- **Axios**: For handling HTTP requests in a simple way.
- **Vite**: For a fast and modern development environment.

### Project Description

For this technical test, a small dashboard has been developed that displays the following information:

- **Client Name**: Hardcoded to mine :D
- **Subscription Modules List**: Shows whether they are active or inactive (these states are displayed randomly).
- **Button to Edit Flights**: The main focus of the test

The dashboard design follows the styles of the first example mentioned in the [Airline RFI](https://docs.google.com/document/d/1pm71VuhuXoA-vWgisG0zUFKARx1F9Kk9BbX_fkeu37o/edit#heading=h.7pb623zglks6) (**_Airline’s mockups_**). The modules displayed are the **_Platform modules_** that appear at the beginning of that document. I added the dashboard to make the application look more complete along with the **_Edit Flights_** button.

I used an atomic design pattern, organizing the code into folders: `atoms`, `molecules`, `organisms`, `templates` y `pages`. I created some basic components from scratch (like `Button` and `Select`), and for others like toaster and dialog, I used [Shadcn](https://ui.shadcn.com/) to save time. For styling, I chose [TailwindCSS](https://tailwindcss.com) because it's a fast way to design.

For unit testing, I used **_Jest_** and **_Testing Library_**. To mock APIs, I used a library that works well with React: [Axios](https://www.npmjs.com/package/axios). To persist modal data, I used **_React Context_**.

### Prerequisites

- **yarn**

```bash
npm install -g yarn
```

### Installation and Running

1. Clone the repository:

```bash
git clone https://github.com/ericmunozs/caravelo_assignment
```

2. Navigate to the project directory:

```bash
cd caravelo_assignment
```

3. Install dependencies:

```bash
yarn
```

4. Run the project:

```bash
yarn dev
```

### Run Tests

```bash
yarn test
```

### Build

```bash
yarn build
```
