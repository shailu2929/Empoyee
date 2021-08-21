using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using DataAccessLayer;


namespace BusinessLogicLayer
{
    public class BAL
    {
        DAL objdal = new DAL();

        public DataTable crud(string Action, int Person_Id, int country_id, int state_id, int City_Id, string name, int age, string gender, string address, int experience, string prevcompany, string designation)
        {
            return objdal.crud(Action, Person_Id, country_id, state_id, City_Id, name, age, gender, address, experience ,  prevcompany , designation);
        }
    }
}
