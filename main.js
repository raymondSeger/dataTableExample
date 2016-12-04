$(document).ready(function() {
    var table = $('#example').DataTable({

    });

    table.on( 'order.dt',  function () { console.log( 'Order' ); } );
    table.on( 'search.dt', function () { console.log( 'Search' ); } );
    table.on( 'page.dt',   function () { console.log( 'Page' ); } );

} );