using System.ComponentModel.DataAnnotations;

namespace TicketApp.Models
{
    public class LoginReq
    {
        public string? Username { get; set; }

        public string? Password { get; set; }
    }
}
