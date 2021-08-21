<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Addweb_person.aspx.cs" Inherits="AddWeb.Addweb_person" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <div class="row centered-form">
            <div class="panel-body padding:0px" style="width: 100%">
            <span id="lbldeveloper" class="Olabel" style="font-size: 30px; font-weight: 100;">Person Demographics</span>
                <div class="panel panel-default " style="box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 10px; margin-left: 4px; margin-right: 4px; margin-bottom: 4px; margin-top: 0px;">
                    <div style="margin-left: 100px; margin-right: 100px;">
                        <div id="divpersoninfo" runat="server" visible="true" style="margin-left: 300px; margin-right: 258px;">
                                        <div class="row row-centered">

                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">Name</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <input type="text" id="txtname" name="name"/>
                                            </div>

                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">Age</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <input type="text" id="txtage" name="age"/>
                                            </div>

                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">Gender</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <select name="gender" id="ddlgender">
                                              <option value="0">--Select Gender--</option>
                                              <option value="1">Male</option>
                                              <option value="2">Female</option>
                                            </select>
                                            </div>

                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">Address</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                                <input type="text" id="txtaddress" name="address"/>
                                            </div>

                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">Country</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <select name="Country"  id="ddlcontry">
                                                <option value="0" >--Select Country--</option>
                                            </select>
                                            </div>

                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">State</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <select name="State" id="ddlstate">
                                                <option value="0" >--Select State--</option>
                                            </select>
                                            </div>

                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">City</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <select name="City" id="ddlcity">
                                                <option value="0" >--Select City--</option>
                                            </select>
                                            </div>

                                        </div>
                            <br />
                                        <div class="row row-centered">
                                            <input type="submit" id="btnsubmit" value="Submit"/>
                                        </div>

                                    </div>
                    </div>


                    <br />
                    <br />
                             <div class="row row-centered">
                                 <div class="row row-centered">
                                       <input type="submit" id="btnaddinfo" value="Click for Add More Information About Person"/> <input type="button" style="margin-left:50%;"  onclick="location.href = 'ShowData.aspx';" id="btnshowreport" value="Click for Show All Data"/>
                                  </div>
                              </div>
                    <br />
                        </div>
            </div>
    </div>

    <div id="divmoreinfo" style="margin-left: 100px; margin-right: 100px;">
                         <div class="row row-centered">
                               <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">Select Employee whom you wants to add more Info</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <select name="Emploee"  id="ddlperson">
                                                <option value="0" >--Select Employee--</option>
                                            </select>
                                            </div>
                             </div>
                                 <div class="row row-centered">
                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name"> Total Experience</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <input type="text" id="txtexp" name="name"/>
                                            </div>

                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">Previous Company</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <input type="text" id="txtprevcompany" name="name"/>
                                            </div>

                                            <div class="col-sm-2 col-md-2 col-lg-2 text-right">
                                                <label for="name">Designation</label>
                                            </div>
                                            <div class="col-sm-10 col-md-10 col-lg-10">
                                            <input type="text" id="txtdesignation" name="name"/>
                                            </div>
                                  </div>

                                <br />
                                        <div class="row row-centered">
                                            <input type="submit" id="sumbit_addinfo" value="Submit More Info"/>
                                        </div>
                    </div>

    </div>
    </form>
</body>

<script type="text/javascript" src="jquery.js"></script>
<script src="addweb.js"></script>
</html>
