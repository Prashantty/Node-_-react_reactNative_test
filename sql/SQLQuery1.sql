create database Prashant;

use Prashant;

Create table student(

id int,
name varchar(20),
address varchar(30),
);

select *from student;

--insert

insert into student values(1, 'Prashant' ,'Greater Noida');
insert into student values(1, 'ashvi ' , 'Greater noida');
insert into student values(1, 'Aman' , 'Delhi');
insert into student values(1, 'Prabhat', 'Noida');
insert into student values(1, 'Pranav', 'Delhi');

--select 

select id from student;
select id,name from student;

select id from student where name = 'ashvi';

select address from student where name = 'ashvi';


