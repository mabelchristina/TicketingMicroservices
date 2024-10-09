using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using TicketApp.Data;
using TicketApp.Models;

namespace TicketApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
   
    public class TicketController : ControllerBase
    {
        private readonly TicketingDbContext _context;

        public TicketController(TicketingDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetTickets()
        {
            var tickets = _context.Tickets.ToList();
            return Ok(tickets);
        }
        [HttpPost]
        public IActionResult CreateTicket(Ticket ticket)
        {
            _context.Tickets.Add(ticket);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetTickets), new { id = ticket.Id }, ticket);
        }
    }
}
