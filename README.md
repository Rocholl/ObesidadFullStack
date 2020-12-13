
# Proyecto Obesidad
![Image text]("https://i2.wp.com/www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/wp-content/uploads/sites/137/2019/10/cropped-sin-titulo-4.png?fit=512%2C512)

A project to control childhood obesity in schools.
## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Data Model](#datamodel)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [FAQs](#faqs)
### General Info
***

This project is an initiative to implement an obesity control system in educational centers to prevent future obesity in the city. 

## Technologies
***
A list of technologies used within the project:
 * [Ionic](https://ionicframework.com/): Version 5
 * [Angular Js](https://angular.io/): Version 10
 * [Node JS](https://nodejs.org/es/): Version 14.15.1 LTS
 * [Sequelize ORM](https://sequelize.org/): Version 6
 * [MySQL](https://www.mysql.com/): Version 10.1.40
## Data Model
***Here we will see about the data model
### Introducion
 In the database we have 6 tables:
 * usuario: idUsuario as primary key, user, password, name, lastname, idCentro refers to the id of the Centro table.
 * centro:idCentro as primary key, name, postal_code, lat, long, idMunicipio refers to the id of the Municipiotable.
 * health:idHealth as primary key,  fat_dought, viceral_mass, height, weight, age, idCentro refers to the id of the Centro table and idCurso refers to the id of the Curso table.
 * municipio: idMunicipio as primary key, name, island.
 * class: idCurso as primary key, name, letter.
 * user_class:idUsuario and idCurso.

### Relations
#### one to many
 - a usuario has a centro and a centro has many usuario.
 -  a centro has a municipìo and a municipio has many centro
 - a health has a centro and a centro has many health
 - a health has a curso and a curso has many health
 - 
 - 
#### many to many
 - a usuario has many cursos and a curso has many usuario

### E/R Diagram

![Image text]("https://i2.wp.com/www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/wp-content/uploads/sites/137/2019/10/cropped-sin-titulo-4.png?fit=512%2C512)
### Relational Model
Usuario(**IdUsuario**,Username,Password,Email,Nombre,Apellidos,Rol,IdCentro*)

 - idCentro foreign key Centro

Usuario_Cursos(**IdUsu,IdCurso**)*

 - idUsu foreign key Usuario
 - idCurso foreign key Curso

Datos(**IdDatos**,masa_Grasa,masa_Viseral,masa_Muscular,altura,peso,edad,aula,grupo,idCentro*,idCurso*)

 - idCentro foreign key Centro
 - idCurso foreign key Curso

Curso(**idCurso**,nombre,letra)

Centro(**Id_Centro**,nombre,lat,long,codigo_Postal,IdMunicipio*)

 - idMunicipio foreign key Municipio

Municipio(**Id_Municipio**,Nombre,Isla)
### Class diagram
![Image text]
### Sql Code

[sql](https://github.com/Rocholl/ObesidadFullStack/blob/Develop/obesidadsql.sql)## Installation
***
A little intro about the installation. 

### Accesibilidad
### Aspecto


## (3.) Prototipado 🔧
describes pruebas y añades imágenes
... incluso vídeo

## Ejecutando las pruebas ⚙️





