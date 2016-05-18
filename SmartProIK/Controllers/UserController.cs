using SmartProIK.Models.db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SmartProIK.Controllers
{
    public class UserController : Controller
    {
        IKDBEntities1 ent = new IKDBEntities1();
        // GET: User
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(Kullanicilar usr)
        {
            if (!string.IsNullOrEmpty(usr.kullaniciAdi))
            {
                if (ent.Kullanicilar.Select(i => i.kullaniciAdi).ToString() == usr.kullaniciAdi)
                {
                    if (ent.Kullanicilar.Select(i => i.sifre).ToString() == usr.sifre)
                    {
                        return Redirect(Url.Action("Index", "Home"));
                    }
                    else
                    {
                        Response.Write("<script>alert('Kullanıcı adı veya şifre yanlış')</script>");
                    }
                }
                else
                {
                    Response.Write("<script>alert('Kullanıcı adı veya şifre yanlış')</script>");
                }
            }
            else if (string.IsNullOrEmpty(usr.kullaniciAdi))
            {
                Response.Write("<script>alert('Kullanıcı adı veya şifrenizi kontrol ediniz')</script>");
            }
            return null;
        }
        public ActionResult KayitOl()
        {
            return View();
        }
        [HttpPost]
        public ActionResult KayitOl(Kullanicilar usr)
        {
            //todo: kurum adım dolu geliyorsa yetkiıd =2, portalno ile dolu gelirse yetkiıd=1
            //todo: client taraflı validation işlemleri
            //todo: kullaniciadi benzersiz olmalı. bu yüzden kontrol edilmeli varsa aynı kullanıcı adı kullanılmamalı
            if (!string.IsNullOrEmpty(usr.sinifPortalNumarasi))
            {
                usr.yektiid = 1;
                usr.sirketAdi = "Öğrenci";                
            }
            else
            {
                usr.yektiid = 2;
                usr.sinifPortalNumarasi = "-1";
            }
            if (ent.Kullanicilar.Any(k=>k.kullaniciAdi==usr.kullaniciAdi))
            {
                Response.Write("<script>alert('asdasdasdasdasdasda')</script>");
            }
            else
            {
                usr.kayittarihi = DateTime.Now;
                usr.onay = false;
                ent.Kullanicilar.Add(usr);
                ent.SaveChanges();
                Response.Write("<script>alert('Başarılı')</script>");
            }
                      
            
                return View();
        }
        public ActionResult Test()
        {
            return View();
        }
        
    }
}