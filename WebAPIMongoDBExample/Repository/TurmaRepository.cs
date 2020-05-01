using WebAPIMongoDBExample.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace WebAPIMongoDBExample.Repository
{
    public class TurmaRepository : BaseRepository//, ITurmaRepository
    {
        private IMongoCollection<Escola> colecao;

        public TurmaRepository()
        {
            colecao = db.GetCollection<Escola>("Escola");
        }

        private List<Turma> ObterTurmas(ObjectId escolaId)
        {
            return colecao.Find(f => f._id == escolaId).FirstOrDefault().Turmas;
        }

        public List<Turma> Obter(ObjectId escolaId)
        {
            return ObterTurmas(escolaId);
        }

        public Turma Obter(ObjectId escolaId, ObjectId turmaId)
        {
            var turmas = ObterTurmas(escolaId);
            return turmas.Where(t=>t._id == turmaId).FirstOrDefault();
        }

        public Turma Inserir(ObjectId escolaId, Turma obj)
        {
            var turmas = ObterTurmas(escolaId);
            turmas.Add(obj);
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