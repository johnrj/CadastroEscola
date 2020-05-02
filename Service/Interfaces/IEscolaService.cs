using System.Collections.Generic;
using System.Threading.Tasks;

public interface IEscolaService
{
    Task<Escola> Obter(int id);
    Task<IEnumerable<Escola>> ObterTodos();
    Task<Escola> Criar(Escola escola);
    Task Atualiza(Escola escola);
    Task<Escola> Apaga(int id);
}