using FindingPet3.Interface;
using FindingPet3.Model;

namespace FindingPet3.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public bool ValidarLogin(string email, string senha)
        {
            var usuario = _usuarioRepository.GetUsuarioByEmailSenha(email, senha);
            return usuario != null;
        }

        public void CadastrarUsuario(Usuario usuario)
        {
            _usuarioRepository.AdicionarUsuario(usuario);
        }

        public Usuario GetUsuarioByEmail(string email)
        {
            return _usuarioRepository.GetUsuarioByEmail(email);
        }
    }
}
