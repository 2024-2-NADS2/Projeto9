
using FindingPet3.Model;
using System.Collections.Generic;

namespace FindingPet3.Interface
{
    public interface IUsuarioService
    {
        bool ValidarLogin(string email, string senha);
        void CadastrarUsuario(Usuario usuario);
        Usuario GetUsuarioByEmail(string email);
    }
}
