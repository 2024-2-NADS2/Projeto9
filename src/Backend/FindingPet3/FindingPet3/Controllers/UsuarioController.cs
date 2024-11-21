using FindingPet3.DTO;
using FindingPet3.Interface;
using FindingPet3.Model;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly IUsuarioService _usuarioService;

    public UsuarioController(IUsuarioService usuarioService)
    {
        _usuarioService = usuarioService;
    }

    /// <summary>
    /// Cadastra um novo usuário.
    /// </summary>
    /// <param name="novoUsuario">Objeto com os dados do novo usuário.</param>
    /// <returns>Mensagem de sucesso ou erro.</returns>
    [HttpPost("cadastrar")]
    public IActionResult CadastrarUsuario([FromBody] Usuario novoUsuario)
    {
        try
        {
            // Verifica se o objeto é nulo
            if (novoUsuario == null)
            {
                return BadRequest(new { mensagem = "Dados inválidos. O objeto de usuário não pode ser nulo." });
            }

            // Valida campos obrigatórios
            if (string.IsNullOrWhiteSpace(novoUsuario.Nome) ||
                string.IsNullOrWhiteSpace(novoUsuario.Email) ||
                string.IsNullOrWhiteSpace(novoUsuario.Senha) ||
                novoUsuario.Cpf <= 0 ||
                string.IsNullOrWhiteSpace(novoUsuario.Estado) ||
                string.IsNullOrWhiteSpace(novoUsuario.Endereco) ||
                novoUsuario.NumeroEndereco <= 0)
            {
                return BadRequest(new { mensagem = "Todos os campos são obrigatórios e devem ser preenchidos corretamente." });
            }

            // Verifica se o e-mail já está cadastrado
            var usuarioExistente = _usuarioService.GetUsuarioByEmail(novoUsuario.Email);
            if (usuarioExistente != null)
            {
                return BadRequest(new { mensagem = "Este e-mail já está em uso. Tente outro." });
            }

            // Cadastra o novo usuário
            _usuarioService.CadastrarUsuario(novoUsuario);

            return Ok(new
            {
                mensagem = "Usuário cadastrado com sucesso!",
                usuarioId = novoUsuario.Id
            });
        }
        catch (Exception ex)
        {
            // Log do erro (se houver um serviço de log)
            // _logger.LogError(ex, "Erro ao cadastrar usuário");

            return StatusCode(500, new { mensagem = "Erro interno no servidor.", detalhes = ex.Message });
        }
    }

    /// <summary>
    /// Realiza login do usuário.
    /// </summary>
    /// <param name="usuarioDTO">Objeto contendo email e senha.</param>
    /// <returns>Mensagem de sucesso ou erro.</returns>
    [HttpPost("login")]
    public IActionResult Login([FromBody] UsuarioDTO usuarioDTO)
    {
        try
        {
            // Verifica se o DTO é válido
            if (usuarioDTO == null ||
                string.IsNullOrWhiteSpace(usuarioDTO.Email) ||
                string.IsNullOrWhiteSpace(usuarioDTO.Senha))
            {
                return BadRequest(new { mensagem = "Email e senha são obrigatórios." });
            }

            // Valida o login
            bool isValid = _usuarioService.ValidarLogin(usuarioDTO.Email, usuarioDTO.Senha);

            if (isValid)
            {
                return Ok(new { mensagem = "Login bem-sucedido!" });
            }

            return Unauthorized(new { mensagem = "Email ou senha inválidos. Verifique e tente novamente." });
        }
        catch (Exception ex)
        {
            // Log do erro (se houver um serviço de log)
            // _logger.LogError(ex, "Erro ao realizar login");

            return StatusCode(500, new { mensagem = "Erro interno no servidor.", detalhes = ex.Message });
        }
    }
}
