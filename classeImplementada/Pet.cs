using System;

namespace classeImplementada
{
    internal class Pet
    {
        private int idade;
        private string raca;
        private string porte;
        private string cor;
        private string sexo;

        // GET
        public int GetIdade()
        {
            return idade;
        }
        public string GetRaca()
        {
            return raca;
        }
        public string GetPorte()
        {
            return porte;
        }
        public string GetCor()
        {
            return cor;
        }
        public string GetSexo()
        {
            return sexo;
        }

        // SET
        public void SetIdade(int novaIdade)
        {
            idade = novaIdade;
        }
        public void SetRaca(string novaRaca)
        {
            raca = novaRaca;
        }
        public void SetPorte(string novoPorte)
        {
            porte = novoPorte;
        }
        public void SetCor(string novaCor)
        {
            cor = novaCor;
        }
        public void SetSexo(string novoSexo)
        {
            sexo = novoSexo;
        }

        public Pet(int novaIdade, string novaRaca, string novoPorte, string novaCor, string novoSexo)
        {
            idade = novaIdade;
            raca = novaRaca;
            porte = novoPorte;
            cor = novaCor;
            sexo = novoSexo;
        }

        public void ExibirDetalhes()
        {
            Console.WriteLine("Características escolhidas para o pet: Idade: {0}, Raça: {1}, Porte: {2}, Cor: {3}, Sexo: {4}",
                              idade, raca, porte, cor, sexo);
        }

        // Funções da classe
        public void Requisitos()
        {
            Console.WriteLine("Idade: {0}, Raça: {1}, Porte: {2}, Cor: {3}, Sexo: {4}",
                              GetIdade(), GetRaca(), GetPorte(), GetCor(), GetSexo());
        }
    }
}