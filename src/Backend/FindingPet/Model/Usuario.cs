using System.Text.Json.Serialization;

namespace FindingPet.Model
{
    public class Usuario
    {
        private string nome;
        private string email;
        private string senha;
        private int cpf;
        private string estado;
        private string endereco;
        private int numeroEndereco;

        public Usuario() { }
        // Construtor público para inicializar a classe

         [JsonConstructor]
        public Usuario(string nome, string email, string senha, int cpf, string estado, string endereco, int numeroEndereco)
        {
            this.nome = nome;
            this.email = email;
            this.senha = senha;
            this.cpf = cpf;
            this.estado = estado;
            this.endereco = endereco;
            this.numeroEndereco = numeroEndereco;
        }

        public Usuario(string email, string senha)
        {
            this.email = email;
            this.senha = senha;
        }

        // Propriedades públicas para desserialização JSON
        public string Nome { get => nome; set => nome = value; }
        public string Email { get => email; set => email = value; }
        public string Senha { get => senha; set => senha = value; }
        public int Cpf { get => cpf; set => cpf = value; }
        public string Estado { get => estado; set => estado = value; }
        public string Endereco { get => endereco; set => endereco = value; }
        public int NumeroEndereco { get => numeroEndereco; set => numeroEndereco = value; }
    }




    //public class Usuario
    //{
    //    private string nome;
    //    private string email;
    //    private string senha;
    //    private int CPF;
    //    private string estado;
    //    private string endereco;
    //    private int numeroEndereco;

    //    // GET
    //    public string GetNome()
    //    {
    //        return nome;
    //    }
    //    public string GetEmail()
    //    {
    //        return email;
    //    }
    //    public string GetSenha()
    //    {
    //        return senha;
    //    }
    //    public int GetCPF()
    //    {
    //        return CPF;
    //    }
    //    public string GetEstado()
    //    {
    //        return estado;
    //    }
    //    public string GetEndereco()
    //    {
    //        return endereco;
    //    }
    //    public int GetNumeroEndereco()
    //    {
    //        return numeroEndereco;
    //    }

    //    // SET
    //    public void SetNome(string novoNome)
    //    {
    //        nome = novoNome;
    //    }
    //    public void SetEmail(string novoEmail)
    //    {
    //        email = novoEmail;
    //    }
    //    public void SetSenha(string novaSenha)
    //    {
    //        senha = novaSenha;
    //    }
    //    public void SetCPF(int novoCPF)
    //    {
    //        CPF = novoCPF;
    //    }
    //    public void SetEstado(string novoEstado)
    //    {
    //        estado = novoEstado;
    //    }
    //    public void SetEndereco(string novoEndereco)
    //    {
    //        endereco = novoEndereco;
    //    }
    //    public void SetNumeroEndereco(int novoNumero)
    //    {
    //        numeroEndereco = novoNumero;
    //    }

    //    public Usuario(string novoNome, string novoEmail, string novaSenha, int novoCPF, string novoEstado, string novoEndereco, int novoNumero)
    //    {
    //        nome = novoNome;
    //        email = novoEmail;
    //        senha = novaSenha;
    //        CPF = novoCPF;
    //        estado = novoEstado;
    //        endereco = novoEndereco;
    //        numeroEndereco = novoNumero;
    //    }
    //public void ExibirDetalhes()
    //{
    //    Console.WriteLine("Detalhes do Usuário: Nome: {0}, Email: {1}, CPF: {2}, Estado: {3}, Endereço: {4}, Número: {5}",
    //                      nome, email, CPF, estado, endereco, numeroEndereco);
    //}

    //// Funções da classe
    //public void Requisitos()
    //{
    //    Console.WriteLine("Nome: {0}, Email: {1}, CPF: {2}, Estado: {3}, Endereço: {4}, Número: {5}",
    //                      GetNome(), GetEmail(), GetCPF(), GetEstado(), GetEndereco(), GetNumeroEndereco());
    //}

}
