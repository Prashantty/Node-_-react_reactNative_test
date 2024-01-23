create Database Assignment3

use Assignment3

create table Employee
(

id int not null identity,
name varchar(20) not null,
salary int check(salary between 10000 and 30000),
exp int check(exp > 2),
dep varchar(50) check( dep in ('HR','sales','Accts','IT')),
ManagerName varchar(20)
)

select * from Employee

INSERT INTO Employee (name, salary, exp, dep, ManagerName)
VALUES 
('John Smith', 15000, 4,'HR', 'Jane Doe'),
('Amy Brown', 25000, 6,'sales', 'Jack Johnson'),
('Bob Green', 18000, 10, 'Accts', 'Samantha Smith'),
('Peter Lee', 28000,4, 'IT', 'David Chen'),
('Elizabeth O', 20000,8, 'sales', 'Jack Johnson'),
('Karen Smith', 16000, 12,'HR', 'Jane Doe'),
('Michael Brown', 29000, 5,'sales', 'Jack Johnson'),
('Sarah Lee', 20000,  7,'IT','David Chen'),
('Lucas Hernandez', 15000, 4,'Accts', 'Samantha Smith'),
('Jennifer Nguyen', 22000, 11,'IT', 'David Chen');



--Q1 Procedures
--Insert Procedures

create proc InsertEmployee(@name varchar(20), @exp int, @salary int,@dep varchar(20), @ManagerName varchar(20))
as 
begin
	if(@name = null) return 0
	begin
		if(@exp < 2) return 1
		begin
			if(@salary not between 10000 and 30000) return 2
			begin
				if(@dep not in ('HR','sales','Accts','IT')) return 3
				else
					begin			
insert into Employee(name, salary,exp, dep, ManagerName)
values(@name, @salary, @exp, @dep, @ManagerName) return 4
end
end
end
end
end


-- calling 
declare @flag int
exec @flag  = InsertEmployee 'kritika',3,23000,'IT','Prashant'
print @flag
if(@flag =0 ) print 'Please give the name'
else if(@flag = 1) print 'Experience is Greater then 2'




--Q2 Procedure Update , Delete

create proc UpdateEmployee(@id int)
as 
begin
update Employee set name = 'Kritika' where id = @id
print 'Record Inserted'
end


--calling
exec UpdateEmployee 11

--delete  Procedure

create proc DeleteEmployee (@id int)
 As
 Begin
 delete Employee 
 where id=@id
 print 'Record deleted'
 End

 drop proc DeleteEmployee
 --calling
 exec DeleteEmployee 11

 --Q1

 select * from 




