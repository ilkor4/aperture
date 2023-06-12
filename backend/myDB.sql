create database myDB;
use myDB;

create table clothes (
	id int primary key auto_increment,
	color varchar(25),
	typeClothes varchar(25),
	fabrics varchar(25)
);

create table orders (
	id int primary key auto_increment,
    firstName varchar(25),
    phoneNumber varchar(25),
    id_clothes INT,
    height int,
    bust int,
    waist int,
    sleeve int,
    trousersLength int,
    booty int,
    foreign key (id_clothes) references clothes (id)
);

select * from orders;