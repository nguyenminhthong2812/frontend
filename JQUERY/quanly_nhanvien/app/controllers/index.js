
$(document).ready(function(){
	// KHAI BÁO BIẾN TOÀN CỤC
	var thongBao = ['Vui lòng nhập thông tin','Bạn chưa nhập đúng email'
                  ,'Vui lòng chỉ nhập số','Vui lòng chỉ nhập ký tự'];
	
 	// VALIDATION
 	// hàm kiểm tra rỗng
 	function KiemTraRong(id,idtb){
 		var giaTri = $(id).val();
 		if(giaTri == ''){
 			$(idtb).html(thongbao[0]);
 			return false;
 		}
 		else{
 			$(idtb).html('');
 			return true;
 		}
 	}
 	// hàm kiểm tra email
 	function KiemTraEmail(id,idtb){
 		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  		if(!regex.test($(id).val())){
  			$(idtb).html(thongBao[1]);
  			return false;
  		}
  		else{
  			$(idtb).html('');
  			return true;
  		}
 	}
  // hàm kiểm tra nhập số
  function KiemTraNhapSo(id,idtb){
    var number = /^-?\d*$/;
    var input = $(id).val();
    if(!number.test(input)){
      $(idtb).html(thongBao[2]);
      return false;
    }
    else{
      $(idtb).html('');
      return true;
    }
  }
  // hàm kiểm tra nhập ký tự
  function KiemTraNhapKyTu(id,idtb){
    var letters = /^[a-zA-z]+$/;
    var key = $(id).val();
    //key = key.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/\ /g, '-').replace(/đ/g, "d").replace(/đ/g, "d").replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y").replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u").replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ.+/g,"o").replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e").replace(/ì|í|ị|ỉ|ĩ/g,"i");
    key = key.replace(' ','');
    console.log(key);
    if(!key.match(letters)) {
      $(idtb).html(thongBao[3]);
      return false;
    }
    else{
      $(idtb).html('');
      return true;
    }
  }
  // hàm kiểm tra độ dài ký tự
  function KiemTraDoDai(id,idtb,min,max){  
    var input = $(id).val();
    if(min <= input.length && input.length <= max){
      $(idtb).html('');
      return true;
    }
    else{
      $(idtb).html('Chỉ nhập độ dài chuỗi trong khoảng từ ' + min + ' đến ' + max);
      return false;
    }
  }
// hàm kiểm tra nhập số
  function KiemTraNhapSoCoCham(id,idtb){
    var number = /^-?\d*[.,]?\d*$/;
    var input = $(id).val();
    if(!number.test(input)){
      $(idtb).html(thongBao[2]);
      return false;
    }
    else{
      $(idtb).html('');
      return true;
    }
  }
  // hàm validate tổng hợp
  function Validate(){    
    var kq1 = KiemTraRong('#maNV','#tbMaNV');
    if(kq1)
      kq1 = KiemTraDoDai('#maNV','#tbMaNV',4,6);
    var kq2 = KiemTraRong('#tenNV','#tbTenNV');
    if(kq2)
      kq2 = KiemTraNhapKyTu('#tenNV','#tbTenNV');
    var kq3 = KiemTraRong('#email','#tbEmail');
    if(kq3)
      kq3 = KiemTraEmail('#email','#tbEmail');
    var kq4 = KiemTraRong('#soDT','#tbSDT');
    if(kq4)
      kq4 = KiemTraNhapSo('#soDT','#tbSDT');

    var kq5 = true;

    var kq6 = KiemTraRong('#luongCB','#tbLuongCB');    
    if(kq6)
      kq6 = KiemTraNhapSo('#luongCB','#tbLuongCB');
    var kq7 = KiemTraRong('#soNgayLamViec','#tbSNLV');
    if(kq7)
      kq7 = KiemTraNhapSo('#soNgayLamViec','#tbSNLV');
    var kq8 = KiemTraRong('#chucVu','#tbChucVu');
    if(kq8)
      kq8 = KiemTraNhapKyTu('#chucVu','#tbChucVu');
    var kq9 = KiemTraRong('#phuCap','#tbPhuCap');
    if(kq9)
      kq9 = KiemTraNhapSoCoCham('#phuCap','#tbPhuCap');
    if(kq1&&kq2&&kq3&&kq4&&kq5&&kq6&&kq7&&kq8&&kq9)
      return true;
    else
      return false;
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
 		console.log(KiemTraNhapSoCoCham('#maNV','#tbMaNV'));
 	});



});
