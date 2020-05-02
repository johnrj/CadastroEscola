using System.Collections.Generic;
using System.Threading.Tasks;

public interface ITurmaService
{
    Task<Turma> Obter(int escolaId, int id);
    Task<IEnumerable<Turma>> ObterTodos(int escolaId);
    Task<Turma> Criar(Turma turma);
    Task Atualiza(Turma turma);
    Task<Turma> Apaga(int id);
}