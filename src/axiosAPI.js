var axiosController = (function(){
    var getProducts=function(callback){
        axios.get("http://localhost:8080/api/products")
        .then( function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    };

    var addProduct=function(callback,data){
        axios.post("http://localhost:8080/api/products",data)
        .then( function(response){
            callback(response.data);
        })
        .catch( function(error){
            console.log(error);
        })
    };

    var importCsvFileToInventory=function(file){
        axios.post("http://localhost:8080/api/import",file)
        .then(function(response){
            callback(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    return {
        "getProducts":getProducts,
        "addProduct":addProduct,
        "importCsvFileToInventory":importCsvFileToInventory
    };
}


);