$(document).ready(function() {
    $.getJSON( "data.json", function( data ) {
        $.each( data, function( key, value ) {
            $("#output").append( 
                `<tr>
                    <td>${key+1}</td>
                    <td>${value.name}</td> 
                    <td>${value.description}</td>
                    <td><button data-lat="${value.location[0]}" data-lng="${value.location[1]}">Update Map</button></td>
                </tr>` 
                );

       $(function() {
           console.log("Function activated");
                    $('button').each(function(i, btn) {
                      $(btn).click(function() {
                        var el = $(this)[0];
                        // console.log("El: " + el);
                        var lat=el.dataset.lat;
                        var lng=el.dataset.lng;
                        // $("iframe").attr("src", urlbeg + lat + "," + lng + urlend);
                        $("iframe").attr("src", `https://maps.google.com/maps?q=${lat},${lng}&t=&z=12&ie=UTF8&iwloc=&output=embed`);
                      });
                    });
                  });
        });
    });
});