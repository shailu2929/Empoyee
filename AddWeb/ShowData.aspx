<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ShowData.aspx.cs" Inherits="AddWeb.ShowData" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
             <div class="row row-centered">
                                 <div class="row row-centered">
                                       <input type="button"  onclick="location.href = 'Addweb_person.aspx';" id="btngotoentrypage" value="Back"/>
                                  </div>
                              </div>
        </div>
    <div>
      <div class="row centered-form">
            <div class="panel-body padding:0px" style="width: 100%">
                <div class="panel panel-default " style="box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 10px; margin-left: 4px; margin-right: 4px; margin-bottom: 4px; margin-top: 0px;">
                    <div id="divpersonshow" style="margin-left: 100px; margin-right: 100px;">
                    <div class="row row-centered">
                        <br />
                          <div class="col-lg-12 col-lg-12 col-lg-12">
                              <table id="table3" class="display cell-border table-striped table-bordered" cellspacing="0" width="100%">
                              </table>
                          </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </form>
</body>
  <script type="text/javascript" src="jquery.js"></script>
      <script src="AddwebShowInfo.js"></script>
    <script type="text/javascript" src="//cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="//cdn.datatables.net/buttons/1.7.1/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="jquery.dataTables.min.js"></script>
     <link href="../jquery.dataTables.min.css" rel="stylesheet" />
    <link href="../buttons.dataTables.min.css" rel="stylesheet" />

</html>
