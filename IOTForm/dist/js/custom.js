function checkValue(value){
    if(!isUndefined(value)){
        return value;
    }
    return "";
}

function deleteCookie(cname){
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getAPIContent(url, data, callback) {
    var cliente = getCookie("clienteid");
    if(cliente != ""){
        if(!isEmpty(data)) data.clienteid = cliente;
        $.ajax({
            url: "https://iotforms-api.azurewebsites.net/"+url,
            data: data,
            method: 'get',
            success: function (result) {
                callback(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }else{
        voltarLogin();
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return 0;
}

function getContent(url, admin = false) {
    var user = admin ? getCookie("admin"): getCookie("clienteid");
    if(user != ""){
        $.ajax({
            url: url,
            method: 'get',
            success: function (result) {
                $("#conteudo").html(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }else{
        voltarLogin();
    }
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function listarClientes(clientes) {
    $("#listaCliente").empty();
    for (var cliente in clientes) {
            var html = '<div class="column is-10">'+
                        '<div>'+clientes[cliente].nome+'</div>'+
                    '</div>'+
                    '<div class="column is-2">'+
                        '<button type="button" class="button btnTrans btnBorder btnFull btnCliente" data-cliente="'+clientes[cliente].id+'">'+
                            'Logar Como Cliente&nbsp; <i class="fas fa-chevron-right"></i>'+
                        '</button>'+
                    '</div>';
        $("#listaClientes").append(html);
    }
    $(".btnCliente").off().click(function () {
        var clienteid = $(this).data("cliente");
        setCookie("clienteid",clienteid);
    });
}

function listarProjetos(projetos) {
    $("#listaProjetos").empty();
    for (var projeto in projetos) {
        var html = '<div class="column is-10">'+
                    '<div>'+projetos[projeto].nome+'</div>'+
                '</div>'+
                '<div class="column is-2">'+
                    '<button type="button" class="button btnTrans btnBorder btnFull btnProjeto" data-projeto="'+projetos[projeto].id+'">'+
                        'Ir para Projeto&nbsp; <i class="fas fa-chevron-right"></i>'+
                    '</button>'+
                '</div>';
        $("#listaProjetos").append(html);
    }
    $(".btnProjeto").off().click(function () {
        var projetoid = $(this).data("projeto");
        setCookie("projetoid",projetoid);
        getContent("/Dashboard/Projeto");
    });
}

function loadCliente(result){
    $("#razaoSocial").val(checkValue(result.RazaoSocial));
    $("#cnpj").val(checkValue(result.CNPJ));
    $("#nomeFantasia").val(checkValue(result.NomeFantasia));
    $("#areaAtuacao").val(checkValue(result.AreaAtuacao));
    $("#site").val(checkValue(result.Site));
    $("#nomeContato").val(checkValue(result.NomeContato));
    $("#cargo").val(checkValue(result.Cargo));
    $("#email").val(checkValue(result.Email));
    $("#telcel").val(checkValue(result.TelefoneCelular));
    $("#telfix").val(checkValue(result.TelefoneFixo));
    $("#logradouro").val(checkValue(result.Logradouro));
    $("#numero").val(checkValue(result.Numero));
    $("#complemento").val(checkValue(result.Complemento));
    $("#bairro").val(checkValue(result.Bairro));
    $("#cidade").val(checkValue(result.Cidade));
    $("#estado").val(checkValue(result.Estado));
    $("#cep").val(checkValue(result.CEP));
}

function loadMasks(){
    $("#cnpj").mask("00.000.000/0000-00", { reverse: true });
    $("#telCel").mask("(00) 00000-0000");
    $("#telFix").mask("(00) 0000-0000");
    $("#cep").mask("00000-000");

    $("#cep").keyup(function () {
        if (this.value.length < 9) return;
        var cep = this.value.replace("-", "");
        $.ajax({
            url: "https://viacep.com.br/ws/"+cep+"/json/",
            method: "get",
            success: function (result) {
                $("#logradouro").val(result.logradouro);
                $("#bairro").val(result.bairro);
                $("#cidade").val(result.localidade);
                $("#estado").val(result.uf);
                $("#cep").val(result.cep);
            },
            error: function (error) {
                $("#logradouro").val("CEP não encontrado");
            }
        });
    });
}

function logout(){
    var cliente = getCookie("clienteid");
    var admin = getCookie("admin");
    if(cliente != ""){
        deleteCookie("clienteid");
        if(admin != ""){
            voltarAdmin();
        }else{
            voltarLogin();
        }
    }else{
        deleteCookie("admin");
        voltarLogin();
    }
}

function sendContent(url, method, data, titulo, mensagem) {
    var cliente = getCookie("clienteid")
    if(cliente != ""){
        $.ajax({
            url: 'https://iotform-api.azurewebsites.net/' + url,
            data: data,
            method: method,
            success: function (result) {
                if (result) {
                    if (result.code == 1) {
                        showModal(titulo, mensagem);
                    } else {
                        showModal("Erro", result.error);
                    }
                } else {
                    showModal("Erro", "Não foi possivel gravar os dados, tente novamente!");
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }else{
        voltarLogin();
    }
}

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (3600 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    if(cname == "clienteid"){
        voltarDashboard();
    }
    if(cname == "admin"){
        voltarAdmin();
    }
}

function showModal(titulo, mensagem) {
    $(".modal-card-title").text(titulo);
    $(".modal-card-body").text(mensagem);
    $(".modal-close-btn").off().click(function () {
        $(".modal").hide();
        if (admin) {
            voltarAdmin()
        } else {
            getContent("/Dashboard/Projeto/"+projetoid);
        }
    });
    $(".modal").show();
}

function voltarAdmin() {
    getContent("/Admin/Home",true);
}

function voltarDashboard(){
    getContent("/Dashboard/Home");
}

function voltarLogin(){
    window.location = "/Login";
}


