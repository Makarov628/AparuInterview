using System;

namespace Aparu.Entities
{
    public class Driver
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? AutoId { get; set; }
        public Auto Auto { get; set; }
    }
}
