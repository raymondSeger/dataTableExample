$(document).ready(function() {

    var table = $('#example').DataTable({

        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "server.php",
            "data": function ( d ) {
                // you can add extra data here.
                d.name = 'raymond';
               console.log(d);
            }
        }

    });

    $("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');

} );