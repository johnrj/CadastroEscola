using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class TurmaRepository : ITurmaRepository
{
    private readonly CadastroEscolaContext _context;

    public TurmaRepository(CadastroEscolaContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Turma>> SelectAll(int escolaId)
    {
        var retorno = await _context.Turmas.Where(w => w.EscolaId == escolaId).ToListAsync();
        return retorno;
    }

    public async Task<Turma> Select(int escolaId, int id)
    {
        var retorno = await _context.Turmas.Where(w => w.EscolaId == escolaId && w.Id == id).FirstOrDefaultAsync();
        return retorno;
    }

    public async Task<Turma> Insert(Turma turma)
    {
        _context.Turmas.Add(turma);
        await _context.SaveChangesAsync();
        return turma;
    }

    public async Task Update(Turma turma)
    {
        _context.Entry(turma).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch
        {
            if (TurmaExists(turma.Id) && EscolaExists(turma.EscolaId))
            {
                throw;
            }
            else
            {
                throw new Exception("Turma ou escola não existe."); ;
            }
        }
    }

    public async Task<Turma> Delete(int id)
    {
        var turma = await _context.Turmas.FindAsync(id);
        if (turma == null)
        {
            throw new Exception("Turma não existe.");
        }

        _context.Turmas.Remove(turma);
        await _context.SaveChangesAsync();

        return turma;
    }

    private bool TurmaExists(int id)
    {
        return _context.Turmas.Any(a => a.Id == id);
    }

    private bool EscolaExists(int id)
    {
        return _context.Escolas.Any(a => a.Id == id);
    }
}