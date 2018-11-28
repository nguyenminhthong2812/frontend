$(function(){
	$("#btn").click(function(){	
		var numericExpression = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var email = $("#email").val();
		if($("#name").val() == "" || $("#email").val() == "" || $("#user").val() == "" || $("#pass").val() == "" ){
			$(".thongbao").text("Vui lòng nhập dầy đủ thông tin!");	
			//$(".thongbao").css("display","block");			
		}
		else{
			if(!email.match(numericExpression)){				
				$(".thongbao").text("Email không hợp lệ!");
			}
			else{
				$(".thongbao").text("");
			}
			
		}
	});
});