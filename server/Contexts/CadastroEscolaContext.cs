using Microsoft.EntityFrameworkCore;

public class CadastroEscolaContext : DbContext
{
    public CadastroEscolaContext(DbContextOptions<CadastroEscolaContext> options) : base(options)
    {
    }

    public DbSet<Escola> Escolas { get; set; }
    public DbSet<Turma> Turmas { get; set; }
}