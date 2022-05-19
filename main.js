$(document).ready(function() {
    $.getJSON( "data.json", function( data ) {
        $.each( data, function( key, value ) {
            $("#output").append( 
                `<tr id="${key+1}">
                <td>${key+1}</td>
                <td>${value.name}</td> 
                <td>${value.description}</td>
                <td>${value.location}</td> 
                <td><a href="https://www.google.com/maps?q=${value.location[0]},${value.location[1]}" target="_blank">Open</a></td>
                </tr>` 
                );
        });
      });
});

$("#test").append("This is a test text!");

// https://www.google.com/maps?q=33.09745,-116.99572