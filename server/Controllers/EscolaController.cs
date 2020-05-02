using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace CadastroEscola.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EscolaController : ControllerBase
    {
        private readonly IEscolaService _escolaService;
        private readonly ITurmaService _turmaService;

        public EscolaController(IEscolaService escolaService, ITurmaService turmaService)
        {
            _escolaService = escolaService;
            _turmaService = turmaService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Escola>>> GetEscolas()
        {
            return new JsonResult(await _escolaService.ObterTodos());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Escola>> GetEscola(int id)
        {
            var escola = await _escolaService.Obter(id);

            if (escola == null)
            {
                return NotFound();
            }
            return escola;
        }

        [HttpGet("{id}/turma")]
        public async Task<ActionResult<IEnumerable<Turma>>> GetTurmas(int id)
        {
            var turmas = await _turmaService.ObterTodos(id);

            if (turmas == null)
            {
                return NotFound();
            }

            return new JsonResult(turmas);
        }

        [HttpGet("{escolaId}/turma/{id}")]
        public async Task<ActionResult<IEnumerable<Turma>>> GetTurma(int escolaId, int id)
        {
            var turma = await _turmaService.Obter(escolaId, id);

            if (turma == null)
            {
                return NotFound();
            }

            return new JsonResult(turma);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEscola(int id, Escola escola)
        {
            if (id != escola.Id)
            {
                return BadRequest();
            }

            await _escolaService.Atualiza(escola);
            return NoContent();
        }

        [HttpPut("{escolaId}/turma/{id}")]
        public async Task<IActionResult> PutTurma(int escolaId, int id, Turma turma)
        {
            if (id != turma.Id)
            {
                return BadRequest();
            }

            await _turmaService.Atualiza(turma);
            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Escola>> PostEscola(Escola escola)
        {
            var novaEscola = await _escolaService.Criar(escola);
            return CreatedAtAction(nameof(GetEscola), new { id = novaEscola.Id }, novaEscola);
        }

        [HttpPost("{escolaId}/turma")]
        public async Task<ActionResult<Turma>> PostTurma(int escolaId, Turma turma)
        {
            turma.EscolaId = escolaId;
            var turmaCriada = await _turmaService.Criar(turma);

            return CreatedAtAction(nameof(GetTurma), new { escolaId = escolaId, id = turmaCriada.Id }, turmaCriada);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Escola>> DeleteEscola(int id)
        {
            var escola = await _escolaService.Apaga(id);
            return escola;
        }

        [HttpDelete("{escolaId}/turma/{id}")]
        public async Task<ActionResult<Turma>> DeleteTurma(int escolaId, int id)
        {
            var turma = await _turmaService.Apaga(id);
            if (turma == null)
            {
                return NotFound();
            }
            return turma;
        }
    }
}
