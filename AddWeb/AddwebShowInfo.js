(function ($) {
    GetEmployeeReport();
})(jQuery);

function GetEmployeeReport() {
    try {
        debugger;
        $.ajax({
            url: 'ShowData.aspx/GetPerson_Report',
            type: "POST",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                $('#divpersonshow').show();
                var json = JSON.parse(response.d);
                $('#table3').DataTable({
                    data: json,
                    "searching": true,

                    columns: [
                                {
                                    title: 'Employee Name',
                                    data: 'name'
                                },

                                {
                                    title: 'Employee Age',
                                    data: 'age'
                                },
                                {
                                    title: 'Employee Gender',
                                    data: 'Gender'
                                },
                                 {
                                    title: 'Employee Address',
                                    data: 'address'
                                 },
                                 {
                                    title: 'Employee Country',
                                    data: 'Country_Name'
                                 },
                                 {
                                    title: 'Employee State',
                                    data: 'StateName'
                                 },
                                 {
                                    title: 'Employee City',
                                    data: 'City_Name'
                                 },
                                 {
                                     title: 'Employee Experience',
                                     data: 'experience'
                                 },
                                 {
                                     title: 'Employee Prev Company',
                                     data: 'Prev_Company'
                                 },
                                 {
                                     title: 'Employee Designation',
                                     data: 'designation'
                                 },
                    ]

                });
                $("#table3 th").css({ "background-color": "LightBlue" });
                $("#table3").css({ "font-size": "15px" });
                $("#table3").css({ "color": "black" });
            },
            error: function (error) {
                alert(error.responseText);
            }
        });
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }

};