namespace Assignment2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Program 1: Print sum and average of elements of an Array
            int[] arr = { 10, 20, 30, 40, 50 };
            int sum = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                sum += arr[i];
            }
            float average = (float)sum / arr.Length;
            Console.WriteLine("Sum: " + sum);
            Console.WriteLine("Average: " + average);

            // Program 2: Display sum of 3 by 3 matrices
            int[,] matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
            int matrixSum = 0;
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    matrixSum += matrix[i, j];
                }
            }
            Console.WriteLine("Sum of 3 by 3 matrix: " + matrixSum);

            // Program 3: Find the maximum element of an integer Array
            int[] intArr = { 10, 20, 30, 40, 50 };
            int max = intArr[0];
            for (int i = 1; i < intArr.Length; i++)
            {
                if (intArr[i] > max)
                {
                    max = intArr[i];
                }
            }
            Console.WriteLine("Maximum element in the integer Array: " + max);

            // Program 4: Print column wise sum of elements of 2 D Array
            int[,] arr2D = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
            int[] columnSum = new int[3];
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    columnSum[j] += arr2D[i, j];
                }
            }
            Console.WriteLine("Column-wise sum of 2D Array:");
            for (int i = 0; i < 3; i++)
            {
                Console.WriteLine("Column " + (i + 1) + ": " + columnSum[i]);
            }

            // Program 5: Print row wise sum of elements of 2 D Array
            int[,] arr2D2 = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
            int[] rowSum = new int[3];
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    rowSum[i] += arr2D2[i, j];
                }
            }
            Console.WriteLine("Row-wise sum of 2D Array:");
            for (int i = 0; i < 3; i++)
            {
                Console.WriteLine("Row " + (i + 1) + ": " + rowSum[i]);
            }

            Console.ReadLine();
        }
    }
}