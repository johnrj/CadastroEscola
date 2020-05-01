using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebAPIMongoDBExample.Models
{
    public class Turma : DocumentoBase
    {
        public int Numero { get; set; }
        public Turno Turno { get; set; }
        public int NumeroAlunos { get; set; }
    }
}