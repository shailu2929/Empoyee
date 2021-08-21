
(function ($) {    
    getcountry();

})(jQuery);


function getcountry() {
    try {   
        $.post("WebForm1.aspx", {
            action: 'getcountry'
        }).done(function (data) {            
            var json = JSON.parse(data);               
                var ddlcountry = $("#ddlcontry");
                $.each(json, function (i, option) {
                    ddlcountry.append($('<option/>').attr("value", option.country_id).text(option.country_name));
                });
        });




        //$.ajax({
        //    url: 'Person_Info.aspx/getcountry',
        //    method: "POST",
        //    dataType: 'json',
        //    data: '{}',
        //    contentType: "application/json; charset=utf-8",
        //    success: function (response) {
        //        var json = JSON.parse(response.d)
        //        alert(json)
        //        var ddlcountry = $("#ddlcontry");
        //        $.each(json, function (i, option) {
        //            ddlcountry.append($('<option/>').attr("value", option.country_id).text(option.country_name));
        //        });
        //    },
        //    error: function (error) {
        //        console.log(error.responseText);
        //        return false;
        //    },

        //});

    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
};
