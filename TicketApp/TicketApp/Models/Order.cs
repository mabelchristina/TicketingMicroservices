using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace TicketApp.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        public int UserId { get; set; }

        public string TicketId { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.Now;

        public virtual User User { get; set; }
    }
}
