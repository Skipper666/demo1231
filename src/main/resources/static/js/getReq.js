$( document ).ready(function() {

    // GET REQUEST
    $("#bth-start").click(function(event){
        $(this).prop("disabled",true);
        $(".loading").css("visibility","visible");
        printNumbersInterval()
    });

    function printNumbersInterval() {
        var i = 1;
        var timerId = setInterval(function() {
            console.log(i);
            ajaxGet()
            if (i == 20) clearInterval(timerId);
            i++;
        }, 1000);
    }

    function ajaxGet2(){
        $.ajax({
            type : "GET",
            url : "http://localhost:8080/test2",
            success: function(){
                location.href = "/test2";
            },
            error: function(e){
                console.log("ERROR: ", e);
            }
        });
    }

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

    $("#bth-start").click(function(){
        $(this).prop("disabled",true);
        $(".loading").css("visibility","visible");
    });

})