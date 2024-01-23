use Prashant



CREATE TABLE [dbo].[Employee](
 [id] [int] NOT NULL,
 [name] [varchar](20) NOT NULL,
 [address] [varchar](50) NULL,
 [salary] [int] NULL,
 [dept] [varchar](20) NULL,
 [doj] [datetime] NULL,
 CONSTRAINT [uniaddress] UNIQUE NONCLUSTERED 
(
 [address] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO Employee ([id], [name], [address], [salary], [dept], [doj])
VALUES 
    (1, 'John Doe', '123 Main St', 50000, 'Sales', '2022-01-01'),
    (2, 'Jane Smith', '456 Elm St', 60000, 'Marketing', '2022-02-01'),
    (3, 'Bob Johnson', '789 Oak St', 70000, 'Engineering', '2022-03-01'),
    (4, 'Sara Lee', '234 Maple St', 80000, 'Finance', '2022-04-01'),
    (5, 'Tom Jones', '567 Pine St', 90000, 'HR', '2022-05-01'),
    (6, 'Alice Brown', '890 Cedar St', 100000, 'IT', '2022-06-01'),
    (7, 'David Lee', '901 Walnut St', 110000, 'Sales', '2022-07-01'),
    (8, 'Karen Chen', '2345 Birch St', 120000, 'Marketing', '2022-08-01'),
    (9, 'Mike Johnson', '6789 Spruce St', 130000, 'Engineering', '2022-09-01'),
    (10, 'Lisa Kim', '123 Oak St', 140000, 'Finance', '2022-10-01')


Select * from Employee
--Strored Procedures

Select * from Worker;
select * from worker where Worker_ID =5;
select * from Worker;
go


---Create a Procedures 
--Procedures can and cannot return value
-- it return a single value 
-- it precompiled
-- used mainly for the CRUD operation , DDL , DML , TCL all 

create proc GetEmployee
as
begin
select * from  Employee
end

--calling the Procedures
exec GetEmployee


--Insert Procedures
create proc InsertEmployee
as 
begin
insert into Employee(id, name , address, salary , dept, doj)
values(9,'Kiran','delhi',23000,'Accts',GETDATE())
end

-- calling 
exec InsertEmployee

--update procedures

create proc EditEmployee
as
begin 
update Employee set id = 11 where id = 9
end

--calling 

exec EditEmployee




--Delete Procedures

create Proc DeleteEmployee
as
begin 
delete from Employee where id = 11
end

--deleting Procedueres
drop proc DeleteEmployee
--calling 

exec DeleteEmployee


--Procedures With Parameters
--input Parameters

--insert

alter proc InsertEem(@id int, @name varchar(20) , @address varchar(50), @salary int, @dept varchar(20), @doj DateTime)
as
begin
if(exits(select * from Employee where id = @id)
and exits(select * from Employee address = @address))
return 0
else

begin
  insert into Employee(id , name , address , salary , dept , doj)
  values(@id , @name , @salary , @dept , @doj)
  return 1
end
end

--calling 
declare @flag int
exec @flag