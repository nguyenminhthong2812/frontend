$(document).ready(function(){
	// khai báo biến toàn cục
	var khoaHocService = new KhoaHocService();
	var danhSachKhoaHoc = new DanhSachKhoaHoc();
	var nguoiDungService = new NguoiDungService();
	// gọi hàm load các danh sách cần thiết
	LoadDSKH();
	LoadNguoiDung();
	//CKEDITOR.replace( 'editor1' );
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
			//console.log(dsnd);
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
				<tr class="trKH">
					<td><input type="checkbox" value="${dskh[i].MaKhoaHoc}"/></td>
					<td class="maKH">${dskh[i].MaKhoaHoc}</td>
					<td class="tenKH">${dskh[i].TenKhoaHoc}</td>
					<td class="moTa">${dskh[i].MoTa}</td>
					<td class="hinhAnh"><img src="${dskh[i].HinhAnh}"" height='25px' width='50px'/></td>
					<td class="luotXem">${dskh[i].LuotXem}</td>
					<td class="nguoiTao">${dskh[i].NguoiTao}</td>
					<td><button class="btn btn-success btnSua">Cập Nhật</button></td>
					<td><button class="btn btn-danger btnXoa">Xóa</button></td>
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
	// xử lý nút sửa
	$("body").delegate(".btnSua","click",function(){
		// thay tên tiêu đề modal
		$(".modal-title").html("Cập nhật khóa học");
		// thay footer
		var footer = `
			<button class="btn btn-success" id="btnCapNhat">Cập Nhật</button>
			<button class="btn btn-danger" id="btnDong">Đóng</button>
		`;
		$(".modal-footer").html(footer);
		// mở modal
		$("#btnModal").trigger("click");
		// lấy dữ liệu gán lên input của modal
		var trDL = $(this).closest(".trKH");		
		$("#maKH").attr("Readonly","true");
		var maKH = trDL.find(".maKH").html();
		var tenKH = trDL.find(".tenKH").html();
		var moTa = trDL.find(".moTa").html();
		var hinhAnh = trDL.find(".hinhAnh").find("img").attr("src");
		var luotXem = trDL.find(".luotXem").html();
		var nguoiTao = trDL.find(".nguoiTao").html();

		$("#maKH").val(maKH);
		$("#tenKH").val(tenKH);
		$("#moTa").val(moTa);
		$("#hinhAnh").val(hinhAnh);
		$("#luotXem").val(luotXem);
		$("#nguoiTao").val(nguoiTao);
	});
	// xử lý nút cập nhật
	$("body").delegate("#btnCapNhat","click",function(){
		// lấy dữ liệu từ modal
		var maKH = $("#maKH").val();
		var tenKh = $("#tenKH").val();
		var moTa = $("#moTa").val();
		var hinhAnh = $("#hinhAnh").val();
		var luotXem = $("#luotXem").val();
		var nguoiTao = $("#nguoiTao").val();
		// khởi tạo khoahoc
		var khoaHoc = new KhoaHoc(maKH,tenKh,moTa,hinhAnh,luotXem,nguoiTao);
		// gọi phương thức thêm khóa học
		khoaHocService.CapNhatKhoaHoc(khoaHoc)
		.done(function(success){
			console.log(khoaHoc);
			console.log(success);			
			// load lại danh sách khóa học
			LoadDSKH();
			// đóng lại modal
			$("#btnClose").trigger("click");
			// thông báo thêm thành công
			swal("Ok!", "Đã cập nhật khóa học!", "success");
		})
		.fail(function(error){
			console.log(error);
		});
	});
	// xử lý nút xóa 
	$("body").delegate(".btnXoa","click",function(){
		swal({
			  title: "Bạn có muốn xóa khóa học?",
			  text: "khóa học sẽ được xóa ra khỏi bảng danh sách!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
			  	// lấy maKH
			    var trDL = $(this).closest(".trKH");
			    var id = trDL.find(".maKH").html();
			    // gọi phương thức xóa
			    khoaHocService.XoaKhoaHoc(id)
			    .done(function(success){
			    	console.log(success);
			    	LoadDSKH();
			    })
			    .fail(function(error){
			    	console.log(error);
			    });
			  } 			  
			});
	})


});