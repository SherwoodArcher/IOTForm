$(document).ready(function () {
    $("#formLogin input").on("change", function () {
        $("#erro").hide();
    })

    $("#formLogin").submit(function (e) {
        e.preventDefault();
        var login = $("#login").val();
        var senha = $("#senha").val();
        $.ajax({
            url: "https://iotforms-api.azurewebsites.net/login",
            data: { email: login, senha: senha },
            method: 'POST',
            success: function (result) {
                setCookie("token",result.token);
                setCookie("clienteid",result.IdCliente)
                entrarSistema();
            },
            error: function (error) {
                $("#erro").show();
            } 
        });
    })
});

