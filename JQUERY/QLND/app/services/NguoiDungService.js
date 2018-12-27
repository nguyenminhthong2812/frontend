function NguoiDungService(){
	this.LayNguoiDung = function(){
		var urlAPI = "http://sv.myclass.vn/api/QuanLyTrungTam/danhsachnguoidung";
		return $.ajax({
			type:"GET",
			datatype:"json",
			url:urlAPI
		});
	}
}