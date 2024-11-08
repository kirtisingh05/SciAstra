Create Database sciastra;
use sciastra;

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coursename VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(255) NOT NULL,
    payment_id VARCHAR(255) NOT NULL,
    signature VARCHAR(255) NOT NULL
);

CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    publish_date DATETIME NOT NULL
);

-- Insert sample data into the admins table
-- INSERT INTO admins (username, password) VALUES 
-- ('admin1', 'password123'),
-- ('admin2', 'password456');

-- -- Insert sample data into the courses table
-- INSERT INTO courses (coursename, description, price) VALUES 
-- ('Course 1', 'Description for Course 1', 99.99),
-- ('Course 2', 'Description for Course 2', 149.99),
-- ('Course 3', 'Description for Course 3', 199.99);

-- -- Insert sample data into the payments table
-- INSERT INTO payments (order_id, payment_id, signature) VALUES 
-- ('order_001', 'payment_001', 'signature_001'),
-- ('order_002', 'payment_002', 'signature_002');

-- -- Insert sample data into the blogs table
-- INSERT INTO blogs (title, content, publish_date) VALUES 
-- ('Blog Post 1', 'Content for Blog Post 1', NOW()),
-- ('Blog Post 2', 'Content for Blog Post 2', NOW()),
-- ('Blog Post 3', 'Content for Blog Post 3', NOW());

Select * from admins,payments,courses,blogs;
GRANT ALL PRIVILEGES ON sciastra.* TO 'root'@'localhost';
FLUSH PRIVILEGES;