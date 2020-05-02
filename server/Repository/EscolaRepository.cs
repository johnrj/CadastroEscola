using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class EscolaRepository : IEscolaRepository
{
    private readonly CadastroEscolaContext _context;

    public EscolaRepository(CadastroEscolaContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Escola>> SelectAll()
    {
        var retorno = await _context.Escolas.ToListAsync();
        return retorno;
    }

    public async Task<Escola> Select(int id)
    {
        var retorno = await _context.Escolas.FindAsync(id);
        return retorno;
    }

    public async Task<Escola> Insert(Escola escola)
    {
        _context.Escolas.Add(escola);
        await _context.SaveChangesAsync();
        return escola;
    }

    public async Task Update(Escola escola)
    {
        _context.Entry(escola).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch
        {
            if (EscolaExiste(escola.Id))
            {
                throw;
            }
            else
            {
                throw new Exception("Escola não existe.");
            }
        }
    }

    public async Task<Escola> Delete(int id)
    {
        var escola = await _context.Escolas.FindAsync(id);
        if (escola == null)
        {
            throw new Exception("Escola não existe.");
        }

        _context.Escolas.Remove(escola);
        await _context.SaveChangesAsync();

        return escola;
    }

    private bool EscolaExiste(int id)
    {
        return _context.Escolas.Any(a => a.Id == id);
    }
}