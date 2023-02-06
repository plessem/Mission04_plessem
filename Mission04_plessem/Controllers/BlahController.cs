using Microsoft.AspNetCore.Mvc;
using Mission04_plessem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_plessem.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Calculator ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calculator(Calculator model)
        {
            return View();
        }
    }
}
