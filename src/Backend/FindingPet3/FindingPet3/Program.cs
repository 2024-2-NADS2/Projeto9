using Microsoft.EntityFrameworkCore;
using FindingPet3.Data;
using FindingPet3.Interface;
using FindingPet3.Services;
using FindingPet3.Repository;

var builder = WebApplication.CreateBuilder(args);

// Configura��o do DbContext para usar o MySQL com Pomelo
builder.Services.AddDbContext<DataContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);

// Configura��o do Swagger para documenta��o da API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Registro de servi�os e inje��o de depend�ncia
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();

// Configura��o de controle de rotas
builder.Services.AddControllers(); // Para APIs simples
// Se voc� precisar de MVC, pode adicionar .AddControllersWithViews().

// Constru��o do app
var app = builder.Build();

// Configure o pipeline de solicita��o HTTP
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProjetoPI v1"));
}
else
{
    // Para ambiente de produ��o
    app.UseExceptionHandler("/Home/Error"); // Tratamento de exce��es
    app.UseHsts(); // Habilita HTTP Strict Transport Security
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProjetoPI v1");
        c.RoutePrefix = string.Empty;  // Para exibir o Swagger na raiz
    });
}

// Ativa o CORS com a pol�tica configurada
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

// Ativa o uso de sess�o
app.UseSession();

// Ativa a autentica��o
app.UseAuthentication();  // Certifique-se de adicionar autentica��o
app.UseAuthorization();

// Mapear controladores
app.MapControllers();

app.Run();