$(document).ready(function() {

    var table = $('#example').DataTable({

        "createdRow": function ( row, data, index ) {
            console.log(row);
            console.log(data);
            console.log(index);
            $('td', row).eq(5).addClass('highlight');
        }

    });

    table.on( 'order.dt',  function () { console.log( 'Order' ); } );
    table.on( 'search.dt', function () { console.log( 'Search' ); } );
    table.on( 'page.dt',   function () { console.log( 'Page' ); } );

} );