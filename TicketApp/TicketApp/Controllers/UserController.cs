using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TicketApp.Data;
using TicketApp.Models;

namespace TicketApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly TicketingDbContext _context;
        private readonly AuthService _authService;

        public UserController(TicketingDbContext context, AuthService authService)
        {
            _context = context;
            _authService = authService;
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(user);
        }

        [HttpPost("login")]
        public IActionResult Login(LoginReq loginReq)
        {
            var token = _authService.Authenticate(loginReq.Username, loginReq.Password);
            if (token == null) return Unauthorized();
            return Ok(new { Token = token });
        }
    }
}