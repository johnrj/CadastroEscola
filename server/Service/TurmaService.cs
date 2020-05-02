using System.Collections.Generic;
using System.Threading.Tasks;

public class TurmaService : ITurmaService
{
    private readonly ITurmaRepository _repo;

    public TurmaService(ITurmaRepository repo)
    {
        _repo = repo;
    }

    public async Task<Turma> Obter(int escolaId, int id)
    {
        var retorno = await _repo.Select(escolaId, id);
        return retorno;
    }

    public async Task<IEnumerable<Turma>> ObterTodos(int escolaId)
    {
        var retorno = await _repo.SelectAll(escolaId);
        return retorno;
    }

    public async Task<Turma> Criar(Turma turma)
    {
        var retorno = await _repo.Insert(turma);
        return retorno;
    }

    public async Task Atualiza(Turma turma)
    {
        await _repo.Update(turma);
    }

    public async Task<Turma> Apaga(int id)
    {
        var turma = await _repo.Delete(id);
        return turma;
    }
}