$(document).ready(function() {
    var selectedColor = 'rgb(158, 208, 52)';
    var unselectedColor = 'rgb(238, 255, 230)'
    
    $('table tbody tr td').not('td:first-child').on('click', function() {
        var currCellColor = $(this).css('backgroundColor');
        var currText = $(this).text();
        if(currCellColor !== selectedColor && currText !== 'Not Available') {
            $(this).css({
                backgroundColor: selectedColor, 
                color: '#fff', 
                fontWeight: 'bold'
            })
        } else {
            $(this).css({
                backgroundColor: unselectedColor, 
                color: '#000', 
                fontWeight: 'normal'
            })    
        }
    })
});