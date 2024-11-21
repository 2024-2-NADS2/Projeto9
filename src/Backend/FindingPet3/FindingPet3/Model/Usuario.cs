using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FindingPet3.Model
{
    public class Usuario
    {
        [Key] // Define como chave primária
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Define como auto-increment no banco
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatório.")]
        [MaxLength(100, ErrorMessage = "O campo Nome pode ter no máximo 100 caracteres.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo Email é obrigatório.")]
        [EmailAddress(ErrorMessage = "O formato do email é inválido.")]
        [MaxLength(150, ErrorMessage = "O campo Email pode ter no máximo 150 caracteres.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo Senha é obrigatório.")]
        [MinLength(6, ErrorMessage = "O campo Senha deve ter no mínimo 6 caracteres.")]
        [MaxLength(50, ErrorMessage = "O campo Senha pode ter no máximo 50 caracteres.")]
        public string Senha { get; set; }

        [Required(ErrorMessage = "O campo CPF é obrigatório.")]
        [Range(10000000000, 99999999999, ErrorMessage = "O CPF deve ser um número válido.")]
        public long Cpf { get; set; }

        [Required(ErrorMessage = "O campo Estado é obrigatório.")]
        [MaxLength(50, ErrorMessage = "O campo Estado pode ter no máximo 50 caracteres.")]
        public string Estado { get; set; }

        [Required(ErrorMessage = "O campo Endereço é obrigatório.")]
        [MaxLength(255, ErrorMessage = "O campo Endereço pode ter no máximo 255 caracteres.")]
        public string Endereco { get; set; }

        [Required(ErrorMessage = "O campo Número do Endereço é obrigatório.")]
        [Range(1, int.MaxValue, ErrorMessage = "O Número do Endereço deve ser maior que zero.")]
        public int NumeroEndereco { get; set; }
    }
}
