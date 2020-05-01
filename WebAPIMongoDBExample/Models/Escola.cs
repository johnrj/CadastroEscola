using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebAPIMongoDBExample.Models
{
    public class Escola : DocumentoBase
    {
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public List<Turno> Turnos { get; set; }
        public List<Turma> Turmas { get; set; }
    }
}