$(document).ready(function() {

    var table = $('#example').DataTable({

        "aoColumns": [
            null,
            null,
            { "orderSequence": [ "asc" ] },
            { "orderSequence": [ "desc", "asc", "asc" ] },
            { "orderSequence": [ "desc" ] },
            null
        ]

    });

    $("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');

} );