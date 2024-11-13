using FindingPet.Interface;
using FindingPet.Repository;
using FindingPet.Services;
using FindingPet.Data; // Importe o namespace onde o seu DataContext est� localizado
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args: args);

// Configura��o da string de conex�o do banco de dados MySQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Configura o DbContext para usar o MySQL
builder.Services.AddDbContext<DataContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Add services to the container.
builder.Services.AddControllers();

// Configura a inje��o de depend�ncias para os servi�os e reposit�rios
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();

// Configura o Swagger para documenta��o
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure o pipeline de requisi��es HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
