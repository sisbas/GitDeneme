using SmartProIK.Models.db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SmartProIK.Controllers
{
    public class OgrenciController : Controller
    {
        public Iller_DBEntities entIller = new Iller_DBEntities();
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
        
        [HttpPost]
        public JsonResult Iller()
        {
            return Json(entIller.iller.Select(i=>new {
                il_id =i.id,
                il_ad = i.sehir
            }));
        }

        [HttpPost]
        public JsonResult Ilceler(string gelenID)
        {
            var intId = Convert.ToInt32(gelenID);            
            return Json(entIller.ilceler.Where(i => i.iller.id == 2).Select(i => i.ilce));
        }
    }
}