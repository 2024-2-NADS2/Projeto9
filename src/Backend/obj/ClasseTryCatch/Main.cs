class SistemaDeAdocao
{
    class ProgramaAdocao
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
                    int idade = 0; // Inicializa a idade

                    // Lê a idade do Pet
                    while (true)
                    {
                        try
                        {
                            Console.WriteLine("Digite a idade do Pet: (apenas o número)");
                            idade = Convert.ToInt32(Console.ReadLine());

                            // Verifica se a idade é um valor válido
                            if (idade <= 0)
                            {
                                throw new ArgumentOutOfRangeException("A idade deve ser um número positivo.");
                            }
                            break; // Saia do loop se a entrada for válida
                        }
                        catch (FormatException)
                        {
                            Console.WriteLine("Erro: Por favor, insira um número válido para a idade.");
                        }
                        catch (ArgumentOutOfRangeException e)
                        {
                            Console.WriteLine("Erro: " + e.Message);
                        }
                    }

                    string raca, porte, cor, sexo;

                    // Lê a raça do Pet
                    while (true)
                    {
                        try
                        {
                            Console.WriteLine("Digite a raça do Pet:");
                            raca = Console.ReadLine();
                            if (string.IsNullOrWhiteSpace(raca))
                            {
                                throw new ArgumentException("A raça não pode ser vazia.");
                            }
                            break; // Saia do loop se a entrada for válida
                        }
                        catch (ArgumentException e)
                        {
                            Console.WriteLine("Erro: " + e.Message);
                        }
                    }

                    // Lê o porte do Pet
                    while (true)
                    {
                        try
                        {
                            Console.WriteLine("Digite o porte do Pet:");
                            porte = Console.ReadLine();
                            if (string.IsNullOrWhiteSpace(porte))
                            {
                                Console.WriteLine("O porte não pode ser vazio.");
                            }
                            break; // Saia do loop se a entrada for válida
                        }
                        catch (ArgumentException e)
                        {
                            Console.WriteLine("Erro: " + e.Message);
                        }
                    }

                    // Lê a cor do Pet
                    while (true)
                    {
                        try
                        {
                            Console.WriteLine("Digite a cor do Pet:");
                            cor = Console.ReadLine();
                            if (string.IsNullOrWhiteSpace(cor))
                            {
                                throw new ArgumentException("A cor não pode ser vazia.");
                            }
                            break; // Saia do loop se a entrada for válida
                        }
                        catch (ArgumentException e)
                        {
                            Console.WriteLine("Erro: " + e.Message);
                        }
                    }

                    // Lê o sexo do Pet
                    while (true)
                    {
                        try
                        {
                            Console.WriteLine("Digite o sexo do Pet:");
                            sexo = Console.ReadLine();
                            if (string.IsNullOrWhiteSpace(sexo))
                            {
                                throw new ArgumentException("O sexo não pode ser vazio.");
                            }
                            break; // Saia do loop se a entrada for válida
                        }
                        catch (ArgumentException e)
                        {
                            Console.WriteLine("Erro: " + e.Message);
                        }
                    }

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
}