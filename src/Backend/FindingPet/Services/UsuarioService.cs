using FindingPet.Interface;
using FindingPet.Model;
using System.Security.Cryptography;
using System.Text;

namespace FindingPet.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        // Método para gerar o hash da senha
        private string GerarHashSenha(string senha)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(senha));
                return BitConverter.ToString(bytes).Replace("-", "").ToLower(); // Retorna o hash como string
            }
        }

        public bool ValidarLogin(string email, string senha)
        {
            // Gera o hash da senha e busca o usuário com esse hash
            var usuario = _usuarioRepository.GetUsuarioByEmailSenha(email, GerarHashSenha(senha));
            return usuario != null;
        }

        public void CadastrarUsuario(Usuario usuario)
        {
            // Gera o hash da senha antes de salvar no banco
            usuario.Senha = GerarHashSenha(usuario.Senha);
            _usuarioRepository.AdicionarUsuario(usuario);
        }

        public List<Usuario> GetAllUsuarios()
        {
            return _usuarioRepository.GetAllUsuarios();
        }
    }
}
