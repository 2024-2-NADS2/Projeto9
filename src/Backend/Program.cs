using Microsoft.EntityFrameworkCore;
using FindingPet3.Data;
using FindingPet3.Interface;
using FindingPet3.Services;
using FindingPet3.Repository;

var builder = WebApplication.CreateBuilder(args);

// Configuração do DbContext para usar o MySQL com Pomelo
builder.Services.AddDbContext<DataContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);

// Configuração do Swagger para documentação da API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Registro de serviços e injeção de dependência
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();

// Configuração de controle de rotas
builder.Services.AddControllers(); // Para APIs simples
// Se você precisar de MVC, pode adicionar .AddControllersWithViews().

// Construção do app
var app = builder.Build();

// Configuração do pipeline de requisições HTTP
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts(); // Reforça o uso de HTTPS no ambiente de produção
}

app.UseHttpsRedirection();
app.UseStaticFiles(); // Para servir arquivos estáticos (CSS, JS, etc.)
app.UseRouting();

app.UseAuthorization(); // Certifique-se de adicionar isso se usar autenticação

// Mapear controllers da API
app.MapControllers();

// Inicializar a aplicação
app.Run();
