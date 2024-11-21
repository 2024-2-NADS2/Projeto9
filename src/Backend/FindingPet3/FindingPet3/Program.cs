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

// Configure o pipeline de solicitação HTTP
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProjetoPI v1"));
}
else
{
    // Para ambiente de produção
    app.UseExceptionHandler("/Home/Error"); // Tratamento de exceções
    app.UseHsts(); // Habilita HTTP Strict Transport Security
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProjetoPI v1");
        c.RoutePrefix = string.Empty;  // Para exibir o Swagger na raiz
    });
}

// Ativa o CORS com a política configurada
app.UseCors("AllowLocalhost");
app.Use(async (context, next) =>
{
    if (context.Request.Method == "OPTIONS")
    {
        context.Response.StatusCode = 200;
        await context.Response.CompleteAsync();
        return;
    }
    await next();
});

// Ativa o uso de sessão
app.UseSession();

// Ativa a autenticação
app.UseAuthentication();  // Certifique-se de adicionar autenticação
app.UseAuthorization();

// Mapear controladores
app.MapControllers();

app.Run();