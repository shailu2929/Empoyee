using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessLogicLayer;

namespace AddWeb
{
    public partial class Addweb_person : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //getcountry();
        }

        [WebMethod(EnableSession = true)]
        public static string getcountry()
        {
            string JSONString = string.Empty;
            BAL objbl = new BAL();
            DataTable dt = objbl.crud("get_country", 0, 0, 0, 0, "", 0, "", "",0,"","");
            if (dt.Rows.Count > 0)
            {
                JSONString = JsonConvert.SerializeObject(dt);
            }
            return JSONString;
        }
        [WebMethod(EnableSession = true)]
        public static string getstate(int countryid)
        {
            string JSONString = string.Empty;
            BAL objbl = new BAL();
            DataTable dt = objbl.crud("get_state", 0, countryid, 0, 0, "", 0, "", "",0,"","");
            if (dt.Rows.Count > 0)
            {
                JSONString = JsonConvert.SerializeObject(dt);
            }
            return JSONString;
        }

        [WebMethod(EnableSession = true)]
        public static string getcity(int stateid)
        {
            string JSONString = string.Empty;
            BAL objbl = new BAL();
            DataTable dt = objbl.crud("get_city", 0, 0, stateid, 0, "", 0, "", "",0,"","");
            if (dt.Rows.Count > 0)
            {
                JSONString = JsonConvert.SerializeObject(dt);
            }
            return JSONString;
        }

        [WebMethod(EnableSession = true)]
        public static string Insert_Person_Details(int countryid, int stateid, int cityid, string name, int age, string gender, string address)
        {
            string JSONString = string.Empty;
            BAL objbl = new BAL();
            DataTable dt = objbl.crud("Insert_Details", 0, countryid, stateid, cityid, name, age, gender, address,0,"","");
            if (dt.Rows.Count > 0)
            {
                JSONString = JsonConvert.SerializeObject(dt);
            }
            return JSONString;
        }

        [WebMethod(EnableSession = true)]
        public static string GetALLPerson()
        {
            string JSONString = string.Empty;
            BAL objbl = new BAL();
            DataTable dt = objbl.crud("GetAllPerson", 0, 0, 0, 0, "", 0, "", "", 0, "", "");
            if (dt.Rows.Count > 0)
            {
                JSONString = JsonConvert.SerializeObject(dt);
            }
            return JSONString;
        }

        [WebMethod(EnableSession = true)]
        public static string Insert_More_Details(int personid, int experience, string Prevcompany, string designation)
        {
            string JSONString = string.Empty;
            BAL objbl = new BAL();
            DataTable dt = objbl.crud("Insert_More_Details", personid, 0, 0, 0, "", 0, "", "", experience, Prevcompany, designation);
            if (dt.Rows.Count > 0) 
            {
                JSONString = JsonConvert.SerializeObject(dt);
            }
            return JSONString;
        }
    }
}