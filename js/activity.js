$(document).ready(function() {
    var selectedColor = 'rgb(158, 208, 52)';
    var unselectedColor = 'rgb(238, 255, 230)';
    var currText;
    var $displaySelected = $('#displaySelected');
    var $result = $('#result');
    var $tHead = $('table thead tr th'); 

    $('table tbody tr td').not('td:first-child').hover(function() {
        currText = $(this).text();
        if(currText !== 'Not Available') {
            $(this).css({
                cursor: 'pointer'
            })
        }
    }).click(function() {
        var currCellColor = $(this).css('backgroundColor');
        var index = $(this).index();
        currText = $(this).text();
        if(currCellColor !== selectedColor && currText !== 'Not Available') {
            $(this).css({
                backgroundColor: selectedColor, 
                color: '#fff', 
                fontWeight: 'bold', 
                cursor: 'pointer'
            })

            //User interaction with table cells
            $displaySelected.css({
                visibility:'visible', 
                marginTop: '2em', 
            })
            $result.append('<p>'+currText+ ' at ' + $tHead.eq(index).text() + '</p>');

        } else {
            $(this).css({
                backgroundColor: unselectedColor, 
                color: '#000', 
                fontWeight: 'normal'
            })
            
            // console.log('FOUND:', $result.find('p').find(currText));
            // $result.find('p').find(currText).remove(this);
            // $result.remove($result.find('p').find(currText));

            $('#result p:contains('+currText+')').remove(); //remove child element

            if(!$result.has('p').length) {  //check if there are any child elements within parent
                $displaySelected.css({
                    visibility: 'hidden', 
                    marginTop: '0'
                })
            }
        }  
    });
});