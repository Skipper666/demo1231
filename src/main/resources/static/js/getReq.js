$( document ).ready(function() {

    // GET REQUEST
    $("#getAllCustomerId").click(function(event){
        event.preventDefault();
        ajaxGet();
    });

    // DO GET
    function ajaxGet(){
        $.ajax({
            type : "GET",
            url : "https://httpbin.org/status/200",
            success: function(result){
                var a = result; // This line shows error.
                $.ajax({
                    type: "GET",
                    url: " http://localhost:8080/test?startService=true",
                });
            },
            error: function(e){
                console.log("ERROR: ", e);
            }
        });
    }
})