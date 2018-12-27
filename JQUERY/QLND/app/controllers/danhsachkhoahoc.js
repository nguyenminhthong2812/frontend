$(document).ready(function(){
	// khai báo biến toàn cục
	var khoaHocService = new KhoaHocService();
	var danhSachKhoaHoc = new DanhSachKhoaHoc();
	var nguoiDungService = new NguoiDungService();
	// gọi hàm load các danh sách cần thiết
	LoadDSKH();
	LoadNguoiDung();
	// load danh sách khóa học
	function LoadDSKH(){
		khoaHocService.LayDanhSachKhoaHoc()
		.done(function(dskh){
			//console.log(dskh);
			danhSachKhoaHoc.DSKH = dskh;
			HienThiDSKH(dskh);
		})
		.fail(function(error){
			console.log(error);
		});

	}
	// load danh sách người tạo
	function LoadNguoiDung(){
		nguoiDungService.LayNguoiDung()
		.done(function(dsnd){
			console.log(dsnd);
			var noiDung = '';
			//hiển thị lên select
			for (var i = 0; i < dsnd.length; i++) {
				if(dsnd[i].MaLoaiNguoiDung == "GV"){
					noiDung += `
						<option value="${dsnd[i].TaiKhoan}">${dsnd[i].HoTen}</option>
					`;
				}
			}
			$("#nguoiTao").html(noiDung);
		})
		.fail(function(error){
			console.log(error);
		});
	}
	

	// hiển thị dữ liệu lên bảng
	function HienThiDSKH(dskh){
		var noiDung = '';
		for (var i = 0; i < dskh.length; i++) {
			noiDung += `
				<tr>
					<td><input type="checkbox" value="${dskh[i].MaKhoaHoc}"/></td>
					<td>${dskh[i].MaKhoaHoc}</td>
					<td>${dskh[i].TenKhoaHoc}</td>
					<td>${dskh[i].MoTa}</td>
					<td><img src="${dskh[i].HinhAnh}"" height='25px' width='50px'/></td>
					<td>${dskh[i].LuotXem}</td>
					<td>${dskh[i].NguoiTao}</td>
				</tr>
			`;
		}
		$("#tbody").html(noiDung);
	}
	// xử lý nút thêm khóa học
	$("#btnThem").click(function(){
		// thay đổi title modal
		$(".modal-title").html("Thêm khóa học")
		// thay đổi footer
		var footer = `
			<button id="btnThemKhoaHoc" class="btn btn-success">Thêm khóa học</button>
			<button id="btnDong" class="btn btn-danger">Đóng</button>
		`;
		$(".modal-footer").html(footer);
		// mở modal
		$("#btnModal").trigger("click");
	})

	// xử lý nút thêm khóa học
	$("body").delegate("#btnThemKhoaHoc","click",function(){
		// lấy các giá trị từ người dùng nhập
		var maKH = $("#maKH").val();
		var tenKh = $("#tenKH").val();
		var moTa = $("#moTa").val();
		var hinhAnh = $("#hinhAnh").val();
		var luotXem = $("#luotXem").val();
		var nguoiTao = $("#nguoiTao").val();
		// khởi tạo khoahoc
		var khoaHoc = new KhoaHoc(maKH,tenKh,moTa,hinhAnh,luotXem,nguoiTao);
		// gọi phương thức thêm khóa học
		khoaHocService.ThemKhoaHoc(khoaHoc)
		.done(function(success){
			console.log(success);
			// load lại danh sách khóa học
			LoadDSKH();
			// đóng lại modal
			$("#btnClose").trigger("click");
			// thông báo thêm thành công
			swal("Ok!", "Đã thêm khóa học!", "success");
		})
		.fail(function(error){
			console.log(error);
		});
	});

	// xử lý nút đóng
	$("body").delegate("#btnDong","click",function(){
		$("#btnClose").trigger("click");
	});





});