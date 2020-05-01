using WebAPIMongoDBExample.Models;
using WebAPIMongoDBExample.Repository;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Linq;

namespace WebAPIMongoDBExample.Negocio
{
    public class EscolaNegocio: IEscolaNegocio
    {
        IEscolaRepository _repo;

        public EscolaNegocio(IEscolaRepository repo)
        {
            _repo = repo;
        }

        public List<Escola> ObterTodos()
        {
            var retorno = _repo.ObterTodos();
            return retorno;
        }

        public Escola Obter(string id)
        {
            var retorno = _repo.Obter(ObjectId.Parse(id));
            return retorno;
        }

        public Escola Inserir(Escola obj)
        {
            var objExistente = _repo.Obter(obj.Nome);
            if (objExistente != null)
            {
                throw new Excecoes.ObjetoDuplicadoException();
            }

            var retorno = _repo.Inserir(obj);
            return retorno;
        }

        public Escola Atualizar(string id, Escola obj)
        {
            var objExistente = _repo.Obter(ObjectId.Parse(id));
            if (objExistente == null)
            {
                throw new Excecoes.ObjetoNaoEncontradoException();
            }

            obj._id = objExistente._id;
            var retorno = _repo.Atualizar(obj);
            return retorno;
        }

        public Escola Apagar(string id)
        {
            var obj = _repo.Obter(ObjectId.Parse(id));
            if (obj == null)
            {
                throw new Excecoes.ObjetoNaoEncontradoException();
            }

            //if (_imobilizadoRepo.ObterPeloTipo(id).Any())
            //{
            //    throw new Excecoes.AcaoProibidaException();
            //}

            _repo.Apagar(obj._id);

            return obj;
        }
    }
}