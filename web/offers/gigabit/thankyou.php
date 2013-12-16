<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>

        <p>thanks!</p>


        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

        <script src="js/main.js"></script>
        <script type="text/javascript">
            function chkData () {
                var isValid = true;
                $('#kanaemail .vldt').each(function (index, ele) {
                    if ( !!!ele.value ) {
                        ele.style.backgroundColor="yellow";
                        if ( isValid ) {
                            ele.focus();
                        }
                        isValid = false;
                    }
                });
                return isValid;
            }
            function tabnext(curr,next){
                if (curr.getAttribute && curr.value.length==curr.getAttribute("maxlength")) {
                    next.focus();
                }
            }
            function getURLParam (key) {
                var a = location.search.slice(1).split("&"), GET = [];
                for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
                return GET[key] || null;
            }
        </script>
    </body>
</html>
