using FindingPet.DTO;
using FindingPet.Interface;
using FindingPet.Model;
using FindingPet.Services;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace FindingPet.Controllers
{
    public class UsuarioController : Controller
    {
        private static List<Usuario> usuarios = new List<Usuario>();

        private readonly IUsuarioService _usuarioService;
        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("cadastrar")]
        public IActionResult CadastrarUsuario([FromBody] Usuario novoUsuario)
        {
            if (novoUsuario == null)
            {
                return BadRequest("Dados inválidos.");
            }

            if (string.IsNullOrEmpty(novoUsuario.Nome) ||
                string.IsNullOrEmpty(novoUsuario.Email) ||
                string.IsNullOrEmpty(novoUsuario.Senha) ||
                novoUsuario.Cpf <= 0 ||
                string.IsNullOrEmpty(novoUsuario.Estado) ||
                string.IsNullOrEmpty(novoUsuario.Endereco) ||
                novoUsuario.NumeroEndereco <= 0)
            {
                return BadRequest("Todos os campos são obrigatórios e devem ser preenchidos corretamente.");
            }

            foreach (var usuario in usuarios)
            {
                if (usuario.Email == novoUsuario.Email)
                {
                    return BadRequest("Este e-mail já está em uso.");
                }
                if (usuario.Cpf == novoUsuario.Cpf)
                {
                    return BadRequest("Este CPF já está cadastrado.");
                }
            }

            usuarios.Add(novoUsuario);
            return Ok("Usuário cadastrado com sucesso!");
        }

        // Método GET para retornar a quantidade de usuários cadastrados
        [HttpGet("quantidade")]
        public IActionResult GetQuantidadeUsuarios()
        {
            int quantidade = usuarios.Count; // Conta a quantidade de usuários cadastrados
            return Ok(new { Quantidade = quantidade }); // Retorna a quantidade em formato JSON
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] UsuarioDTO usuarioCadastrado)
        {
            try
            {
                if (usuarioCadastrado == null || string.IsNullOrEmpty(usuarioCadastrado.Email) || string.IsNullOrEmpty(usuarioCadastrado.Senha))
                {
                    return BadRequest("Email e senha são obrigatórios.");
                }

                bool isValid = _usuarioService.ValidarLogin(usuarioCadastrado.Email, usuarioCadastrado.Senha);
                if (isValid)
                {
                    return Ok("Login bem-sucedido!");
                }
                return Unauthorized("Email ou senha inválidos.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }

    }
}


