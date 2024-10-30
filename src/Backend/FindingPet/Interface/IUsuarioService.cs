using FindingPet.Model;

namespace FindingPet.Interface
{
    public interface IUsuarioService
    {
        
            bool ValidarLogin(string email, string senha);
            void CadastrarUsuario(Usuario usuario);
            List<Usuario> GetAllUsuarios();


    }
}
