using System.Collections.Generic;
using WebAPIMongoDBExample.Models;

namespace WebAPIMongoDBExample.Negocio
{
    public interface IEscolaNegocio
    {
        Escola Apagar(string id);
        Escola Atualizar(string id, Escola obj);
        Escola Inserir(Escola obj);
        Escola Obter(string id);
        List<Escola> ObterTodos();
    }
}