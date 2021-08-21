using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Data.SqlClient;
using System.Data;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using System.Web.Services;
using BusinessLogicLayer;

namespace AddWeb
{
    public partial class ShowData : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod(EnableSession = true)]
        public static string GetPerson_Report()
        {
            string JSONString = string.Empty;
            BAL objbal = new BAL();
            DataTable dt = objbal.crud("Select_Data", 0, 0, 0, 0, "", 0, "", "", 0, "", "");
            if (dt.Rows.Count > 0)
            {
                JSONString = JsonConvert.SerializeObject(dt);
            }
            return JSONString;
        }
    }
}