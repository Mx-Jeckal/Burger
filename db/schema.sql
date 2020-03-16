DROP DATABAsE IF EXISTS burgers_db;
CREATE DATABAsE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(20) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false
)