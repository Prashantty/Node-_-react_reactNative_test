namespace Assignment4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Product product = Product.TakeInputFromCustomer();
            product.ProduceBill();
        }


        class Product
        {

            private int pcode;
            private string pname;
            private int qty_in_stock;
            private double discount_allowed;
            private string brand;


            public Product(int pcode, string pname, int qty_in_stock, double discount_allowed, string brand)
            {
                this.pcode = pcode;
                this.pname = pname;
                this.qty_in_stock = qty_in_stock;
                this.discount_allowed = discount_allowed;
                this.brand = brand;
            }


            public static Product TakeInputFromCustomer()
            {
                Console.WriteLine("Enter the product code:");
                int pcode = int.Parse(Console.ReadLine());

                Console.WriteLine("Enter the product name:");
                string pname = Console.ReadLine();

                Console.WriteLine("Enter the quantity in stock:");
                int qty_in_stock = int.Parse(Console.ReadLine());

                Console.WriteLine("Enter the discount allowed (in percentage):");
                double discount_allowed = double.Parse(Console.ReadLine());

                Console.WriteLine("Enter the brand:");
                string brand = Console.ReadLine();

                return new Product(pcode, pname, qty_in_stock, discount_allowed, brand);
            }

            public double CalculateTotalAmount()
            {
                // let today is 26
                double discount_percent = 50.0;
                double discount_factor = 1.0 - (discount_percent / 100.0);

                double amount_without_discount = qty_in_stock * discount_allowed;
                double amount_with_discount = amount_without_discount * discount_factor;

                return amount_with_discount;
            }

            public void ProduceBill()
            {
                double total_amount = CalculateTotalAmount();

                DateTime now = DateTime.Now;
                Console.WriteLine("===========================");
                Console.Write("BILL ::");
                Console.WriteLine(" For Date: " + now);
                Console.WriteLine("===========================");
                Console.WriteLine("Product Code: " + pcode);
                Console.WriteLine("Product Name: " + pname);
                Console.WriteLine("Quantity in Stock: " + qty_in_stock);
                Console.WriteLine("Discount Allowed: " + discount_allowed + "%");
                Console.WriteLine("Brand: " + brand);
                Console.WriteLine("Total Amount: $" + total_amount);
            }
        }
    }
}