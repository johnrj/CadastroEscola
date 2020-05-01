using WebAPIMongoDBExample.Models;
using WebAPIMongoDBExample.Negocio;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebAPIMongoDBExample.Controllers
{
    public class EscolaController : ApiController
    {
        IEscolaNegocio _negocio;
        public EscolaController(IEscolaNegocio negocio)
        {
            _negocio = negocio;
        }

        [ResponseType(typeof(List<Escola>))]
        public IHttpActionResult GetEscola()
        {
            try
            {
                var retorno = _negocio.ObterTodos();
                return Ok(retorno);
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [ResponseType(typeof(Escola))]
        public IHttpActionResult GetEscola(string id)
        {
            try
            {
                var retorno = _negocio.Obter(id);
                return Ok(retorno);
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [ResponseType(typeof(Escola))]
        public IHttpActionResult PostEscola(Escola obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            try
            {
                var retorno = _negocio.Inserir(obj);
                return Created("DefaultApi", retorno);
            }
            catch (Excecoes.ObjetoDuplicadoException)
            {
                return Conflict();
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [ResponseType(typeof(Escola))]
        public IHttpActionResult PutTipoImobilizado([FromUri] string id, [FromBody] Escola obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var retorno = _negocio.Atualizar(id, obj);
                return Ok(retorno);
            }
            catch (Excecoes.ObjetoNaoEncontradoException)
            {
                return NotFound();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [ResponseType(typeof(Escola))]
        public IHttpActionResult DeleteTipoImobilizado(string id)
        {
            try
            {
                var retorno = _negocio.Apagar(id);
                return Ok(retorno);
            }
            catch (Excecoes.ObjetoNaoEncontradoException)
            {
                return NotFound();
            }
            catch (Excecoes.AcaoProibidaException)
            {
                return StatusCode(HttpStatusCode.Forbidden);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
