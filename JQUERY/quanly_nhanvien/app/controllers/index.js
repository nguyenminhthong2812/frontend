
$(document).ready(function(){
	// KHAI BÁO BIẾN TOÀN CỤC
	var thongBao = ['Vui lòng nhập thông tin','Bạn chưa nhập đúng email'];
	
 	// VALIDATION
 	// hàm kiểm tra rỗng
 	function KiemTraRong(id){
 		var giaTri = $(id).val();
 		if(giaTri == ''){
 			$(id).attr('placeholder',thongBao[0]);
 			return false;
 		}
 		else{
 			$(id).attr('placeholder','');
 			return true;
 		}
 	}
 	// hàm kiểm tra email
 	function KiemTraEmail(id){
 		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  		if(!regex.test($(id).val())){
  			$(id).val('');
  			$(id).attr('placeholder',thongBao[1]);
  			return false;
  		}
  		else{
  			$(id).attr('placeholder','');
  			return true;
  		}
 	}

 	// XỬ LÝ NÚT THÊM NHÂN VIÊN
 	$('#themNV').click(function(){
 		// thay đổi tiêu đề modal
 		$('.modal-title').html('Thêm nhân viên');
 		// thêm nút chức năng vào footter
 		var footer = `
			<button class="btn btn-success" id="them">Thêm nhân viên</button>
			<button class="btn btn-danger" id="dong">Đóng</button>
 		`;
 		$('.modal-footer').html(footer);
 		// hiển thị modal
 		$('#btnModal').trigger('click');
 	});

 	// XỬ LÝ NÚT ĐÓNG MODAL
 	$('body').delegate('#dong','click',function(){
 		$('#btnClose').trigger('click');
 	});

 	//XỬ LÝ NÚT THÊM
 	$('body').delegate('#them','click',function(){
 		console.log(KiemTraEmail('#email'));
 	});



});
