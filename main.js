$(document).ready(function() {

    var table = $('#example').DataTable({

        "footerCallback": function ( row, data, start, end, display ) {
            console.log(row);
            console.log(data);
            console.log(start);
            console.log(end);
            console.log(display);
        }

    });

    table.on( 'order.dt',  function () { console.log( 'Order' ); } );
    table.on( 'search.dt', function () { console.log( 'Search' ); } );
    table.on( 'page.dt',   function () { console.log( 'Page' ); } );

} );