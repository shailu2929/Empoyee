using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

namespace DataAccessLayer
{
    public class DAL
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["Constr"].ConnectionString);

        public DataTable crud(string Action, int Person_Id, int country_id, int state_id, int City_Id, string name,
            int age, string gender, string address, int experience , string prevcompany , string designation)
        {
            SqlCommand cmd = new SqlCommand("Proc_AddWeb", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddRange(new[]
            {
             new SqlParameter("@Action", Action),
             new SqlParameter("@Person_id", Person_Id),
             new SqlParameter("@Country_id", country_id),
             new SqlParameter("@State_id", state_id),
             new SqlParameter("@City_id", City_Id),
             new SqlParameter("@Name", name),
             new SqlParameter("@Age", age),
             new SqlParameter("@Gender", gender),
             new SqlParameter("@address", address),
             new SqlParameter("@Experience", experience),
             new SqlParameter("@prevcompany", prevcompany),
             new SqlParameter("@designation", designation)
          });
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            sda.Fill(dt);
            return dt;
        }

    }
}

