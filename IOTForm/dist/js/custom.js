﻿function checkValue(value){
    if(!isUndefined(value)){
        return value;
    }
    return "";
}

function deleteCookie(cname){
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function enviarAtivosDevices() {
    var geralNumeroAtivos = $("#geralNumeroAtivos").val();
    var geralNumeroAtivosC = $("#geralNumeroAtivosC").val();
    var geralValorAtivo = $("#geralValorAtivo").val();
    var geralValorAtivoC = $("#geralValorAtivoC").val();
    var geralValorEconomico = $("#geralValorEconomico").val();
    var geralValorEconomicoC = $("#geralValorEconomicoC").val();
    var geralComplexidadeAtivo = $("#geralComplexidadeAtivo").val();
    var geralComplexidadeAtivoC = $("#geralComplexidadeAtivoC").val();
    var geralHeteroAtivo = $("#geralHeteroAtivo").val();
    var geralHeteroAtivoC = $("#geralHeteroAtivoC").val();

    var poderLogicaNegocio = $("#poderLogicaNegocio").val();
    var poderLogicaNegocioC = $("#poderLogicaNegocioC").val();
    var poderProcessamento = $("#poderProcessamento").val();
    var poderProcessamentoC = $("#poderProcessamentoC").val();
    var poderRequerimentos = $("#poderRequerimentos").val();
    var poderRequerimentosC = $("#poderRequerimentosC").val();
    var poderGestaoLocal = $("#poderGestaoLocal").val();
    var poderGestaoLocalC = $("#poderGestaoLocalC").val();

    var outrosFonteEnergia = $("#outrosFonteEnergia").val();
    var outrosFonteEnergiaC = $("#outrosFonteEnergiaC").val();
    var outrosAmbiente = $("#outrosAmbiente").val();
    var outrosAmbienteC = $("#outrosAmbienteC").val();

    var gestaoVidaUtil = $("#gestaoVidaUtil").val();
    var gestaoVidaUtilC = $("#gestaoVidaUtilC").val();
    var gestaoRestricoesHardware = $("#gestaoRestricoesHardware").val();
    var gestaoRestricoesHardwareC = $("#gestaoRestricoesHardwareC").val();
    var gestaoRestricoesSoftware = $("#gestaoRestricoesSoftware").val();
    var gestaoRestricoesSoftwareC = $("#gestaoRestricoesSoftwareC").val();
  
    var ativosDevices = {
        GeralNumeroAtivos: geralNumeroAtivos,
        GeralNumeroAtivosC: geralNumeroAtivosC,
        GeralValorAtivo: geralValorAtivo,
        GeralValorAtivoC: geralValorAtivoC,
        GeralValorEconomico: geralValorEconomico,
        GeralValorEconomicoC: geralValorEconomicoC,
        GeralComplexidadeAtivo: geralComplexidadeAtivo,
        GeralComplexidadeAtivoC: geralComplexidadeAtivoC,
        GeralHeteroAtivo: geralHeteroAtivo,
        GeralHeteroAtivoC: geralHeteroAtivoC,
        PoderLogicaNegocio: poderLogicaNegocio,
        PoderLogicaNegocioC: poderLogicaNegocioC,
        PoderProcessamento: poderProcessamento,
        PoderProcessamentoC: poderProcessamentoC,
        PoderRequerimentos: poderRequerimentos,
        PoderRequerimentosC: poderRequerimentosC,
        PoderGestaoLocal: poderGestaoLocal,
        PoderGestaoLocalC: poderGestaoLocalC,
        OutrosFonteEnergia: outrosFonteEnergia,
        OutrosFonteEnergiaC: outrosFonteEnergiaC,
        OutrosAmbiente: outrosAmbiente,
        OutrosAmbienteC: outrosAmbienteC,
        GestaoVidaUtil: gestaoVidaUtil,
        GestaoVidaUtilC: gestaoVidaUtilC,
        GestaoRestricoesHardware: gestaoRestricoesHardware,
        GestaoRestricoesHardwareC: gestaoRestricoesHardwareC,
        GestaoRestricoesSoftware: gestaoRestricoesSoftware,
        GestaoRestricoesSoftwareC: gestaoRestricoesSoftwareC
    };
    console.log(ativosDevices);
    sendContent("ativosDevices", "POST", ativosDevices, "Sucesso", "Track & Trace - Ativos e Devices Gravado Com Sucesso!");
}

function enviarFormularioGeral() {
    var QuestionarioRespostas = {};
    for (var a = 1; a < 11; a++) {
        QuestionarioRespostas['Resposta' + a] = $("#resposta" + a).prop("checked") ? 1 : 0;
        QuestionarioRespostas['RespostaTexto' + a] = $("#respostatexto" + a).text();
    }
    sendContent("/questionario", "POST", QuestionarioRespostas, "Sucesso", "Formulário Geral Gravado Com Sucesso!")
}

function getAPIContent(url, data, callback, admin = false) {
    var user = admin ? getCookie("admin"): getCookie("clienteid");
    if(user != ""){
        if(!isEmpty(data)) data.ClienteId = user;
        $.ajax({
            url: "https://iotforms-api.azurewebsites.net" + url,
            data: data,
            method: 'GET',
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

function isEmpty(data){
    if(typeof(data) == 'number' || typeof(data) == 'boolean'){ 
        return false; 
    }
    if(typeof(data) == 'undefined' || data === null){
        return true; 
    }
    if(typeof(data.length) != 'undefined'){
        return data.length == 0;
    }
    var count = 0;
    for(var i in data){
        if(data.hasOwnProperty(i)){
            count ++;
        }
    }
    return count == 0;
}

function isUndefined(variable){return typeof variable === undefined || typeof variable === "undefined" || variable == null;}

function listarClientes(clientes) {
    $("#listaClientes").empty();
    clientes.forEach(function(element) {
        var html = '<div class="column is-10">'+
                        '<div>'+element.RazaoSocial+'</div>'+
                    '</div>'+
                    '<div class="column is-2">'+
                        '<button type="button" class="button btnTrans btnBorder btnFull btnCliente" data-cliente="'+element.Id+'">'+
                            'Visualizar&nbsp; <i class="fas fa-chevron-right"></i>'+
                        '</button>'+
                    '</div>';
        $("#listaClientes").append(html);
    });
    $(".btnCliente").off().click(function () {
        var clienteid = $(this).data("cliente");
        setCookie("clienteid",clienteid);
    });
}

function listarProjetos(projetos) {
    $("#listaProjetos").empty();
    projetos.forEach(function(element) {
        var html = '<div class="column is-10">'+
                    '<div>'+element.Nome+'</div>'+
                '</div>'+
                '<div class="column is-2">'+
                    '<button type="button" class="button btnTrans btnBorder btnFull btnProjeto" data-projeto-id="'+element.Id+'" data-projeto-nome="'+element.Nome+'">'+
                        'Visualizar&nbsp; <i class="fas fa-chevron-right"></i>'+
                    '</button>'+
                '</div>';
        $("#listaProjetos").append(html);
    });
    $(".btnProjeto").off().click(function () {
        var projetoid = $(this).data("projetoId");
        var projetonome = $(this).data("projetoNome");
        setCookie("projetoid",projetoid);
        setCookie("projetonome",projetonome);
        getContent("/Dashboard/Projeto");
    });
}

function loadAtivosDevices(result){
    $('#geralNumeroAtivos option[value="'+result.geralNumeroAtivos+'"]').attr('selected', 'selected')
    $("#geralNumeroAtivosC").val(result.geralNumeroAtivosC);
    $('#geralValorAtivo option[value="'+result.geralValorAtivo+'"]').attr('selected', 'selected')
    $("#geralValorAtivoC").val(result.geralValorAtivoC);
    $('#geralValorEconomico option[value="'+result.geralValorEconomico+'"]').attr('selected', 'selected')
    $("#geralValorEconomicoC").val(result.geralValorEconomicoC);
    $('#geralComplexidadeAtivo option[value="'+result.geralComplexidadeAtivo+'"]').attr('selected', 'selected')
    $("#geralComplexidadeAtivoC").val(result.geralComplexidadeAtivoC);
    $('#geralHeteroAtivo option[value="'+result.geralHeteroAtivo+'"]').attr('selected', 'selected')
    $("#geralHeteroAtivoC").val(result.geralHeteroAtivoC);

    $('#poderLogicaNegocio option[value="'+result.poderLogicaNegocio+'"]').attr('selected', 'selected')
    $("#poderLogicaNegocioC").val(result.poderLogicaNegocioC);
    $('#poderProcessamento option[value="'+result.poderProcessamento+'"]').attr('selected', 'selected')
    $("#poderProcessamentoC").val(result.poderProcessamentoC);
    $('#poderRequerimentos option[value="'+result.poderRequerimentos+'"]').attr('selected', 'selected')
    $("#poderRequerimentosC").val(result.poderRequerimentosC);
    $('#poderGestaoLocal option[value="'+result.poderGestaoLocal+'"]').attr('selected', 'selected')
    $("#poderGestaoLocalC").val(result.poderGestaoLocalC);

    $('#outrosFonteEnergia option[value="'+result.outrosFonteEnergia+'"]').attr('selected', 'selected')
    $("#outrosFonteEnergiaC").val(result.outrosFonteEnergiaC);
    $('#outrosAmbiente option[value="'+result.outrosAmbiente+'"]').attr('selected', 'selected')
    $("#outrosAmbienteC").val(result.outrosAmbienteC);

    $('#gestaoVidaUtil option[value="'+result.gestaoVidaUtil+'"]').attr('selected', 'selected')
    $("#gestaoVidaUtilC").val(result.gestaoVidaUtilC);
    $('#gestaoRestricoesHardware option[value="'+result.gestaoRestricoesHardware+'"]').attr('selected', 'selected')
    $("#gestaoRestricoesHardwareC").val(result.gestaoRestricoesHardwareC);
    $("#gestaoRestricoesSoftware").val(result.gestaoRestricoesSoftware);
    $('#gestaoRestricoesSoftware option[value="'+result.gestaoRestricoesSoftware+'"]').attr('selected', 'selected')
    $("#gestaoRestricoesSoftwareC").val(result.gestaoRestricoesSoftwareC);
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
    $("#telCel").val(checkValue(result.TelefoneCelular));
    $("#telFix").val(checkValue(result.TelefoneComercial));
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

function sendContent(url, method, data, titulo, mensagem,admin = false) {
    var user = admin ? getCookie("admin"): getCookie("clienteid");
    if(user != ""){
        $.ajax({
            url: "https://iotforms-api.azurewebsites.net/"+url,
            method: method,
            data: data,
            success: function(result) {
                if (result) {
                    showModal(titulo, mensagem);
                }
            },
            error: function(error) { console.log(error); }
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

