$(document).ready(function() {
    var selectedColor = 'rgb(158, 208, 52)';
    var unselectedColor = 'rgb(238, 255, 230)';
    var currText;

    $('table tbody tr td').not('td:first-child').hover(function() {
        currText = $(this).text();
        if(currText !== 'Not Available') {
            $(this).css({
                cursor: 'pointer'
            })
        }
    }).click(function() {
        var currCellColor = $(this).css('backgroundColor');
        currText = $(this).text();
        if(currCellColor !== selectedColor && currText !== 'Not Available') {
            $(this).css({
                backgroundColor: selectedColor, 
                color: '#fff', 
                fontWeight: 'bold', 
                cursor: 'pointer'
            })
        } else {
            $(this).css({
                backgroundColor: unselectedColor, 
                color: '#000', 
                fontWeight: 'normal'
            })    
        }  
    });
});