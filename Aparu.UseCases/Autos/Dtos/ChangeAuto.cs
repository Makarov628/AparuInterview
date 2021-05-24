using System.ComponentModel.DataAnnotations;

namespace Aparu.UseCases.Autos.Dtos
{
    public class ChangeAuto
    {
        [Required]
        public string Brand { get; set; }

        [Required]
        public string Model { get; set; }
    }
}