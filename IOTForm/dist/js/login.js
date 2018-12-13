$(document).ready(function () {
    $("#formLogin input").on("change", function () {
        $("#erro").hide();
    })

    $("#formLogin").submit(function () {
        setCookie("admin",0);
        voltarAdmin();
        /* var login = $("#login").val();
        var senha = $("#senha").val();
        $.ajax({
            url: "https://iotforms-api.azurewebsites.net/login",
            data: { email: login, senha: senha },
            method: 'POST',
            success: function (result) {
                var cookiename = result.IdCliente == 0 ? "clienteid" : "admin" ;
                setCookie(cookiename,result.clienteid);
            },
            error: function (error) {
                $("#erro").show();
            } 
        });*/
    })
});

