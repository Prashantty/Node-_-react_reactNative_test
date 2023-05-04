namespace Assignment1
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //1. WAP in C# to Display Hello Message
            Console.WriteLine("Hello World!");

            //2. WAP in C# to Display result of Addition, subtraction, product, quotient of two numbers
            int num1 = 10, num2 = 5;
            int sum = num1 + num2;
            int diff = num1 - num2;
            int product = num1 * num2;
            int quotient = num1 / num2;
            Console.WriteLine("Sum = " + sum);
            Console.WriteLine("Difference = " + diff);
            Console.WriteLine("Product = " + product);
            Console.WriteLine("Quotient = " + quotient);

            //3. WAP in C# to Display result of Addition, subtraction, product, quotient of two numbers depending upon choice (using if else / switch)
            Console.WriteLine("Enter two numbers:");
            int n1 = Convert.ToInt32(Console.ReadLine());
            int n2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter your choice: 1. Addition 2. Subtraction 3. Product 4. Quotient");
            int choice = Convert.ToInt32(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    Console.WriteLine("Sum = " + (n1 + n2));
                    break;
                case 2:
                    Console.WriteLine("Difference = " + (n1 - n2));
                    break;
                case 3:
                    Console.WriteLine("Product = " + (n1 * n2));
                    break;
                case 4:
                    Console.WriteLine("Quotient = " + (n1 / n2));
                    break;
                default:
                    Console.WriteLine("Invalid Choice");
                    break;
            }

            //4. WAP in C# to Display your name 10 times
            for (int i = 1; i <= 10; i++)
            {
                Console.WriteLine("Your Name");
            }

            //5. WAP in C# to Display all even numbers from 1 to 10 by using any loop
            for (int i = 2; i <= 10; i += 2)
            {
                Console.Write(i + " ");
            }

            //6. WAP in C# to Display all odd numbers from 50 to 7 by using any loop
            for (int i = 49; i >= 7; i -= 2)
            {
                Console.Write(i + " ");
            }

            //7. WAP in C# to Display table of entered number using any loop
            Console.WriteLine("Enter a number:");
            int num = Convert.ToInt32(Console.ReadLine());
            for (int i = 1; i <= 10; i++)
            {
                Console.WriteLine(num + " x " + i + " = " + (num * i));
            }

            //8. WAP in C# to Display numbers from 100 to 5 with a gap of 3
            for (int i = 100; i >= 5; i -= 3)
            {
                Console.Write(i + " ");
            }

            //9. WAP in C# to Declare some integer variables, assign them some values and display them in one line
            int a = 10, b = 20, c = 30;
            Console.WriteLine("a = " + a + ", b = " + b + ", c = " + c);


        // 10.WAP in C# to Declare some integer variables, assign them some values and display them separate lines
        int x = 5, y = 10, z = 15;
            Console.WriteLine("x = " + x);
            Console.WriteLine("y = " + y);
            Console.WriteLine("z = " + z);
        }
    }
}