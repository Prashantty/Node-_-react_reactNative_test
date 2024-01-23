create database Assignment1;

use Assignment1;

create table Worker(
Worker_ID int constraint Pk primary key,
First_Name char(25),
Last_Name char(25) not null,
Salary int check(salary > 10000 and salary < 25000),
Joining_Date DateTime,
Departmant char(25) check(Departmant = 'HR' or  Departmant = 'sales' or Departmant = 'IT')
);


insert into  Worker values(001,'Monika','Arora',11000,'2014-02-10','HR');
insert into  Worker values(002,'Niharika','Verma',10500,'2012-02-20','sales');
insert into  Worker values(003,'vishal','Singhal',21000,'2016-02-25','HR');
insert into  Worker values(004,'Amitabh','singh',15000,'2018-02-22','IT');
insert into  Worker values(005,'viveek','bhati',19000,'2014-02-24','sales');
insert into  Worker values(006,'ashvi','gupta',23000,'2021-02-20','IT');
insert into  Worker values(007,'Aman','Kumar',24000,'2022-02-20','IT');
insert into  Worker values(008,'Prashant','Kumar',17000,'2014-02-20','HR');


select * from Worker

--Q1

select First_Name [SVAM_Workers] from Worker; 

--Q2

select UPPER(First_Name) from Worker;

--Q3

select distinct Worker_ID From Worker 

--Q4

select First_Name from Worker where First_Name = 'a_';
select First_Name , len(First_Name) as [length of Names] , left(First_Name , 2) as [First three] from Worker

--Q5
select CHARINDEX('a', 'First_Name' , 3) AS MatchPosition;

--Q6

select First_Name, RTRIM(First_Name) from Worker

--Q7

select Departmant , LTRIM(Departmant) From Worker

--Q8

Select distinct Worker_ID , len(Departmant) as [Departmant_Name] from Worker

--Q9

select REPLACE(First_Name,'a','A') as [Replacing_character] from Worker

--Q10

Select CONCAT(First_Name, Last_Name) as[Complete_Name] From Worker
 
 --Q11

 Select * from Worker Order by First_Name ASc


 --Q12

 select * from Worker Order by First_Name  ASc , Last_Name desc

 --Q13

 select * from worker where First_Name in ('ashvi','vishal')

 --Q14

  select * from worker where First_Name not in ('ashvi','vishal')

  --Q15

  select * from Worker where Departmant in ('HR')

  --Q16

  Select * from Worker Where First_Name like 'a%'

  --Q17

  
  Select * from Worker Where First_Name like '%a'

  --Q18

  
  Select * from Worker Where First_Name like '_____a'
  Select * from Worker Where First_Name like '%a' and len(First_Name)=6


  --Q19

  select * from Worker where Salary between 15000 and 20000

  --Q20

  Select * from Worker where year(Joining_Date) = 2016 and month(Joining_Date) = 02;

  --Q21

  select COUNT(Worker_ID) from Worker Where Departmant = 'HR'


 