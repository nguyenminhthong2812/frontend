
$(document).ready(function(){
	// KHAI BÁO BIẾN TOÀN CỤC
	var thongBao = ['Vui lòng nhập thông tin','Bạn chưa nhập đúng email'
                  ,'Vui lòng chỉ nhập số','Vui lòng chỉ nhập ký tự',
                  'Không nằm trong độ tuổi lao động','Mã nhân viên đã tồn tại.'];
	var dsnv = new DanhSachNhanVien();

	// gọi hàm lấy dữ liệu từ localstorage hiển thị lên bảng
	LayLocalStorage();
 	// VALIDATION
 	// hàm kiểm tra rỗng
 	function KiemTraRong(id,idtb){
 		var giaTri = $(id).val();
 		if(giaTri == ''){
 			$(idtb).html(thongBao[0]);
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
  // hàm chỉ nhập số dương
  function KiemTraNhapSoDuong(id,idtb){
  	var number = /^\d*$/;
    var input = $(id).val();
    if(!number.test(input)){
      $(idtb).html(thongBao[2]+' dương.');
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
  // hàm kiểm tra tuổi
  function KiemTraTuoi(id,idtb,minAge,maxAge){
  	var today = new Date();
	var birthDate = new Date($('#ngaySinh').val());
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
	  age--;
	}
	if(minAge <= age && age <= maxAge){
		$(idtb).html('');
		return true;
	}
	else{
		$(idtb).html(thongBao[4]);
		return false;
	}

  }
  // hàm kiểm tra trùng mã nhân viên
  function KiemTraMaNV(id,idtb){
  	var ktra = true;
  	var maNV = $(id).val();
  	maNV = maNV.toUpperCase();
  	for (var i = 0; i < dsnv.DSNV.length; i++) {
  		if(dsnv.DSNV[i].MaNhanVien.toUpperCase() === maNV){
  			ktra = false;
  			break;
  		}
  	}
  	if(!ktra)
  		$(idtb).html(thongBao[5]);		
  	else
  		$(idtb).html('');
  	return ktra;
  }

  // hàm validate tổng hợp
  function Validate(){    
    var kq1 = KiemTraRong('#maNV','#tbMaNV');
    if(kq1)
      kq1 = KiemTraDoDai('#maNV','#tbMaNV',4,6);
  	// if(kq1)
  	// 	kq1 = KiemTraMaNV('#maNV','#tbMaNV');
    var kq2 = KiemTraRong('#tenNV','#tbTenNV');
    // if(kq2)
    //   kq2 = KiemTraNhapKyTu('#tenNV','#tbTenNV');
    var kq3 = KiemTraRong('#email','#tbEmail');
    if(kq3)
      kq3 = KiemTraEmail('#email','#tbEmail');
    var kq4 = KiemTraRong('#soDT','#tbSDT');
    if(kq4)
      kq4 = KiemTraNhapSo('#soDT','#tbSDT');
  	var kq5 = KiemTraRong('#ngaySinh','#tbNgaySinh');    
    if(kq5)
      kq5 = KiemTraTuoi('#ngaySinh','#tbNgaySinh',18,60); 
    var kq6 = KiemTraRong('#luongCB','#tbLuongCB');    
    if(kq6)
      kq6 = KiemTraNhapSoDuong('#luongCB','#tbLuongCB');
    var kq7 = KiemTraRong('#soNgayLamViec','#tbSNLV');
    if(kq7)
      kq7 = KiemTraNhapSoDuong('#soNgayLamViec','#tbSNLV');
    var kq8 = KiemTraRong('#chucVu','#tbChucVu');    
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
 		var val = Validate();
 		var ktraMaNV = KiemTraMaNV('#maNV','#tbMaNV');
 		if(val && ktraMaNV){
 			// lấy các giá trị từ input
 			var maNV = $('#maNV').val();
 			var tenNV = $('#tenNV').val();
 			var email = $('#email').val();
 			var soDT = $('#soDT').val();
 			var ngaySinh = $('#ngaySinh').val();
 			var luongCB = $('#luongCB').val();
 			var soNgayLamViec = $('#soNgayLamViec').val();
 			var chucVu = $('#chucVu').val();
 			var phuCap = $('#phuCap').val();
 			// khởi tạo đối tượng nhân viên
 			var nhanVien = new NhanVien(maNV,tenNV,email,soDT,ngaySinh,luongCB,soNgayLamViec,chucVu,phuCap);
 			// thêm đối tượng nhân viên vào mảng danh sách nhân viên
 			dsnv.ThemNhanVien(nhanVien);
 			
 			// lưu vào localstorage
 			LuuLocalStorage(dsnv);
 			HienThiLenBang(dsnv);
 			ResetForm();
 			new PNotify({
			    title: 'Hoàn thành!',
			    text: 'Đã thêm nhân viên thành công.',
			    type: 'success'
			});
 		}

 	});
 	// hiển thị dữ liệu lên bảng
 	function HienThiLenBang(dsnv){ 		
 		var dulieu = ''; 		
 		//lặp qua mảng dsnv
 		for(var i= 0; i<dsnv.DSNV.length; i++){
 			// sửa lại format ngày sinh
 			var ngaySinh = dsnv.DSNV[i].NgaySinh; 									
 			var ngaySinhFormat = ngaySinh.substring(8,10) + '/' + ngaySinh.substring(5,7) + '/' + ngaySinh.substring(0,4);
 			// sửa lại mã nhân viên để hiển thị cho danh sách tìm kiếm
 			// vì khi hiển thị danh sách tìm kiếm ta có thêm thẻ span vào manhanvien
 			// nên phải chỉnh lại để hiển thị vào value checkbox ko bị lỗi
 			var maNV = dsnv.DSNV[i].MaNhanVien; 			
 			maNV = maNV.replace(`<span class='tukhoa'>`,'');
 			maNV = maNV.replace('</span>',''); 
 			var tenNV = dsnv.DSNV[i].TenNhanVien;
 			tenNV = tenNV.replace(`<span class='tukhoa'>`,'');
 			tenNV = tenNV.replace('</span>',''); 			
 			// gán dữ liệu
 			dulieu += `
				<tr class='trNhanVien'>
					<td><input type='checkbox' class='chkXoa' value='${maNV}'></td>
					<td class='td-maNV' value='${maNV}'>${dsnv.DSNV[i].MaNhanVien}</td>
					<td class='td-tenNV' value='${tenNV}'>${dsnv.DSNV[i].TenNhanVien}</td>
					<td class='td-email' value='${dsnv.DSNV[i].Email}'>${dsnv.DSNV[i].Email}</td>
					<td class='td-soDT' value='${dsnv.DSNV[i].SoDT}'>${dsnv.DSNV[i].SoDT}</td>
					<td class='td-ngaySinh' value='${dsnv.DSNV[i].NgaySinh}'>${ngaySinhFormat}</td>
					<td class='td-luongCB' value='${dsnv.DSNV[i].LuongCoBan}'>${dsnv.DSNV[i].LuongCoBan}</td>
					<td class='td-SNLV' value='${dsnv.DSNV[i].SoNgayLamViec}'>${dsnv.DSNV[i].SoNgayLamViec}</td>
					<td class='td-chucVu' value='${dsnv.DSNV[i].ChucVu}'>${dsnv.DSNV[i].ChucVu}</td>
					<td class='td-phuCap' value='${dsnv.DSNV[i].PhuCap}'>${dsnv.DSNV[i].PhuCap}</td>
					<td>
						<buton class='btn btn-danger btnSua'>Sửa</button>
					</td>
				</tr>
 			`;
 		}
 		// gắn dữ liệu lên bảng
 		$('#tbody-ds').html(dulieu);
 		//console.log(dsnv);
 	}

 	// XỬ LÝ NÚT XÓA
 	$('#xoaNV').click(function(){

 		swal({
			  title: "Bạn muốn xóa nhân viên?",
			  text: "",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
			  	$('.chkXoa').each(function(){
	 			if($(this).is(":checked")){
	 				var maNV = $(this).val();
	 				var viTri = TimViTri(maNV);
	 				//console.log(viTri);
	 				dsnv.XoaNhanVien(viTri); 				
	 			}
		 		});
		 		LuuLocalStorage(dsnv);
		 		HienThiLenBang(dsnv);
			    
			  } 

			});



 		
		  
		
 	});
 	// HÀM TÌM VỊ TRÍ CỦA ĐỐI TƯỢNG TRONG MẢNG
 	function TimViTri(maNV){
 		for (var i = 0; i < dsnv.DSNV.length; i++) {
 			if(dsnv.DSNV[i].MaNhanVien === maNV)
 				return i;
 		}
 	}


 	// Hàm resetform
 	function ResetForm(){
 		$(".input-nhanvien").val('');
 	}

 	// XỬ LÝ NÚT SỬA
 	$('body').delegate('.btnSua','click',function(){ 
 		// thay đổi tiêu đề modal
 		$('.modal-title').html('Cập nhật thông tin nhân viên');
 		// thay đổi footer
 		var footer = `
			<button class='btn btn-success' id="btnCapNhat">Cập nhật</button>
			<button class='btn btn-danger' id="dong">Đóng</button>
 		`;
 		$('.modal-footer').html(footer);
 		// lấy giá trị từ các cột		
 		var tr = $(this).closest('tr');
 		var maNV = $(tr).find('.td-maNV').attr('value');
 		var tenNV = $(tr).find('.td-tenNV').attr('value');
 		var email = $(tr).find('.td-email').html();
 		var sdt = $(tr).find('.td-soDT').html();
 		var ngaySinh = $(tr).find('.td-ngaySinh').attr('value');
 		var luongCB = $(tr).find('.td-luongCB').html();
 		var SNLV = $(tr).find('.td-SNLV').html();
 		var chucVu = $(tr).find('.td-chucVu').html();
 		var phuCap = $(tr).find('.td-phuCap').html();
 		// gán giá trị lên trường input trong modal
 		$('#maNV').val(maNV);
 		$('#tenNV').val(tenNV);
 		$('#email').val(email);
 		$('#soDT').val(sdt);
 		$('#ngaySinh').val(ngaySinh);
 		$('#luongCB').val(luongCB);
 		$('#soNgayLamViec').val(SNLV);
 		$('#chucVu').val(chucVu);
 		$('#phuCap').val(phuCap);
 		// gán thuộc tính readonly cho maNV
 		$('#maNV').attr('readonly','true');
 		// hiển thị modal
 		$('#btnModal').trigger('click');
 	});
 	// XỬ LÝ NÚT CẬP NHẬT
 	$('body').delegate('#btnCapNhat','click',function(){
 		var val = Validate();
 		if(val){
 			// lấy các giá trị từ input
 			var maNV = $('#maNV').val();
 			var tenNV = $('#tenNV').val();
 			var email = $('#email').val();
 			var soDT = $('#soDT').val();
 			var ngaySinh = $('#ngaySinh').val();
 			var luongCB = $('#luongCB').val();
 			var soNgayLamViec = $('#soNgayLamViec').val();
 			var chucVu = $('#chucVu').val();
 			var phuCap = $('#phuCap').val();
 			// tìm vị trí của nhân viên trong mảng
 			var viTri = TimViTri(maNV);
 			// khởi tạo đối tượng nhân viên
 			var nhanVien = new NhanVien(maNV,tenNV,email,soDT,ngaySinh,luongCB,soNgayLamViec,chucVu,phuCap);
 			// Cập nhật đối tượng nhân viên trong mảng danh sách nhân viên
 			dsnv.SuaNhanVien(viTri,nhanVien);
 			
 			// lưu vào localstorage
 			LuuLocalStorage(dsnv);
 			HienThiLenBang(dsnv);
 			ResetForm();
 			// đóng modal lại
 			$('#btnClose').trigger('click');
 			//swal("Hoàn thành!", "Đã cập nhật thông tin nhân viên!", "success");
 			new PNotify({
			    title: 'Hoàn thành!',
			    text: 'Đã cập nhật nhân viên.',
			    type: 'success'
			});

 		}
 	});

 	// CHỨC NĂNG TÌM KIẾM
 	$('#btnTimKiem').click(function(){
 		var key = $('#key').val().trim();
 		key = key.toUpperCase();
 		var tuKhoa = `<span class='tukhoa'>${key}</span>`;
 		var dsnvTK = new DanhSachNhanVien(); 		
 		for (var i = 0; i < dsnv.DSNV.length; i++) {
 			
 			var nhanVien = dsnv.DSNV[i];
 			

 			if(nhanVien.MaNhanVien.toUpperCase().includes(key)&&!nhanVien.TenNhanVien.toUpperCase().includes(key)){
 				// lấy giá trị từ đối tượng ra
 				var maNV = nhanVien.MaNhanVien;
	 			var tenNV = nhanVien.TenNhanVien;
	 			var email = nhanVien.Email;
	 			var soDT = nhanVien.SoDT;
	 			var ngaySinh = nhanVien.NgaySinh;
	 			var luongCB = nhanVien.LuongCoBan;
	 			var soNgayLamViec = nhanVien.SoNgayLamViec;
	 			var chucVu = nhanVien.ChucVu;
	 			var phuCap = nhanVien.PhuCap;

 				maNV = maNV.replace(key,tuKhoa);
 				var nv = new NhanVien(maNV,tenNV,email,soDT,ngaySinh,luongCB,soNgayLamViec,chucVu,phuCap);
 				dsnvTK.ThemNhanVien(nv);
 			}
 			else if(!nhanVien.MaNhanVien.toUpperCase().includes(key)&&nhanVien.TenNhanVien.toUpperCase().includes(key)){
 				// lấy giá trị từ đối tượng ra
 				var maNV = nhanVien.MaNhanVien;
	 			var tenNV = nhanVien.TenNhanVien;
	 			var email = nhanVien.Email;
	 			var soDT = nhanVien.SoDT;
	 			var ngaySinh = nhanVien.NgaySinh;
	 			var luongCB = nhanVien.LuongCoBan;
	 			var soNgayLamViec = nhanVien.SoNgayLamViec;
	 			var chucVu = nhanVien.ChucVu;
	 			var phuCap = nhanVien.PhuCap;

 				tenNV = tenNV.replace(key,tuKhoa);
 				var nv = new NhanVien(maNV,tenNV,email,soDT,ngaySinh,luongCB,soNgayLamViec,chucVu,phuCap);
 				dsnvTK.ThemNhanVien(nv);
 			}
 			else if(nhanVien.MaNhanVien.toUpperCase().includes(key)&&nhanVien.TenNhanVien.toUpperCase().includes(key)){
 				// lấy giá trị từ đối tượng ra
 				var maNV = nhanVien.MaNhanVien;
	 			var tenNV = nhanVien.TenNhanVien;
	 			var email = nhanVien.Email;
	 			var soDT = nhanVien.SoDT;
	 			var ngaySinh = nhanVien.NgaySinh;
	 			var luongCB = nhanVien.LuongCoBan;
	 			var soNgayLamViec = nhanVien.SoNgayLamViec;
	 			var chucVu = nhanVien.ChucVu;
	 			var phuCap = nhanVien.PhuCap;

	 			maNV = maNV.replace(key,tuKhoa);
 				tenNV = tenNV.replace(key,tuKhoa);
 				var nv = new NhanVien(maNV,tenNV,email,soDT,ngaySinh,luongCB,soNgayLamViec,chucVu,phuCap);
 				dsnvTK.ThemNhanVien(nv);
 			}
 			
 		}
 		// Hiển thị danh sách tìm kiếm được lên bảng
 		HienThiLenBang(dsnvTK);
 		NhapNhay(5,'.tukhoa');
 	});

 	// tạo hiệu ứng nhấp nháy
 	function NhapNhay(solan,id){
 		for(var i = 0; i < solan; i++){
 			$(id).fadeOut(500);
 			$(id).fadeIn(500);
 		}
 	}














 	// XỬ LÝ LOCALSTORAGE
 	// hàm lưu localstorage
 	function LuuLocalStorage(dsnv){
 		var jsonDSNV = JSON.stringify(dsnv.DSNV);
 		localStorage.setItem("DanhSachNhanVien",jsonDSNV);
 	}
 	// hàm lấy dữ liệu từ localstorage
 	function LayLocalStorage(){
 		if(localStorage.getItem("DanhSachNhanVien")){
 			var jsonDSNV = localStorage.getItem("DanhSachNhanVien");
 			dsnv.DSNV = JSON.parse(jsonDSNV);
 			HienThiLenBang(dsnv);
 		}
 	}

});
