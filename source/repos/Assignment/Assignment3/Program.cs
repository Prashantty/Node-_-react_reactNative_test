using System.Linq;

namespace Assignment3
{
    internal class Program
    {
        static void Main(string[] args)
        {


            // Object Initializer
            Employee employee = new Employee(1, "Prashant", "HR", 90000);



            // List Initializer 
            List<Employee> employees = new List<Employee>
                 {



                 new Employee(1, "ajay", "HR", 90000),
                 new Employee(2, "ajay", "Accts", 90000),
                 new Employee(1, "ajay", "HR", 90000),
                 new Employee(1, "ajay", "HR", 20000),
                 new Employee(1, "ajay", "HR", 90000),
                 new Employee(1, "ajay", "HR", 18000)
                 };



            var list1 = (from emp in employees
                         where emp.salary > 10000 && emp.salary < 25000
                         select emp).ToList();




            list1 = employees.Where(x => x.salary > 10000 && x.salary < 25000).ToList();



            


            list1 = (from emp in employees
                     select emp).ToList();



            list1 = employees.ToList();



            var list2 = (from emp in employees
                         select emp.dept).ToList();



            var list3 = employees.Select(x => x.salary).ToList();



            }

        }
    }