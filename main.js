$(document).ready(function() {

    var table = $('#example').DataTable({

        "dom": '<"toolbar">frtip'

    });

    $("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');

} );