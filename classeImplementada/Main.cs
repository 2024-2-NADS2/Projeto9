using classeImplementada;

internal class Program
{
    static void Main()
    {
        Console.WriteLine("Quantos Pets você deseja adotar?");
        int numeroPets = Convert.ToInt32(Console.ReadLine());

        for (int i = 0; i < numeroPets; i++)
        {
            Console.WriteLine("Você deseja escolher as características do seu Pet? (sim/não)");
            string resposta = Console.ReadLine();

            if (resposta == "não")
            {
                Console.WriteLine("Adoção cancelada.");
                break;
            }
            else if (resposta == "sim")
            {
                // Lê as características do pet diretamente
                Console.WriteLine("Digite a idade do Pet: (apenas o número)");
                int idade = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Digite a raça do Pet:");
                string raca = Console.ReadLine();

                Console.WriteLine("Digite o porte do Pet:");
                string porte = Console.ReadLine();

                Console.WriteLine("Digite a cor do Pet:");
                string cor = Console.ReadLine();

                Console.WriteLine("Digite o sexo do Pet:");
                string sexo = Console.ReadLine();

                // Cria um novo pet com os dados fornecidos
                Pet pet = new Pet(idade, raca, porte, cor, sexo);

                // Exibe os detalhes do pet
                pet.ExibirDetalhes();
            }
            else
            {
                Console.WriteLine("Resposta inválida.");
                i--;
            }
        }
    }
}
