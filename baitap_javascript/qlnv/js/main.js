// datepicker
$('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
 });
$('#datepicker-sua').datepicker({
            uiLibrary: 'bootstrap4'
 });
// khai báo biến toàn cục
var mangTB = ["Vui lòng nhập mã nhân viên",
				"Vui lòng nhập họ nhân viên",
				"Vui lòng nhập tên nhân viên",
				"Vui lòng nhập ngày sinh",
				"Vui lòng chọn chức vụ",
				"Vui lòng chỉ nhập ký tự",
				"Chỉ nhập ký tự trong khoảng"
			];
var danhSachNV = new DanhSachNV();

// hàm lấy element
function GetMyEle(ele) {
	// body...
	var ele = document.getElementById(ele);
	return ele;
}

// kiểm tra có nhập ko
function KiemTraRong(ele,idTb,indexTb) {
	var ele = GetMyEle(ele);
	var idTb = GetMyEle(idTb);
	var kq;
	if(ele.value == "")
	{
		//idTb.display = "block";
		idTb.innerHTML = mangTB[indexTb];
		kq = false;
	}
	else{
		idTb.innerHTML = "";
		kq = true;
	}
	return kq;
}
// Kiểm tra nhập chức vụ
function kiemTraChucVu(ele,idTb,indexTb) {
	var ele = GetMyEle(ele);
	var idTb = GetMyEle(idTb);
	var kq;
	if(ele.selectedIndex == 0)
	{
		//idTb.display = "block";
		idTb.innerHTML = mangTB[indexTb];
		kq = false;
	}
	else{
		idTb.innerHTML = "";
		kq = true;
	}
	return kq;
}
// kiểm tra nhập là ký tự
function KiemTraKyTu(ele,idTb,indexTb) {
	var ele = GetMyEle(ele);
	var idTb = GetMyEle(idTb);
	var letter = /^[a-zA-z]+$/;
	var kq;
	if(!ele.value.match(letter))
	{
		//idTb.display = "block";
		idTb.innerHTML = mangTB[indexTb];
		kq = false;
	}
	else{
		idTb.innerHTML = "";
		kq = true;
	}
	return kq;
}
// kiểm tra nhập trong khoản
function KtNhapTrongKhoang(ele,idTb,indexTb,min,max){
	var ele = GetMyEle(ele);
	var idTb = GetMyEle(idTb);	
	var kq;
	if(ele.value.length < min || ele.value.length > max)
	{
		//idTb.display = "block";
		idTb.innerHTML = mangTB[indexTb] + ' từ ' + min + ' đến ' + max;
		kq = false;
	}
	else{
		idTb.innerHTML = "";
		kq = true;
	}
	return kq;
}
// Kiểm tra đã thỏa điều kiện nhập chưa
function KiemTraNhap(){
	var nhapMa = KiemTraRong('maNV','tbMaNV',0);
	if(nhapMa)
		var nhapTrongKhoang = KtNhapTrongKhoang('maNV','tbMaNV',6,4,6);
	var nhapHo = KiemTraRong('ho','tbHo',1);
	if(nhapHo)
		var nhapKyTuHo = KiemTraKyTu('ho','tbHo',5);
	var nhapTen = KiemTraRong('ten','tbTen',2);
	if(nhapTen)
		var nhapKyTuTen = KiemTraKyTu('ten','tbTen',5);
	var nhapNgaySinh = KiemTraRong('datepicker','tbNgaySinh',3);
	var nhapChucVu = kiemTraChucVu('chucVu','tbChucVu',4);
	if(nhapTrongKhoang && nhapKyTuHo && nhapKyTuTen && nhapNgaySinh && nhapChucVu)
		return true;
	else 
		return false;
}

function KiemTraNhapSua(){
	var nhapMa = KiemTraRong('maNV-sua','tbMaNV-sua',0);
	if(nhapMa)
		var nhapTrongKhoang = KtNhapTrongKhoang('maNV-sua','tbMaNV-sua',6,4,6);
	var nhapHo = KiemTraRong('ho-sua','tbHo-sua',1);
	if(nhapHo)
		var nhapKyTuHo = KiemTraKyTu('ho-sua','tbHo-sua',5);
	var nhapTen = KiemTraRong('ten-sua','tbTen-sua',2);
	if(nhapTen)
		var nhapKyTuTen = KiemTraKyTu('ten-sua','tbTen-sua',5);
	var nhapNgaySinh = KiemTraRong('datepicker-sua','tbNgaySinh-sua',3);
	var nhapChucVu = kiemTraChucVu('chucVu-sua','tbChucVu-sua',4);
	if(nhapTrongKhoang && nhapKyTuHo && nhapKyTuTen && nhapNgaySinh && nhapChucVu)
		return true;
	else 
		return false;
}
// làm mới form
function LamMoi() {
	GetMyEle('maNV').value = '';
	GetMyEle('ho').value = '';
	GetMyEle('ten').value = '';
	GetMyEle('datepicker').value = '';
	GetMyEle('chucVu').selectedIndex = 0;
}
// Thêm nhân viên
GetMyEle('btnThem').addEventListener("click",function(){
	var ktra = KiemTraNhap();
	if(ktra){
		var ma = GetMyEle('maNV').value;
		var ho = GetMyEle('ho').value;
		var ten = GetMyEle('ten').value;
		var ngaySinh = GetMyEle('datepicker').value;
		var cv = GetMyEle('chucVu').value;
		var nhanVien = new NhanVien(ma,ho,ten,ngaySinh,cv);
		danhSachNV.ThemNV(nhanVien);
		//console.log(danhSachNV.mangDS.length);
		//LamMoi();
		HienThiLenBang(danhSachNV);
	}
});
// tìm vị trí của nhân viên theo manv
function FindIndex(maNV) {
	var index = -1;
	for (var i = 0; i < danhSachNV.mangDS.length; i++) {
		if(danhSachNV.mangDS[i].maNV == maNV){
			index = i;
			break;
		}
	}
	return index;
}
// cập nhật lại nhân viên
GetMyEle('btnCapNhat').addEventListener("click",function(){
	var ktra = KiemTraNhapSua();
	if(ktra){
		var ma = GetMyEle('maNV-sua').value;
		var ho = GetMyEle('ho-sua').value;
		var ten = GetMyEle('ten-sua').value;
		var ngaySinh = GetMyEle('datepicker-sua').value;
		var cv = GetMyEle('chucVu-sua').value;
		var index = FindIndex(ma);
		//var nv = danhSachNV.mangDS[index];
		//console.log(danhSachNV.mangDS[index].ho);		
		
		
		//danhSachNV.mangDS[index].maNV = ma;
		danhSachNV.mangDS[index].ho = ho;
		danhSachNV.mangDS[index].ten = ten;
		danhSachNV.mangDS[index].ngaySinh = ngaySinh;
		danhSachNV.mangDS[index].chucVu = cv;
		// cập nhật lại giá trị trong mảng nhân viên luôn
		danhSachNV.mangDS[index].mangNV[1] = ho;
		danhSachNV.mangDS[index].mangNV[2] = ten;
		danhSachNV.mangDS[index].mangNV[3] = ngaySinh;
		danhSachNV.mangDS[index].mangNV[4] = cv;
		console.log(danhSachNV.mangDS[index]);
		
		HienThiLenBang(danhSachNV);
	}
});

// Hiển thị dữ liệu lên bảng
function  HienThiLenBang(danhsach) {	
	var nv = new NhanVien();
	var tbody = GetMyEle('tbody');
	tbody.innerHTML = "";
	for (var i = 0; i < danhsach.mangDS.length; i++) {
		nv = danhsach.mangDS[i];
		//tạo dòng chứa thông tin
		var tr = document.createElement('tr');
		// tạo cột stt
		var tdStt = document.createElement('td');
		tdStt.innerHTML = i + 1;
		tr.appendChild(tdStt);
		// lặp thêm từng cột thông tin nhân viên
		for (var j = 0; j < nv.mangNV.length; j++) {
			var td = document.createElement('td');
			td.innerHTML = nv.mangNV[j];
			tr.appendChild(td);
		}
		// thêm cột chứa các nút thao tác
		// 
		var btnSua = "<button class='btn btn-danger mr-1' data-toggle='modal' data-target='#modal-sua' id='sua_" + nv.maNV + "_" + i + "'>Sửa</button>";
		var btnXoa = "<button class='btn btn-danger' id='xoa_" + nv.maNV + "_" + i + "'>Xóa</button>";
			
		var tdThaoTac = document.createElement('td');
		tdThaoTac.innerHTML = btnSua + btnXoa;
		tr.appendChild(tdThaoTac);
		tbody.appendChild(tr);

		// tạo sự kiện click cho nút
		DeleteHandler("xoa_" + nv.maNV + "_" + i);
		EditHandler("sua_" + nv.maNV + "_" + i);
	}
}
// tạo sự kiện xóa cho nút xóa
function DeleteHandler(ele){
	GetMyEle(ele).addEventListener("click",function(){
		//console.log(this.id);
		var id = this.id;
		var mangindex = id.split("_");
		//danhSachNV.mangDS.splice(mangindex[2],1);	
		danhSachNV.XoaNV(mangindex[2]);
		HienThiLenBang(danhSachNV);
	});
}
// tạo sự kiện nút sửa
function EditHandler(ele){
	GetMyEle(ele).addEventListener("click",function(){
		//console.log(this.id);
		var id = this.id;
		var mangindex = id.split("_");			
		var nv = danhSachNV.mangDS[mangindex[2]];				
		GetMyEle('maNV-sua').value = nv.mangNV[0];
		GetMyEle('ho-sua').value = nv.mangNV[1];
		GetMyEle('ten-sua').value = nv.mangNV[2];
		GetMyEle('datepicker-sua').value = nv.mangNV[3];
		GetMyEle('chucVu-sua').value = nv.mangNV[4];
	});
}
GetMyEle('btnTimKiem').addEventListener("click",function(){
	var noidung = GetMyEle('ndTk').value;
	var dsTimKiem = new DanhSachNV();
	if(GetMyEle('chontk').value == 'Theo tên')
	{
		// var i = danhSachNV.mangDS.indexOf(ndTk);
		// var nv = new NhanVien();
		// nv = danhSachNV.mangDS[i];
		// dsTimKiem.ThemNV(nv);
		for (var i = 0; i < danhSachNV.mangDS.length; i++) {			
			if(danhSachNV.mangDS[i].ten == noidung)
			{
				var nv = new NhanVien();
				nv = danhSachNV.mangDS[i];
				dsTimKiem.ThemNV(nv);
			}
		}
	}
	else if(GetMyEle('chontk').value == 'Theo mã')
	{
		for (var i = 0; i < danhSachNV.mangDS.length; i++) {			
			if(danhSachNV.mangDS[i].ten == noidung)
			{
				var nv = new NhanVien();
				nv = danhSachNV.mangDS[i];
				dsTimKiem.ThemNV(nv);
			}
		}
	}
	HienThiLenBang(dsTimKiem);
	// hiển thị lên bảng
	// var nhanvien = new NhanVien();
	// var tbody = GetMyEle('tbody');
	// tbody.innerHTML = "";
	// for (var i = 0; i < dsTimKiem.mangDS.length; i++) {
	// 	nv = dsTimKiem.mangDS[i];
	// 	//tạo dòng chứa thông tin
	// 	var tr = document.createElement('tr');
	// 	// tạo cột stt
	// 	var tdStt = document.createElement('td');
	// 	tdStt.innerHTML = i + 1;
	// 	tr.appendChild(tdStt);
	// 	// lặp thêm từng cột thông tin nhân viên
	// 	for (var j = 0; j < nv.mangNV.length; j++) {
	// 		var td = document.createElement('td');
	// 		td.innerHTML = nv.mangNV[j];
	// 		tr.appendChild(td);
	// 	}
	// 	// thêm cột chứa các nút thao tác
	// 	// 
	// 	var btnSua = "<button class='btn btn-danger mr-1' data-toggle='modal' data-target='#modal-sua' id='sua_" + nv.maNV + "_" + i + "'>Sửa</button>";
	// 	var btnXoa = "<button class='btn btn-danger' id='xoa_" + nv.maNV + "_" + i + "'>Xóa</button>";
			
	// 	var tdThaoTac = document.createElement('td');
	// 	tdThaoTac.innerHTML = btnSua + btnXoa;
	// 	tr.appendChild(tdThaoTac);
	// 	tbody.appendChild(tr);

	// 	// tạo sự kiện click cho nút
	// 	DeleteHandler("xoa_" + nv.maNV + "_" + i);
	// 	EditHandler("sua_" + nv.maNV + "_" + i);
	// }
});