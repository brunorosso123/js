const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi,callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET',urlApi,true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            // 0 es que no se a llamado
            // 1 que todavia no se a inicializado
            // 2 cuando ya se ejecuto el valor de send
            // 3 esta descargando o trabajando con la solicitud
            // 4 ya esta completada la llamada
            if(xhttp.status === 200){

                // la solicitud a sido correcta

                //Respuestas informativas (100–199),
                // Respuestas satisfactorias (200–299),
                // Redirecciones (300–399),
                // Errores de los clientes (400–499),
                // y errores de los servidores (500–599).
                callback(null,JSON.parse(xhttp.responseText));
            }else {
                const error = new Error('Error ' + urlApi);
                return callback(error,null);
            }

        }
    }
    xhttp.send();
}
fetchData(`${API}/products/`, function(error1,data1){
    if(error1){
        return console.error(error1);
    }
    fetchData(`${API}/products/${data1[0].id}`, function(error2,data2){
       if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3,data3){
            if(error3)return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
})