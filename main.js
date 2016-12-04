$(document).ready(function() {

    $.extend( true, $.fn.dataTable.defaults, {
        "searching": false,
        "ordering": false
    } );

    var table = $('#example').DataTable({

    });




    table.on( 'order.dt',  function () { console.log( 'Order' ); } );
    table.on( 'search.dt', function () { console.log( 'Search' ); } );
    table.on( 'page.dt',   function () { console.log( 'Page' ); } );

} );