using System;

namespace Demo  
{
internal class text
{
    public static void Main(String[] args)
    {
        text obj = new text();
             obj.add();

    }

    public void add()
    {
        int x = 10;
        int y = 30;
        int add = x + y;
        Console.writeLine("This is the additon and result is {0}",add);
    }
}

}
