$(document).ready(function () {
    $("#formLogin input").on("change", function () {
        $("#erro").hide();
    })

    $("#formLogin").submit(function () {
        var login = $("#login").val();
        var senha = $("#senha").val();
        $.ajax({
            url: "https://iotforms-api.azurewebsites.net/",
            data: { login: login, senha: senha },
            method: 'post',
            contentType: "application/json",
            success: function (result) {
                if (result.code) {
                    var cookiename = result.clienteid == 0 ? "clienteid" : "admin" ;
                    setCookie(cookiename,result.clienteid);
                } else {
                    $("#erro").show();
                }
            },
            error: function (error) {
                $("#erro").show();
            }
        });
    })
});

