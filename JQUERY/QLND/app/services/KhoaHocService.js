function KhoaHocService(){
	this.LayDanhSachKhoaHoc = function(){
		var urlAPI = "http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc";
		return $.ajax({
			type:"GET",
			datatype:"json",
			url: urlAPI
		});


	},
	this.ThemKhoaHoc = function(khoahoc){
		var urlAPI = "http://sv.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc";
		return $.ajax({
			type:"POST",
			datatype:"json",
			url:urlAPI,
			data:khoahoc
		});
	}	
}