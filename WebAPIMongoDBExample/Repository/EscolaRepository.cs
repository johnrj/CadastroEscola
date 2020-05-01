using WebAPIMongoDBExample.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace WebAPIMongoDBExample.Repository
{
    public class EscolaRepository : BaseRepository, IEscolaRepository
    {
        private IMongoCollection<Escola> colecao;

        public EscolaRepository()
        {
            colecao = db.GetCollection<Escola>("Escola");
        }

        public List<Escola> ObterTodos()
        {
            var retorno = colecao.Find(f => true).ToList();
            return retorno;
        }

        public Escola Obter(ObjectId id)
        {
            var retorno = colecao.Find(f => f._id == id).FirstOrDefault();
            return retorno;
        }

        public Escola Obter(string nome)
        {
            var retorno = colecao.Find(f => f.Nome == nome).FirstOrDefault();
            return retorno;
        }

        public Escola Inserir(Escola obj)
        {
            colecao.InsertOne(obj);
            return obj;
        }

        public Escola Atualizar(Escola obj)
        {
            colecao.ReplaceOne(u => u._id == obj._id, obj);
            return obj;
        }

        public void Apagar(ObjectId id)
        {
            colecao.DeleteOne(d => d._id == id);
        }
    }
}