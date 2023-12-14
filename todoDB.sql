-- Active: 1701819414792@@127.0.0.1@3306@todoDB

CREATE DATABASE todoDB;

USE todoDB;


CREATE TABLE tareas(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    id_tabla_tareas INT NOT NULL,
    
    FOREIGN KEY (id_tabla_tareas) REFERENCES tabla_tareas(id)
);

    
CREATE TABLE categoria_tareas(
    id_categoria INT NOT NULL,
    id_tabla_tarea INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id),
    FOREIGN KEY (id_tabla_tarea) REFERENCES tabla_tareas(id)
);


CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    celular INT NOT NULL,
    estado VARCHAR(255) NOT NULL
);


CREATE TABLE iconos(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    img TEXT NOT NULL
);


CREATE TABLE fondos(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    img TEXT NOT NULL
);


CREATE TABLE categorias(
    id INT PRIMARY KEY  AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);


CREATE TABLE tabla_tareas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    pinned BOOLEAN NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    ultima_modificacion DATETIME NOT NULL,
    id_fondo INT NOT NULL,
    id_icono INT NOT NULL,
    id_proyecto INT NOT NULL,
    FOREIGN KEY (id_icono) REFERENCES iconos(id),
    FOREIGN KEY (id_fondo) REFERENCES fondos(id),
    FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);


CREATE TABLE proyectos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    fecha_creacion DATETIME NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);
