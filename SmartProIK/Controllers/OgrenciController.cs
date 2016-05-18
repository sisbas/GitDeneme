using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SmartProIK.Controllers
{
    public class OgrenciController : Controller
    {
        // GET: Ogrenci
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Profil()
        {
            return View();
        }
        public ActionResult ProfilDuzenleme()
        {
            return View();
        }
    }
}