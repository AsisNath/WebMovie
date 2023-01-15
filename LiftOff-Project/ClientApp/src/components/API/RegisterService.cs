using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
/* this can be used to validate uer entry 
( no dublicate email and complex password etc.) when the user create account 
*/
namespace LiftOff_Project.ClientApp.src.components.API
{
    public class RegisterService
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage = " Weak Password")]
        public string Password { get; set; }

        [Required]
        public string DisplayName { get; set; }

        [Required]
        public string Username { get; set; }
    }
        
}
