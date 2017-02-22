/**
 * Created by Administrator on 2016/10/10.
 */
$(function(){
     getTime();
    $('.more').click(function(){
        $(this).parent().removeClass('hiddenText');
        $(this).css('display','none')
    });
});

function getTime(){
    var times=new Date();
    var yy=times.getFullYear();
    var MM=times.getMonth();
    var dd=times.getDate();
    $('#myyear').html(yy).css('fontSize','20px');
    $('#timeYear').html(yy);
    $('#timeMonth').html(MM+1);
    $('#timeDay').html(dd);
    var endYear=times.getFullYear();
    var endMonth=12-1;
    var endDate=31;
    var end=Date.UTC(endYear,endMonth,endDate);
    var now=Date.UTC(yy,MM,dd);
    var t=parseInt( (end-now) / 86400000);
    $('#timeRemain').html(t);
}

