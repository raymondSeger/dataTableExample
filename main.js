$(document).ready(function() {
    $('#example').DataTable({
        "order": [[ 3, "desc" ]] // sort column #3 which is age (starts at 0 )
    });
} );