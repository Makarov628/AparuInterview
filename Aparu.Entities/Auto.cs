using System;
using System.Collections.Generic;

namespace Aparu.Entities
{
    public class Auto
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public List<Driver> Drivers { get; set; } = new List<Driver>();
    }
}
