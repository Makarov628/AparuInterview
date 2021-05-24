using System.ComponentModel.DataAnnotations;

namespace Aparu.UseCases.Drivers.Dtos
{
    public class ChangeDriver
    {
        [Required]
        public string Name { get; set; }
        public int? AutoId { get; set; } = null;
    }
}