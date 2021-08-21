
(function ($) {   
    getcountry();
    $('#divmoreinfo').hide();
    
})(jQuery);


function getcountry() {
    try {

        $.ajax({
            url: 'Addweb_person.aspx/getcountry',
            method: "POST",
            dataType: 'json',
            data: '{}',
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var json = JSON.parse(response.d);
                var ddlcountry = $("#ddlcontry");
                $.each(json, function (i, option) {
                    ddlcountry.append($('<option/>').attr("value", option.country_id).text(option.country_name));
                });
            },
            error: function (error) {
                console.log(error.responseText);
                return false;
            },

        });

    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
};


$(function () {

    $("#ddlcontry").change(function () {
        var countryid = parseInt($(this).val());
        var ddlcity = $("#ddlcity");
        ddlcity.empty();
        ddlcity.append($("<option></option>").val('').html('Please wait ...'));
            return getstate(countryid);
    });

});

function getstate(countryid) {
    try {

        $.ajax({
            url: 'Addweb_person.aspx/getstate',
            method: "POST",
            dataType: 'json',
            data: '{ countryid : "' + countryid + '"}',
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var json = JSON.parse(response.d)
                var ddlstate = $("#ddlstate");
                ddlstate.empty();
                ddlstate.append($("<option>--Select State--</option>"));
                $.each(json, function (i, option) {
                    ddlstate.append($('<option/>').attr("value", option.state_id).text(option.StateName));
                });
            },
            error: function (error) {
                console.log(error.responseText);
                return false;
            },

        });

    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
};

$(function () {

    $("#ddlstate").change(function () {
        var StateId = parseInt($(this).val());  
        return getcity(StateId);
    });

});

function getcity(StateId) {
    try {

        $.ajax({
            url: 'Addweb_person.aspx/getcity',
            method: "POST",
            dataType: 'json',
            data: '{ stateid : "' + StateId + '"}',
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var json = JSON.parse(response.d)
                var ddlcity = $("#ddlcity");
                ddlcity.empty();
                ddlcity.append($("<option>--Select City--</option>"));
                $.each(json, function (i, option) {
                    ddlcity.append($('<option/>').attr("value", option.city_id).text(option.City_Name));
                });
            },
            error: function (error) {
                console.log(error.responseText);
                return false;
            },

        });

    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
};

$('#btnsubmit').click(function (e) {
    e.preventDefault();
    var countryid = $("#ddlcontry").val();
    var stateid = $("#ddlstate").val();
    var cityid = $("#ddlcity").val();
    var name = $("#txtname").val();
    var age = $("#txtage").val();
    var gender = $("#ddlgender").val();
    var address = $("#txtaddress").val();
    PersonEntry(countryid, stateid, cityid, name, age, gender, address);    
});



function PersonEntry(countryid, stateid, cityid, name, age,gender,address) {
    try {
        debugger;               
        $.ajax({
            url: 'Addweb_person.aspx/Insert_Person_Details',
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(
                {
                    countryid: countryid,
                    stateid: stateid,
                    cityid: cityid,
                    name : name,
                    age : age,
                    gender : gender,
                    address : address
                }),
            success: function (data) {
                alert('Record Successfully Added !!');
                $("#txtname").val('');
                $("#ddlcontry").val(0);
                $("#txtage").val('');
                $("#ddlgender").val(0);
                $("#txtaddress").val('');
                $("#ddlcity").empty();
                $("#ddlstate").empty();
                $("#ddlstate").append($("<option>--Select State--</option>"));
                $("#ddlcity").append($("<option>--Select City--</option>"));
            },
            error: function (error) {
                console.log(error.responseText);
                return false;
            },
        });
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}

$('#btnaddinfo').click(function (e) {
    e.preventDefault();
    $('#divmoreinfo').show();
    getallperson();   
});



function getallperson() {
    try {

        $.ajax({
            url: 'Addweb_person.aspx/GetALLPerson',
            method: "POST",
            dataType: 'json',
            data: '{}',
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var json = JSON.parse(response.d);
                var ddlperson = $("#ddlperson");
                $.each(json, function (i, option) {
                    ddlperson.append($('<option/>').attr("value", option.person_id).text(option.name));
                });
            },
            error: function (error) {
                console.log(error.responseText);
                return false;
            },

        });

    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
};

$('#sumbit_addinfo').click(function (e) {
    e.preventDefault();
    var personid = $("#ddlperson").val();
    var experience = $("#txtexp").val();
    var Prevcompany = $("#txtprevcompany").val();
    var designation = $("#txtdesignation").val();
    personMore_Info(personid, experience, Prevcompany, designation);
});

function personMore_Info(personid,experience, Prevcompany, designation) {
    try {
        debugger;
        $.ajax({
            url: 'Addweb_person.aspx/Insert_More_Details',
            type: "POST",
            data: '{ personid : "' + personid + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(
                {
                    personid : personid,
                    experience: experience,
                    Prevcompany: Prevcompany,
                    designation: designation
                }),
            success: function (data) {
                alert('More Info Successfully Added !!');
                $("#ddlperson").empty();
                $("#ddlperson").append($("<option>--Select Employee--</option>"));
                getallperson();
                $("#txtexp").val('');
                $("#txtprevcompany").val('');
                $("#txtdesignation").val('');
   
            },
            error: function (error) {
                console.log(error.responseText);
                return false;
            },
        });
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}


