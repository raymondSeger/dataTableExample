$(document).ready(function() {
    var table = $('#example').DataTable({

        "lengthMenu": [
            [25, 50, -1],
            [25, 50, "All"]
        ]

    });

    table.on( 'order.dt',  function () { console.log( 'Order' ); } );
    table.on( 'search.dt', function () { console.log( 'Search' ); } );
    table.on( 'page.dt',   function () { console.log( 'Page' ); } );

} );