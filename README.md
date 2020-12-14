# Proyecto Obesidad

 <p align="center"> <img src="https://i2.wp.com/www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/wp-content/uploads/sites/137/2019/10/cropped-sin-titulo-4.png?fit=512%2C512" width="350"/> <img src="your_relative_path_here_number_2_large_name" width="350"/> </p> 
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
Here we will see about the data model
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

#### many to many
 - a usuario has many cursos and a curso has many usuario

### E/R Diagram
![Image text]

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

[Sql link](https://github.com/Rocholl/ObesidadFullStack/blob/Develop/obesidadsql.sql)
## User requirements

 - Platform:
 - - The application will be hybrid, that is, it will work for web and mobile environments.
- The main function of the application will be to be able to visualize a map where you can see the educational centers and relative information about obesity.
 - There is also a function where teachers can login and add data.
 - All those who access the application will be able to view the map.
 - Only teachers can access the menu to add a record.

## Use case
![Image text]

## Technical specifications

 - Backend:  it communicates with a MySQL database, uses NodeJs technology to create requests and pass them on to the client, it also uses an ORM called sequelize to create models and create queries.
 - Frontend:  It communicates through a RESTful service with the server, the technology used is Ionic Framework + Angular JS

## Interfaces
### Color palette.
![Image text]
### Usability



## (3.) Prototipado 🔧
describes pruebas y añades imágenes
... incluso vídeo

## Ejecutando las pruebas ⚙️


