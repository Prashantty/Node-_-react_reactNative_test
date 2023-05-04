namespace Assignment5
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the choice \n 1. PayRoll \n 1.OnContract \n");
            int n = byte.Parse(Console.ReadLine());
            switch (n)
            {

                case 1:
                    ContractEmployee contractEmployee = new ContractEmployee();
                    contractEmployee.Display();

                    break;
                case 2:
                    PayrollEmployee payrollEmployee = new PayrollEmployee();
                    payrollEmployee.CalculateNetSalary();
                    break;
                default:
                    Console.WriteLine("Invalid input");
                    break;

            }

        }
    }


    public class Employee
    {

        public int id;
        public string name;
        public string ReportingManager;

        public Employee()
        {
            Console.Write("Enter the ID :");
            id = byte.Parse(Console.ReadLine());

            Console.Write("Enter the Name :");
            name = Console.ReadLine();

            Console.Write("Enter the Reporting_Manager :");
            ReportingManager = Console.ReadLine();

        }

    }

    public class ContractEmployee : Employee
    {
        private object? date;

        public int Duration { get; private set; }
        public int Charges { get; private set; }

        public ContractEmployee() : base()
        {
            
            Console.Write("Enter the Date of Joining :");
           date = DateTime.Parse(Console.ReadLine());

            Console.Write("Enter the Duration :");
           Duration = byte.Parse(Console.ReadLine());

            Console.Write("Enter the Charges :");
             Charges = int.Parse(Console.ReadLine());

        }

        public void Display()
        {
            Console.WriteLine("For Employee {0} :: ID {1}",name, id);
            Console.WriteLine("-----------------");
            Console.WriteLine("Till the Date : {0}", date);
            Console.WriteLine("---Employee Detsils---");
            Console.WriteLine("Name {0}", name);
            Console.WriteLine("Reporting Manager {0}", ReportingManager);
            Console.WriteLine("Duration {0}", Duration);
            Console.WriteLine("Charges {0}", Charges);
            Console.WriteLine("Salary Will be :::{0}", Duration * Charges);
        }

    }

   

    class PayrollEmployee : Employee
    {

        public DateTime JoiningDate;
        public int Experience;
        public double BasicSalary;
        public double DA;
        public double HRA;
        public double PF;

        public PayrollEmployee() :base() 
        {
            Console.Write("Enter the Joining Date :");
            JoiningDate =DateTime.Parse(Console.ReadLine()) ;   
            Console.Write("Enter the Ecperience :");
            Experience = Int16.Parse(Console.ReadLine());
            Console.Write("Enter the Basic Salary Date :");
            BasicSalary = int.Parse(Console.ReadLine());
            Console.Write("Enter the DA :");
            DA = int.Parse(Console.ReadLine());
            Console.Write("Enter the HRA :");
            HRA = int.Parse(Console.ReadLine());
            Console.Write("Enter the PF :");
            PF = int.Parse(Console.ReadLine());

        }


        public void CalculateNetSalary()
        {
            if (Experience > 10)
            {
                DA = 0.1 * BasicSalary;
                HRA = 0.085 * BasicSalary;
                PF = 6200;
            }
            else if (Experience > 7 && Experience <= 10)
            {
                DA = 0.07 * BasicSalary;
                HRA = 0.065 * BasicSalary;
                PF = 4100;
            }
            else if (Experience > 5 && Experience <= 7)
            {
                DA = 0.041 * BasicSalary;
                HRA = 0.038 * BasicSalary;
                PF = 1800;
            }
            else if (Experience < 5)
            {
                DA = 0.019 * BasicSalary;
                HRA = 0.02 * BasicSalary;
                PF = 1200;
            }
            Console.WriteLine("Calculated salary ");
            Console.WriteLine(BasicSalary + DA + HRA - PF);
            
        }
    }
}