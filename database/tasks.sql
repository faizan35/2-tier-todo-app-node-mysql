CREATE TABLE IF NOT EXISTS tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    text VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false
);

-- CREATE DATABASE todo_app;
-- USE todo_app;
