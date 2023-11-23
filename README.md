# Todo App

This is a simple two-tier todo application with a frontend built using HTML, CSS, and JavaScript, and a backend using Node.js, Express, and MySQL.

## Getting Started

### Prerequisites

- Node.js installed
- MySQL server installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone <repo-link>
   cd 2-tier-todo-app-node-mysql
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the MySQL database:

   - Create a database named `todo_app`.
   - Run the SQL script in `database.sql` to create the `tasks` table.

4. Update MySQL connection details:

   Open `server.js` and update the MySQL connection details (host, user, password) to match your MySQL setup.

### Usage

1. Start the Node.js server:

   ```bash
   node server.js
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the todo app.

## Features

- Add tasks
- Fetch tasks from the MySQL database

## Contributing

Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
