app.factory('screenWidthService', function() {
    var size;
    var screenwidth=$( window ).width();
    if (1199<screenwidth) size='lg';
    else if(991<screenwidth && screenwidth<1200) size='md';
    else if (767<screenwidth && screenwidth<992)  size='sm';
    else  size='xs';
    return size;
});
