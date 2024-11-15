using FindingPet.Interface;
using FindingPet.Repository;
using FindingPet.Services;
using FindingPet.Data; // Importe o namespace onde o seu DataContext está localizado
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args: args);

// Configuração da string de conexão do banco de dados MySQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Configura o DbContext para usar o MySQL
builder.Services.AddDbContext<DataContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Add services to the container.
builder.Services.AddControllers();

// Configura a injeção de dependências para os serviços e repositórios
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();

// Configura o Swagger para documentação
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure o pipeline de requisições HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
