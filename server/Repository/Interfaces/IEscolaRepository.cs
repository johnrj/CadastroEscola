using System.Collections.Generic;
using System.Threading.Tasks;

public interface IEscolaRepository
{
    Task<IEnumerable<Escola>> SelectAll();
    Task<Escola> Select(int id);
    Task<Escola> Insert(Escola escola);
    Task Update(Escola escola);
    Task<Escola> Delete(int id);
}