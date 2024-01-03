# Todo App

This is a simple two-tier todo application with a frontend built using HTML, CSS, and JavaScript, and a backend using Node.js, Express, and MySQL.

## Getting Started

### Prerequisites

- Node.js installed
- MySQL server installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/faizan35/2-tier-todo-app-node-mysql.git
   ```

   ```bash
   cd 2-tier-todo-app-node-mysql
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the MySQL database:

   - Create a database named `todo_app`.
   - Run the SQL script in `database\tasks.sql` to create the `tasks` table.

4. Create a `.env` file in the project dir.

   ```bash
   touch .env
   ```

5. Open the .env file and add your MySQL configuration:

   ```bash
   MYSQL_HOST=mysql
   MYSQL_USER=your_username
   MYSQL_PASSWORD=your_password
   MYSQL_DB=your_database
   ```

### Usage

1. Start the Node.js server:

   ```bash
   node backend/server.js
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the todo app.

---

### Docker

---

## Features

- Add tasks
- Fetch tasks from the MySQL database
- Delete task **<--- In progress --->**

## Contributing

Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
