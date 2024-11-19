
using FindingPet3.Model;
using System.Collections.Generic;

namespace FindingPet3.Interface
{
    public interface IUsuarioRepository
    {
        Usuario GetUsuarioByEmail(string email); // Adicionado o método para buscar pelo email
        Usuario GetUsuarioByEmailSenha(string email, string senha); // Buscar por email e senha
        void AdicionarUsuario(Usuario usuario);
        List<Usuario> GetAllUsuarios();
    }
}
