$(document).ready(function() {
    $.getJSON( "data.json", function( data ) {
        $.each( data, function( key, value ) {
            $("#output").append( 
                `<tr id="${key+1}">
                <td>${value.name}</td> 
                <td>${value.description}</td>
                <td>${value.location[0]}</td> 
                <td>${value.location[1]}</td>
                </tr>` 
                );
        });

        // for(i=0; i<items.length; i++){
        //     $( "<p/>", {
        //         "class": "output",
        //         html: `${items[i].name} <br> ${items[i].description} <br> Location: long: ${items[i].location[0]} lat: ${items[i].location[1]}`
        //         // items[i].name + "<br>" + items[i].description + "<br>" + "" + items[i].location 
        //       }).appendTo( "#output" );
        // }

      });
});

$("#test").append("This is a test text!");