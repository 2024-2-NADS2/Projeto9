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

// Configura��o do pipeline de requisi��es HTTP
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts(); // Refor�a o uso de HTTPS no ambiente de produ��o
}

app.UseHttpsRedirection();
app.UseStaticFiles(); // Para servir arquivos est�ticos (CSS, JS, etc.)
app.UseRouting();

app.UseAuthorization(); // Certifique-se de adicionar isso se usar autentica��o

// Mapear controllers da API
app.MapControllers();

// Inicializar a aplica��o
app.Run();
