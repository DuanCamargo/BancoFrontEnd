function resgataDependente(){
    nome = document.getElementById("nome").value;
    // alert($nome);

    var dataObj = {};

    if(nome!= ""){
        dataObj["nome"] = nome
    }

    $.ajax
    ({
        type: "GET",
        url: "http://localhost:8090/v1/dependentes",
        data: dataObj,
        dataType: 'json',
        beforeSend: function (request) {
            request.setRequestHeader('Authorization', make_base_auth());
        },
        success: function (data){
            console.log(data);
            var paginaAtual = data['number'];
            var totalPages = data['totalPages'];
            
            $('#tableDependentes').css("visibility", "visible");
            
            // var tableHtml = document.getElementById('tableDependentes').innerHTML;
            var rendered = Mustache.render(mustacheTemplate, data);
            $('#tableDependentes').html(rendered);
        }
    });
}

let mustacheTemplate
$(window).on('load', () => {
  mustacheTemplate = document.getElementById('tableDependentes').innerHTML;
})