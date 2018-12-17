$(document).ready(function(){
    //popover
    $(".pop").popover({ trigger: "manual" , html: true, animation:false})
    .on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 300);
    });
    //tooltip
    $('[data-toggle="tooltip"]').tooltip(); 

    // chạy jquery select
     $('select').niceSelect();

     // datepicker
     $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
        });
     //spinedit
     $('#spinEdit').spinedit({
		    minimum: 0,
		    maximum: 10000,
		    step: 100,
		    value: 0,
		    numberOfDecimals: 0
		});
});
