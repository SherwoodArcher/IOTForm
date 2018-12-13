using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IOTForm.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return PartialView("_Dashboard");
        }

        public ActionResult MeusDados()
        {
            return PartialView("_MeusDados");
        }

        public ActionResult MeusProjetos()
        {
            return PartialView("_MeusProjetos");
        }

        public ActionResult Projeto()
        {
            return PartialView("_Projeto");
        }

        public ActionResult FormularioGeral()
        {
            return PartialView("_FormularioGeral");
        }
        
        public ActionResult AtivosDevices()
        {
            return PartialView("_AtivosDevices");
        }

        public ActionResult ComunicacaoConectividade()
        {
            return PartialView("_ComunicacaoConectividade");
        }

        public ActionResult ServicosBackend()
        {
            return PartialView("_ServicosBackend");
        }

        public ActionResult PadroesRequerimentos()
        {
            return PartialView("_PadroesRequerimentos");
        }

        public ActionResult AmbienteProjeto()
        {
            return PartialView("_AmbienteProjeto");
        }
    }
}