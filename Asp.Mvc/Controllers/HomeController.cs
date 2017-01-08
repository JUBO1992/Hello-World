using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AspMvc.Controllers
{
    public class HomeController : Controller
    {
        public static readonly string[] NeedArcgisJsApiUrls =
        {
            "/digitalMap"
        };
        public IActionResult Index()
        {
            ViewBag.NeedArcgisJsApi = NeedArcgisJsApiUrls.Contains(HttpContext.Request.Path.Value);
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
