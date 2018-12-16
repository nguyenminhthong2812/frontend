$(document).ready(function(){
    $("[data-toggle=popover]").popover({
        html : true,
        content: function() {
          var content = $(this).attr("data-popover-content");
          return $(content).children(".popover-body").html();
        },
        title: function() {
          var title = $(this).attr("data-popover-content");
          return $(title).children(".popover-heading").html();
        }
    }); 

    $('[data-toggle="tooltip"]').tooltip(); 

    // chạy jquery select
     $('select').niceSelect();

     // datepicker
     $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
        });
     //spinedit
     $('#spinEdit').spinedit({
		    minimum: -10000,
		    maximum: 10000,
		    step: 100,
		    value: 0,
		    numberOfDecimals: 0
		});
});
