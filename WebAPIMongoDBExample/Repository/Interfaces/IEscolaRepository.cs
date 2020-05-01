using System.Collections.Generic;
using MongoDB.Bson;
using WebAPIMongoDBExample.Models;

namespace WebAPIMongoDBExample.Repository
{
    public interface IEscolaRepository
    {
        void Apagar(ObjectId id);
        Escola Atualizar(Escola obj);
        Escola Inserir(Escola obj);
        Escola Obter(ObjectId id);
        Escola Obter(string nome);
        List<Escola> ObterTodos();
    }
}