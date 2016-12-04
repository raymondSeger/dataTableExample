$(document).ready(function() {
    var table = $('#example').DataTable({

        "columnDefs": [
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    return data +' ('+ row[3]+')';
                },
                "targets": 0
            }
        ]

    });

    table.on( 'order.dt',  function () { console.log( 'Order' ); } );
    table.on( 'search.dt', function () { console.log( 'Search' ); } );
    table.on( 'page.dt',   function () { console.log( 'Page' ); } );

} );