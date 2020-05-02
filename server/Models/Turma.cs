public class Turma
{
    public int Id { get; set; }
    public int EscolaId { get; set; }
    public Escola Escola { get; set; }
    public int Numero { get; set; }
    public int NumeroAlunos { get; set; }
}