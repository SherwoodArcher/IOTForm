using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IOTForm.Controllers
{
    public class AdminController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return PartialView("_Home");
        }

        public ActionResult AdicionarCliente()
        {
            return PartialView("_AdicionarCliente");
        }

        public ActionResult VisualizarClientes()
        {
            return PartialView("_VisualizarClientes");
        }
    }
}