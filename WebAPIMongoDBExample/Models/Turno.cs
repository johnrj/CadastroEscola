using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebAPIMongoDBExample.Models
{
    public class Turno : DocumentoBase
    {
        public string Nome { get; set; }
        public string HoraInicio { get; set; }
        public string HoraFim { get; set; }
        public string[] DiasDaSemana { get; set; }
    }
}