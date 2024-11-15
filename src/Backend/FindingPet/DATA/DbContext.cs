using Microsoft.EntityFrameworkCore;
using FindingPet.Model; // Certifique-se de que o namespace está correto

namespace FindingPet.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }  // DbSet para a classe Usuario
    }
}
