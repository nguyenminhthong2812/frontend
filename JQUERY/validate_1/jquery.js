$(document).ready(function(){	

	$("#step_1").addClass("step_active");
	var step = 1; // kiểm soát đang ở bước nào
	var numericExpression = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	// sự kiện click nút next
	$("#next").click(function(){
		var elem = $("#email").val();
		if(step == 1){// đang ở bước 1
			
				if($("#name").val() == "")	{
					$("#tb1").text("Name required");
					$("#thongbao1").css("display","block");					
					$("#name").css("border-bottom","1px solid red");
				}
				else{
					$("#thongbao1").css("display","none");
					$("#name").css("border-bottom","1px solid white");
				}
				if($("#last_name").val() == "")	{				
					$("#tb2").text("Last name required");
					$("#thongbao2").css("display","block");
					$("#last_name").css("border-bottom","1px solid red");
				}
				else{
					$("#thongbao2").css("display","none");
					$("#last_name").css("border-bottom","1px solid white");
				}
				if($("#email").val() == "" || !elem.match(numericExpression)){
					$("#tb3").text("Invalid e-mail!");
					$("#thongbao3").css("display","block");
					$("#email").css("border-bottom","1px solid red");
				}	
				else{
					$("#thongbao3").css("display","none");
					$("#email").css("border-bottom","1px solid white");
				}
				if(!$("#rd_yes").prop('checked') && !$("#rd_no").prop('checked')){
					$("#tb4").text("Newsletter required!");
					$("#thongbao4").css("display","block");
				}			
				else{
					$("#thongbao4").css("display","none");
				}
				if($("#thongbao1").css("display") != "block" && $("#thongbao2").css("display") != "block" && $("#thongbao3").css("display") != "block" && $("#thongbao4").css("display") != "block"){
					
					step = 2; // qua bước 2
					//ẩn step 1 active step 2
					$("#step_1").removeClass("step_active");
					$("#step_2").addClass("step_active");
					// ẩn form1 hiện form 2
					$("#frm_vali1").css("display","none");
					$("#frm_vali2").css("display","block");
					$("#prev").css("display","block");
				}				
				
		}
		
		else if(step == 2){//đang ở bước 2
			var country = $('#country :selected').text();			
			if($("#address").val() == "")	{
				$("#tb1").text("Address required!");
				$("#thongbao1").css("display","block");					
				$("#address").css("border-bottom","1px solid red");
			}
			else{
				$("#thongbao1").css("display","none");
				$("#address").css("border-bottom","1px solid white");
			}
			if($("#zip").val() == "")	{
				$("#tb2").text("Zip code required");
				$("#thongbao2").css("display","block");					
				$("#zip").css("border-bottom","1px solid red");
			}
			else{
				$("#thongbao2").css("display","none");
				$("#zip").css("border-bottom","1px solid white");
			}
			if(country == "")	{
				$("#tb3").text("Country required");
				$("#thongbao3").css("display","block");				
			}
			else{
				$("#thongbao3").css("display","none");				
			}
			if($("#thongbao1").css("display") != "block" && $("#thongbao2").css("display") != "block" && $("#thongbao3").css("display") != "block" && $("#thongbao4").css("display") != "block"){
					
					step = 3; // qua bước 3
					//ẩn step 2 active step 3
					$("#step_2").removeClass("step_active");
					$("#step_3").addClass("step_active");
					// ẩn form2 hiện form 3
					$("#frm_vali2").css("display","none");
					$("#frm_vali3").css("display","block");
					$("#next").css("display","none");
					$("#finish").css("display","block");
			}
		}	
		
	});
	
	// sự kiện click nút prev
	$("#prev").click(function(){
		if(step == 2){//đang ở step 2
			// gán step = 1
			step = 1;
			//ẩn step 2 active step 1
			$("#step_2").removeClass("step_active");
			$("#step_1").addClass("step_active");
			// ẩn form2 hiện form 1
			$("#frm_vali2").css("display","none");
			$("#frm_vali1").css("display","block");
			$("#prev").css("display","none");
		}
		else if(step == 3){
			// gán step = 2
			step = 2;
			//ẩn step 3 active step 2
			$("#step_3").removeClass("step_active");
			$("#step_2").addClass("step_active");
			// ẩn form2 hiện form 1
			$("#frm_vali3").css("display","none");
			$("#frm_vali2").css("display","block");		
			$("#finish").css("display","none");
			$("#next").css("display","block");	
					
		}
	});
	
	//sự kiện click vào các step
	$("#step_1").click(function(){
		if(step == 2 || step ==3){
			//gán step =1
			step = 1;
			$("#step_1").addClass("step_active");
			$("#frm_vali1").css("display","block");
			$("#prev").css("display","none");	
			
				$("#step_2").removeClass("step_active");
				$("#frm_vali2").css("display","none");
			
				$("#step_3").removeClass("step_active");
				$("#frm_vali3").css("display","none");
			
		}
	});
	
	$("#step_2").click(function(){
		if(step ==3){
			//gán step =1
			step = 2;
			$("#step_2").addClass("step_active");
			$("#frm_vali2").css("display","block");
			//$("#prev").css("display","none");	
			
				$("#step_1").removeClass("step_active");
				$("#frm_vali1").css("display","none");
			
				$("#step_3").removeClass("step_active");
				$("#frm_vali3").css("display","none");
			
		}
	});
	
	//sự kiện nút finish
	$("#finish").click(function(){
		if(!$("#chk_accept").prop("checked")){
			$("#tb1").text("Please accept terms!");
			$("#thongbao1").css("display","block");				
			
		}
		else{
			$("#thongbao1").css("display","none");	
		}	
		if($("#thongbao1").css("display") != "block" && $("#thongbao2").css("display") != "block" && $("#thongbao3").css("display") != "block" && $("#thongbao4").css("display") != "block"){
			alert("hoàn thành.")
		}
		
	});
	
	// các sự kiện thay đổi ở form1
	$("#name").change(function(){
		if($("#name").val() == "")	{
			$("#tb1").text("Name required");
			$("#thongbao1").css("display","block");
			$("#name").css("border-bottom","1px solid red");
		}
		else{
			$("#thongbao1").css("display","none");
			$("#name").css("border-bottom","1px solid white");
		}
	});
	
	$("#last_name").change(function(){
		if($("#last_name").val() == "")	{				
			$("#tb2").text("Last name required");
			$("#thongbao2").css("display","block");
			$("#last_name").css("border-bottom","1px solid red");
		}
		else{
			$("#thongbao2").css("display","none");
			$("#last_name").css("border-bottom","1px solid white");
		}
	});
	
	$("#email").change(function(){
		var elem = $("#email").val();
		if($("#email").val() == "" || !elem.match(numericExpression)){
			$("#tb3").text("Invalid e-mail!");
			$("#thongbao3").css("display","block");
			$("#email").css("border-bottom","1px solid red");
		}	
		else{
			$("#thongbao3").css("display","none");
			$("#email").css("border-bottom","1px solid white");
		}
	});
	
	$("#rd_yes").change(function(){
			
		$("#thongbao4").css("display","none");
	});
	
	$("#rd_no").change(function(){
		$("#thongbao4").css("display","none");
		
	});
	
	// các sự kiện thay đổi ở form2
	$("#address").change(function(){
		if($("#address").val() == "")	{
				$("#tb1").text("Address required!");
				$("#thongbao1").css("display","block");					
				$("#address").css("border-bottom","1px solid red");
			}
			else{
				$("#thongbao1").css("display","none");
				$("#address").css("border-bottom","1px solid white");
			}
	});
	
	$("#zip").change(function(){
		if($("#zip").val() == "")	{
				$("#tb2").text("Zip code required");
				$("#thongbao2").css("display","block");					
				$("#zip").css("border-bottom","1px solid red");
			}
			else{
				$("#thongbao2").css("display","none");
				$("#zip").css("border-bottom","1px solid white");
			}
	});
	
	$("#country").change(function(){
		var country = $('#country :selected').text();	
		if(country == "")	{
				$("#tb3").text("Country required");
				$("#thongbao3").css("display","block");				
			}
			else{
				$("#thongbao3").css("display","none");				
			}
	});
	
	// các sự kiện thay đổi ở form2
	$("#chk_accept").change(function(){
		if(!$("#chk_accept").prop("checked")){
			$("#tb1").text("Please accept terms!");
			$("#thongbao1").css("display","block");				
			
		}
		else{
			$("#thongbao1").css("display","none");	
		}	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});