using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class EscolaService : IEscolaService
{
    private readonly IEscolaRepository _repo;
    private readonly ITurmaRepository _turmaRepo;

    public EscolaService(IEscolaRepository repo, ITurmaRepository turmaRepo)
    {
        _repo = repo;
        _turmaRepo = turmaRepo;
    }

    public async Task<Escola> Obter(int id)
    {
        var turmasTask = _turmaRepo.SelectAll(id);
        var escolaTask = _repo.Select(id);
        await Task.WhenAll(turmasTask, escolaTask);

        var turmas = await turmasTask;
        var retorno = await escolaTask;
        retorno.Turmas = turmas.ToList();
        return retorno;
    }

    public async Task<IEnumerable<Escola>> ObterTodos()
    {
        var retorno = await _repo.SelectAll();
        return retorno;
    }

    public async Task<Escola> Criar(Escola escola)
    {
        var retorno = await _repo.Insert(escola);
        return retorno;
    }

    public async Task Atualiza(Escola escola)
    {
        await _repo.Update(escola);
    }

    public async Task<Escola> Apaga(int id)
    {
        var escola = await _repo.Delete(id);
        return escola;
    }
}