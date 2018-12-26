$(document).ready(function function_name() {
	// Khai báo biến toàn cục
	var danhSachNguoiDung = new DanhSachNguoiDung();
	// gọi hàm lấy dữ liệu từ localStorage
	LayStorage();
	//mở modal
	$("#btnThem").click(function(){
		// thay đổi tên tiêu đề
		$(".modal-title").html("Thêm người dùng");
		// thêm nút
		var button = `
			<button type="button" class="btn btn-success" id="btnThemNguoiDung">
			Thêm người dùng</button>
			<button type="button" class="btn btn-danger" id="btnDong">
			Đóng</button>
		`;
		$(".modal-footer").html(button);
		// mở modal
		$("#btnModal").trigger("click");
		
	});
	// XỬ LÝ NÚT ĐÓNG
	$("body").delegate("#btnDong","click",function(){
		$("#btnClose").trigger("click");
	});
	// XỬ LÝ NÚT THÊM  NGƯỜI DÙNG
	$("body").delegate("#btnThemNguoiDung","click",function(){
		// lấy giá trị từ input
		var tk = $("#taiKhoan").val();
		var mk = $("#matKhau").val();
		var ht = $("#hoTen").val();
		var email = $("#email").val();
		var sdt = $("#sdt").val();
		// khởi tạo đối tượng người dùng
		var nguoiDung = new NguoiDung(tk,mk,ht,email,sdt);
		// Thêm vào danh sách người dùng
		danhSachNguoiDung.ThemNguoiDung(nguoiDung);
		var dsnd = danhSachNguoiDung.DSND;
		LuuStorage(dsnd);
		// clear input
		$(".input-nguoidung").val("");
		// đóng modal
		$("#btnClose").trigger("click");
		// Hiển thị dữ liệu lên bảng
		HienThiLenBang(dsnd);
		swal("Ok!", "Đã thêm người dùng!", "success");
	});

	// lưu localstorage
	function LuuStorage(dsnd){
		var jsonDSND = JSON.stringify(dsnd);
		localStorage.setItem("DanhSachNguoiDung",jsonDSND);
	}

	// lấy dữ liệu từ localStorage
	function LayStorage(){
		if(localStorage.getItem("DanhSachNguoiDung"))
		{
			var jsonDSND = localStorage.getItem("DanhSachNguoiDung");
			danhSachNguoiDung.DSND = JSON.parse(jsonDSND);
			HienThiLenBang(danhSachNguoiDung.DSND);
		}
	}

	// Hiển thị lên bảng
	function HienThiLenBang(dsnd){
		var tbody;
		for (var i = 0; i < dsnd.length; i++) {
			// lấy giá trị người dùng
			var tk = dsnd[i].taiKhoan;
			var mk = dsnd[i].matKhau;
			var ht = dsnd[i].hoTen;
			var email = dsnd[i].email;
			var sdt = dsnd[i].sodt;
			// tạo string themplate thêm hàng và các cột
			var tr = `
				<tr class="tr-nguoidung">
					<td><input class="chk-xoa" type="checkbox" value="${tk}"/></td>
					<td class="td-nguoidung" data-taikhoan="${tk}" data-matkhau="${mk}" 
						data-hoten="${ht}" data-email="${email}" data-sdt="${sdt}"  >${tk}</td>
					<td class="td-nguoidung" data-taikhoan="${tk}" data-matkhau="${mk}" 
						data-hoten="${ht}" data-email="${email}" data-sdt="${sdt}">${mk}</td>
					<td class="td-nguoidung" data-taikhoan="${tk}" data-matkhau="${mk}" 
						data-hoten="${ht}" data-email="${email}" data-sdt="${sdt}">${ht}</td>
					<td class="td-nguoidung" data-taikhoan="${tk}" data-matkhau="${mk}" 
						data-hoten="${ht}" data-email="${email}" data-sdt="${sdt}">${email}</td>
					<td class="td-nguoidung" data-taikhoan="${tk}" data-matkhau="${mk}" 
						data-hoten="${ht}" data-email="${email}" data-sdt="${sdt}">${sdt}</td>
				</tr>
			`;
			tbody += tr;
		}
		$("#tbody").html(tbody);
	}
	// xóa người dùng
	$("#btnXoa").click(function(){

		swal({
			  title: "Bạn có muốn xóa người dùng?",
			  text: "Người dùng sẽ được xóa ra khỏi bảng danh sách!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
			    $(".chk-xoa").each(function() {			
				if($(this).is(":checked"))
					{
						var tk = $(this).val();
						var index = FindIndex(tk);
						danhSachNguoiDung.XoaNguoiDung(index);
					}
				});
				LuuStorage(danhSachNguoiDung.DSND);			
				HienThiLenBang(danhSachNguoiDung.DSND);
			  } 			  
			});
	});
	// tìm vị trí của người dùng trong mảng
	function FindIndex(taiKhoan) {
		for (var i = 0; i < danhSachNguoiDung.DSND.length; i++) {
			if(danhSachNguoiDung.DSND[i].taiKhoan == taiKhoan)
				return i;
		}
	}
	// xử lý sự kiện click vào hàng hiện lên modal
	$("body").delegate(".td-nguoidung","click",function(){
		// thay đổi tên tiêu đề
		$(".modal-title").html("Cập nhật người dùng");
		// thêm nút
		var button = `
			<button type="button" class="btn btn-success" id="btnSuaNguoiDung">
			Cập nhật</button>
			<button type="button" class="btn btn-danger" id="btnDong">
			Đóng</button>
		`;
		$(".modal-footer").html(button);
		//gán giá trị lên modal		
		$("#taiKhoan").attr("Readonly","true");
		$("#taiKhoan").val($(this).attr("data-taikhoan"));
		$("#matKhau").val($(this).attr("data-matkhau"));
		$("#hoTen").val($(this).attr("data-hoten"));
		$("#email").val($(this).attr("data-email"));
		$("#sdt").val($(this).attr("data-sdt"));
		// mở modal		
		$("#btnModal").trigger("click");
	});
	// cập nhật thông tin người dùng
	$("body").delegate("#btnSuaNguoiDung","click",function(){
		// lấy giá trị từ input
		var tk = $("#taiKhoan").val();
		var mk = $("#matKhau").val();
		var ht = $("#hoTen").val();
		var email = $("#email").val();
		var sdt = $("#sdt").val();
		// khởi tạo đối tượng người dùng
		var nguoiDung = new NguoiDung(tk,mk,ht,email,sdt);
		var index = FindIndex(tk);
		// Thêm vào danh sách người dùng
		danhSachNguoiDung.CapNhat(index,nguoiDung);
		var dsnd = danhSachNguoiDung.DSND;
		LuuStorage(dsnd);
		// clear input
		$(".input-nguoidung").val("");
		// đóng modal
		$("#btnClose").trigger("click");
		// Hiển thị dữ liệu lên bảng
		HienThiLenBang(dsnd);
		swal("Ok!", "Đã cập nhật người dùng!", "success");
	});
	// bắt sự kiện keyup, tìm kiếm
	$("#tukhoa").keyup(function(){		
		var dsnd = new DanhSachNguoiDung();
		var tukhoa = $("#tukhoa").val();
		tukhoa = tukhoa.trim();
		tukhoa = tukhoa.toLowerCase();		
		for (var i = 0; i < danhSachNguoiDung.DSND.length; i++) {
			var hoTenND = danhSachNguoiDung.DSND[i].hoTen;
			hoTen = hoTenND.trim();
			hoTen = hoTenND.toLowerCase();			
			if(hoTen.includes(tukhoa)){
				// cắt ráp chuỗi thêm class, để xử lý hiệu ứng tìm kiếm 
				var str1 = hoTenND.substr(0,hoTen.indexOf(tukhoa));
				var str2 = "<span class='hieuung'>" + $("#tukhoa").val() + "</span>";
				var str3 = hoTenND.substr(hoTen.indexOf(tukhoa) + tukhoa.length);
				var str = str1 + str2 + str3;	
				var tk = danhSachNguoiDung.DSND[i].taiKhoan;
				var mk = danhSachNguoiDung.DSND[i].matKhau;
				var ht = str;
				var email = danhSachNguoiDung.DSND[i].email;
				var sdt = danhSachNguoiDung.DSND[i].sdt;
				var nguoiDung = new NguoiDung(tk,mk,ht,email,sdt);					
				dsnd.ThemNguoiDung(nguoiDung);
							
			}			
		}			
		HienThiLenBang(dsnd.DSND);
		jQuery(".hieuung").NhapNhay(3);
	});

	









});