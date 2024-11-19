using Microsoft.EntityFrameworkCore;
using FindingPet3.Model; // Certifique-se de que o namespace está correto

namespace FindingPet3.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }  // DbSet para a classe Usuario

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Define a chave primária como `Id` e configura o auto-incremento
            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(u => u.Id); // Define o campo `Id` como chave primária
                entity.Property(u => u.Id)
                      .ValueGeneratedOnAdd(); // Define que `Id` será gerado automaticamente

                // Configurações adicionais para a tabela
                entity.ToTable("Usuarios"); // Nome da tabela no banco
                entity.Property(u => u.Nome).IsRequired().HasMaxLength(100);
                entity.Property(u => u.Email).IsRequired().HasMaxLength(150);
                entity.Property(u => u.Senha).IsRequired().HasMaxLength(50);
                entity.Property(u => u.Cpf).IsRequired();
                entity.Property(u => u.Estado).IsRequired().HasMaxLength(50);
                entity.Property(u => u.Endereco).IsRequired().HasMaxLength(255);
                entity.Property(u => u.NumeroEndereco).IsRequired();
            });
        }
    }
}
