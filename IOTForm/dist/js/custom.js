function checkValue(value){
    if(!isUndefined(value)){
        return value;
    }
    return "";
}

function deleteCookie(cname){
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function entrarSistema(){
    var clienteid = getCookie("clienteid");
    var location;
    if(clienteid == 0){
        setCookie("admin",0);
        deleteCookie("clienteid");
        location = "/Admin";
    }else{
        location = "/Dashboard";
    }
    window.location = location;
}

function enviarAmbienteProjeto() {
    var idprojeto = getCookie("projetoid");
    var ambienteTempo = $("#ambienteTempo").val();
    var ambienteTempoC = $("#ambienteTempoC").val();
    var ambienteBudget = $("#ambienteBudget").val();
    var ambienteBudgetC = $("#ambienteBudgetC").val();
    var ambienteFuncionais = $("#ambienteFuncionais").val();
    var ambienteFuncionaisC = $("#ambienteFuncionaisC").val();
    var ambienteTecnicas = $("#ambienteTecnicas").val();
    var ambienteTecnicasC = $("#ambienteTecnicasC").val();
    var ambienteProjeto = {
        IdProjeto: idprojeto,
        AmbienteTempo: ambienteTempo,
        AmbienteTempoC: ambienteTempoC,
        AmbienteBudget: ambienteBudget,
        AmbienteBudgetC: ambienteBudgetC,
        AmbienteFuncionais: ambienteFuncionais,
        AmbienteFuncionaisC: ambienteFuncionaisC,
        AmbienteTecnicas: ambienteTecnicas,
        AmbienteTecnicasC: ambienteTecnicasC
    };
    sendContent("ambienteProjeto", "POST", ambienteProjeto,"Sucesso", "Track & Trace - Ambiente de Projeto Gravado Com Sucesso!")
}

function enviarAtivosDevices() {
    var idprojeto = getCookie("projetoid");
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
        IdProjeto: idprojeto,
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
    sendContent("ativosDevices", "POST", ativosDevices, "Sucesso", "Track & Trace - Ativos e Devices Gravado Com Sucesso!");
}

function enviarComunicacaoConectividade() {
    var idprojeto = getCookie("projetoid");
    var localTecnologia = $("#localTecnologia").val();
    var localTecnologiaC = $("#localTecnologiaC").val();
    var localLarguraBanda = $("#localLarguraBanda").val();
    var localLarguraBandaC = $("#localLarguraBandaC").val();
    var localMaximaLatencia = $("#localMaximaLatencia").val();
    var localMaximaLatenciaC = $("#localMaximaLatenciaC").val();
    var remotaTecnologia = $("#remotaTecnologia").val();
    var remotaTecnologiaC = $("#remotaTecnologiaC").val();
    var remotaLarguraBanda = $("#remotaLarguraBanda").val();
    var remotaLarguraBandaC = $("#remotaLarguraBandaC").val();
    var remotaMaximaLatencia = $("#remotaMaximaLatencia").val();
    var remotaMaximaLatenciaC = $("#remotaMaximaLatenciaC").val();

    var comunicacaoConectividade = {
        IdProjeto: idprojeto,
        LocalTecnologia: localTecnologia,
        LocalTecnologiaC: localTecnologiaC,
        LocalLarguraBanda: localLarguraBanda,
        LocalLarguraBandaC: localLarguraBandaC,
        LocalMaximaLatencia: localMaximaLatencia,
        LocalMaximaLatenciaC: localMaximaLatenciaC,
        RemotaTecnologia: remotaTecnologia,
        RemotaTecnologiaC: remotaTecnologiaC,
        RemotaLarguraBanda: remotaLarguraBanda,
        RemotaLarguraBandaC: remotaLarguraBandaC,
        RemotaMaximaLatencia: remotaMaximaLatencia,
        RemotaMaximaLatenciaC: remotaMaximaLatenciaC
    };
    sendContent("comConect", "POST", comunicacaoConectividade, "Sucesso", "Track & Trace - Comunicação e Conectividade Gravado Com Sucesso!")
}

function enviarFormularioGeral() {
    var idprojeto = getCookie("projetoid");
    var QuestionarioRespostas = {IdProjeto: idprojeto};
    for (var a = 1; a < 11; a++) {
        QuestionarioRespostas['Resposta' + a] = $("#resposta" + a).prop("checked") ? 1 : 0;
        QuestionarioRespostas['RespostaTexto' + a] = $("#respostatexto" + a).text();
    }
    sendContent("questionario", "POST", QuestionarioRespostas, "Sucesso", "Formulário Geral Gravado Com Sucesso!")
}

function enviarPadroesRequerimentos() {
    var idprojeto = getCookie("projetoid");
    var requerimentosRegiao = $("#requerimentosRegiao").val();
    var requerimentosRegiaoC = $("#requerimentosRegiaoC").val();
    var requerimentosIndustria = $("#requerimentosIndustria").val();
    var requerimentosIndustriaC = $("#requerimentosIndustriaC").val();
    var requerimentosTecnologia = $("#requerimentosTecnologia").val();
    var requerimentosTecnologiaC = $("#requerimentosTecnologiaC").val();
    var padroesTecnicos = $("#padroesTecnicos").val();
    var padroesTecnicosC = $("#padroesTecnicosC").val();
    var padroesFuncionais = $("#padroesFuncionais").val();
    var padroesFuncionaisC = $("#padroesFuncionaisC").val();

    var padroesRequerimentos = {
        IdProjeto: idprojeto,
        RequerimentosRegiao: requerimentosRegiao,
        RequerimentosRegiaoC: requerimentosRegiaoC,
        RequerimentosIndustria: requerimentosIndustria,
        RequerimentosIndustriaC: requerimentosIndustriaC,
        RequerimentosTecnologia: requerimentosTecnologia,
        RequerimentosTecnologiaC: requerimentosTecnologiaC,
        PadroesTecnicos: padroesTecnicos,
        PadroesTecnicosC: padroesTecnicosC,
        PadroesFuncionais: padroesFuncionais,
        PadroesFuncionaisC: padroesFuncionaisC
    };
    sendContent("padroes", "POST", padroesRequerimentos, "Sucesso", "Track & Trace - Padrões e Requerimentos Gravado Com Sucesso!")
}

function enviarServicosBackend() {
    var idprojeto = getCookie("projetoid");
    var geralEstrategiaAplicacao = $("#geralEstrategiaAplicacao").val();
    var geralEstrategiaAplicacaoC = $("#geralEstrategiaAplicacaoC").val();
    var geralComplexidadeNegocio = $("#geralComplexidadeNegocio").val();
    var geralComplexidadeNegocioC = $("#geralComplexidadeNegocioC").val();
    var geralIntegracaoBackend = $("#geralIntegracaoBackend").val();
    var geralIntegracaoBackendC = $("#geralIntegracaoBackendC").val();
    var gestaoVolumeDados = $("#gestaoVolumeDados").val();
    var gestaoVolumeDadosC = $("#gestaoVolumeDadosC").val();
    var gestaoVariedadeDados = $("#gestaoVariedadeDados").val();
    var gestaoVariedadeDadosC = $("#gestaoVariedadeDadosC").val();
    var gestaoVariabilidadeDados = $("#gestaoVariabilidadeDados").val();
    var gestaoVariabilidadeDadosC = $("#gestaoVariabilidadeDadosC").val();
    var gestaoAnalytics = $("#gestaoAnalytics").val();
    var gestaoAnalyticsC = $("#gestaoAnalyticsC").val();

    var servicosBackend = {
        IdProjeto: idprojeto,
        GeralEstrategiaAplicacao: geralEstrategiaAplicacao,
        GeralEstrategiaAplicacaoC: geralEstrategiaAplicacaoC,
        GeralComplexidadeNegocio: geralComplexidadeNegocio,
        GeralComplexidadeNegocioC: geralComplexidadeNegocioC,
        GeralIntegracaoBackend: geralIntegracaoBackend,
        GeralIntegracaoBackendC: geralIntegracaoBackendC,
        GestaoVolumeDados: gestaoVolumeDados,
        GestaoVolumeDadosC: gestaoVolumeDadosC,
        GestaoVariedadeDados: gestaoVariedadeDados,
        GestaoVariedadeDadosC: gestaoVariedadeDadosC,	
        GestaoVariabilidadeDados: gestaoVariabilidadeDados,
        GestaoVariabilidadeDadosC: gestaoVariabilidadeDadosC,
        GestaoAnalytics: gestaoAnalytics,
        GestaoAnalyticsC: gestaoAnalyticsC
    };
    sendContent("servicos", "POST", servicosBackend, "Sucesso", "Track & Trace - Serviços Backend Gravado Com Sucesso!")
}

function getAPIContent(url, data, callback) {
    var token = getCookie("token");
    if(token != ""){
        $.ajax({
            url: "https://iotforms-api.azurewebsites.net/" + url,
            data: data,
            method: 'GET',
            success: function (result, txtStatus, status) {
                if(status.status == 200){
                    callback(result);
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
    var token = getCookie("token");
    if(token != ""){
        $.ajax({
            url: url,
            method: 'GET',
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

function isUndefined(variable){
    return typeof variable === undefined || typeof variable === "undefined" || variable == null;
}

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

function loadAmbienteProjeto(result){
    $('#ambienteTempo option[value="'+result.AmbienteTempo+'"]').attr('selected', 'selected')
    $("#ambienteTempoC").val(result.AmbienteTempoC);
    $('#ambienteBudget option[value="'+result.AmbienteBudget+'"]').attr('selected', 'selected')
    $("#ambienteBudgetC").val(result.AmbienteBudget);
    $('#ambienteFuncionais option[value="'+result.AmbienteFuncionais+'"]').attr('selected', 'selected')
    $("#ambienteFuncionaisC").val(result.AmbienteFuncionaisC);
    $('#ambienteTecnicas option[value="'+result.AmbienteFuncionaisC+'"]').attr('selected', 'selected')
    $("#ambienteTecnicasC").val(result.AmbienteTecnicasC);
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

function loadComunicacaoConectividade(result){
    $('#localTecnologia option[value="'+result.LocalTecnologia+'"]').attr('selected', 'selected')
    $("#localTecnologiaC").val(result.LocalTecnologiaC);
    $('#localLarguraBanda option[value="'+result.LocalLarguraBanda+'"]').attr('selected', 'selected')
    $("#localLarguraBandaC").val(result.LocalLarguraBandaC);
    $('#localMaximaLatencia option[value="'+result.LocalMaximaLatencia+'"]').attr('selected', 'selected')
    $("#localMaximaLatenciaC").val(result.LocalMaximaLatenciaC);
    $('#remotaTecnologia option[value="'+result.RemotaTecnologia+'"]').attr('selected', 'selected')
    $("#remotaTecnologiaC").val(result.RemotaTecnologiaC);
    $('#remotaLarguraBanda option[value="'+result.RemotaLarguraBanda+'"]').attr('selected', 'selected')
    $("#remotaLarguraBandaC").val(result.RemotaLarguraBandaC);
    $('#remotaMaximaLatencia option[value="'+result.RemotaMaximaLatencia+'"]').attr('selected', 'selected')
    $("#remotaMaximaLatenciaC").val(result.RemotaMaximaLatenciaC);
}

function loadFormularioGeral(result){
    $("#resposta1").prop("checked",result.Resposta1);
    $("#respostatexto1").val(checkValue(result.RespostaTexto2));
    $("#resposta2").prop("checked",result.Resposta2);
    $("#respostatexto2").val(checkValue(result.RespostaTexto2));
    $("#resposta3").prop("checked",result.Resposta3);
    $("#respostatexto3").val(checkValue(result.RespostaTexto3));
    $("#resposta4").prop("checked",result.Resposta4);
    $("#respostatexto4").val(checkValue(result.RespostaTexto4));
    $("#resposta5").prop("checked",result.Resposta5);
    $("#respostatexto5").val(checkValue(result.RespostaTexto5));
    $("#resposta6").prop("checked",result.Resposta6);
    $("#respostatexto6").val(checkValue(result.RespostaTexto6));
    $("#resposta7").prop("checked",result.Resposta7);
    $("#respostatexto7").val(checkValue(result.RespostaTexto7));
    $("#resposta8").prop("checked",result.Resposta8);
    $("#respostatexto8").val(checkValue(result.RespostaTexto8));
    $("#resposta9").prop("checked",result.Resposta9);
    $("#respostatexto9").val(checkValue(result.RespostaTexto9));
    $("#resposta10").prop("checked",result.Resposta10);
    $("#respostatexto10").val(checkValue(result.RespostaTexto10));
}

function loadGrafico(result){
    var ctx = $("#grafico");
    var data  = [
        result.AtivosDevice.Medias.Total,
        result.ComunicacaoConectividade.Medias.Total,
        result.ServicosBackend.Medias.Total,
        result.PadroesRequerimento.Medias.Total,
        result.AmbienteProjeto.Medias.Total
    ];
    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["Ativos", "Comunicação", "Backend", "Padrões", "Ambiente"],
            datasets: [{
                label:"Projeto",
                data: data,
                fill:true,
                backgroundColor:"rgba(255, 99, 132, 0.2)",
                borderColor:"rgb(255, 99, 132)",
                pointBackgroundColor:"rgb(255, 99, 132)",
                pointBorderColor:"#fff",
                pointHoverBackgroundColor:"#fff",
                pointHoverBorderColor:"rgb(255, 99, 132)"
            }]
        },
        options: {
            elements:{
                line:{
                    tension:0,
                    borderWidth:3
                }
            }
        }
    });
}

function loadPadroesRequerimentos(result){
    $('#requerimentosRegiao option[value="'+result.RequerimentosRegiao+'"]').attr('selected', 'selected')
    $("#requerimentosRegiaoC").val(result.RequerimentosRegiaoC);
    $('#requerimentosIndustria option[value="'+result.RequerimentosIndustria+'"]').attr('selected', 'selected')
    $("#requerimentosIndustriaC").val(result.RequerimentosIndustriaC);
    $('#requerimentosTecnologia option[value="'+result.RequerimentosTecnologia+'"]').attr('selected', 'selected')
    $("#requerimentosTecnologiaC").val(result.RequerimentosTecnologiaC);
    $('#padroesTecnicos option[value="'+result.PadroesTecnicos+'"]').attr('selected', 'selected')
    $("#padroesTecnicosC").val(result.PadroesTecnicosC);
    $('#padroesFuncionais option[value="'+result.PadroesFuncionais+'"]').attr('selected', 'selected')
    $("#padroesFuncionaisC").val(result.PadroesFuncionaisC);
}

function loadServicosBackend(result){
    $('#geralEstrategiaAplicacao option[value="'+result.geralEstrategiaAplicacao+'"]').attr('selected', 'selected')
    $("#geralEstrategiaAplicacaoC").val(result.geralEstrategiaAplicacaoC);
    $('#geralComplexidadeNegocio option[value="'+result.geralComplexidadeNegocio+'"]').attr('selected', 'selected')
    $("#geralComplexidadeNegocioC").val(result.geralComplexidadeNegocioC);
    $('#geralIntegracaoBackend option[value="'+result.geralIntegracaoBackend+'"]').attr('selected', 'selected')
    $("#geralIntegracaoBackendC").val(result.geralIntegracaoBackendC);
    $('#gestaoVolumeDados option[value="'+result.gestaoVolumeDados+'"]').attr('selected', 'selected')
    $("#gestaoVolumeDadosC").val(result.gestaoVolumeDadosC);
    $('#gestaoVariedadeDados option[value="'+result.gestaoVariedadeDados+'"]').attr('selected', 'selected')
    $("#gestaoVariedadeDadosC").val(result.gestaoVariedadeDadosC);
    $('#gestaoVariabilidadeDados option[value="'+result.gestaoVariabilidadeDados+'"]').attr('selected', 'selected')
    $("#gestaoVariabilidadeDadosC").val(result.gestaoVariabilidadeDadosC);
    $('#gestaoAnalytics option[value="'+result.gestaoAnalytics+'"]').attr('selected', 'selected')
    $("#gestaoAnalyticsC").val(result.gestaoAnalyticsC);
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
            deleteCookie("token");
            voltarLogin();
        }
    }else{
        deleteCookie("token");
        deleteCookie("admin");
        voltarLogin();
    }
}

function sendContent(url, method, data, titulo, mensagem, location = false) {
    var token = getCookie("token");
    if(token != ""){
        $.ajax({
            url: "https://iotforms-api.azurewebsites.net/"+url,
            method: method,
            data: data,
            success: function(result) {
                if (result) {
                    showModal(titulo, mensagem, location);
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

function showModal(titulo, mensagem, location) {
    $(".modal-card-title").text(titulo);
    $(".modal-card-body").text(mensagem);
    $(".modal-close-btn").off().click(function () {
        $(".modal").hide();
        if (location) {
            getContent(location);
        } else {
            var projetoid = getCookie("projetoid");
            getContent("/Dashboard/Projeto/"+projetoid);
        }
    });
    $(".modal").show();
}

function voltarAdmin() {
    getContent("/Admin",true);
}

function voltarDashboard(){
    getContent("/Dashboard/Home");
}

function voltarLogin(){
    window.location = "/Login";
}

