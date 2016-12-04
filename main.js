$(document).ready(function() {

    var table = $('#example').DataTable({

        "ajax": 'exampledata.json'

    });

    $("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');

} );