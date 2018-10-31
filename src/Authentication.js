var authentication = (function(){
    var axios =require('axios');

    return {
        authenticate: function(user,password){
            alert (user);
            axios.post('https://quicklyshop.herokuapp.com/user/login', {
                username: user,
                password: password
            })
            .then(function (response) {
                alert(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    
})();

export default authentication;