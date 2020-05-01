using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CadastroEscola.Models;

namespace CadastroEscola.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EscolaController : ControllerBase
    {
        private readonly CadastroEscolaContext _context;

        public EscolaController(CadastroEscolaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Escola>>> GetEscolas()
        {
            return await _context.Escolas.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Escola>> GetEscola(int id)
        {
            var escola = await _context.Escolas.FindAsync(id);

            if (escola == null)
            {
                return NotFound();
            }

            return escola;
        }

        [HttpGet("{id}/turma")]
        public async Task<ActionResult<IEnumerable<Turma>>> GetTurmas(int id)
        {
            var turmas = await _context.Turmas.Where(w => w.Id == id).ToListAsync();

            if (turmas == null)
            {
                return NotFound();
            }

            return turmas;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEscola(int id, Escola escola)
        {
            if (id != escola.Id)
            {
                return BadRequest();
            }

            _context.Entry(escola).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EscolaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Escola>> PostEscola(Escola escola)
        {
            _context.Escolas.Add(escola);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEscola), new { id = escola.Id }, escola);
        }

        [HttpPost("{escolaId}/turma")]
        public async Task<ActionResult<Turma>> PostTurma(int escolaId, Turma turma)
        {
            turma.EscolaId = escolaId;
            _context.Turmas.Add(turma);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEscola), new { id = turma.Id }, turma);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Escola>> DeleteEscola(int id)
        {
            var escola = await _context.Escolas.FindAsync(id);
            if (escola == null)
            {
                return NotFound();
            }

            _context.Escolas.Remove(escola);
            await _context.SaveChangesAsync();

            return escola;
        }

        private bool EscolaExists(int id)
        {
            return _context.Escolas.Any(e => e.Id == id);
        }
    }
}
