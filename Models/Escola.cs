using System.Collections.Generic;

public class Escola
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Endereco { get; set; }
    public List<Turma> Turmas { get; set; }
}
