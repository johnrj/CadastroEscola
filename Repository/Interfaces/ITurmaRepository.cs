using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

public interface ITurmaRepository
{
    Task<IEnumerable<Turma>> SelectAll(int escolaId);
    Task<Turma> Select(int escolaId, int id);
    Task<Turma> Insert(Turma turma);
    Task Update(Turma turma);
    Task<Turma> Delete(int id);
}