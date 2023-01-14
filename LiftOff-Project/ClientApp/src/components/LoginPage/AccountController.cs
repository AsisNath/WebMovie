using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LiftOff_Project.Models;
using LiftOff_Project.ClientApp.src.components.API;


namespace LiftOff_Project.ClientApp.src.components.LoginPage
{
    [ApiController]
    [Route("api/[controller]")]

    public class AccountController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly AccessToken _accessToken;
        public AccountController(UserManager<User> userManager, AccessToken accessToken)
        {
            _accessToken = accessToken;
            _userManager = userManager;
        }
    }
}