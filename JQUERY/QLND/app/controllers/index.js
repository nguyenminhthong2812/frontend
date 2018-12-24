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
				<tr>
					<td><input type="checkbox" id="${tk}"/></td>
					<td>${tk}</td>
					<td>${mk}</td>
					<td>${ht}</td>
					<td>${email}</td>
					<td>${sdt}</td>
				</tr>
			`;
			tbody += tr;
		}
		$("#tbody").html(tbody);
	}



});