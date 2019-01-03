function NhanVien(MaNhanVien,TenNhanVien,Email,SoDT,NgaySinh,LuongCoBan,SoNgayLamViec,ChucVu,PhuCap)
{
	this.MaNhanVien = MaNhanVien,
	this.TenNhanVien = TenNhanVien,	
	this.Email = Email,
	this.SoDT = SoDT,
	this.NgaySinh = NgaySinh,
	this.LuongCoBan = LuongCoBan,
	this.SoNgayLamViec = SoNgayLamViec,
	this.ChucVu = ChucVu,
	this.PhuCap = PhuCap
}

NhanVien.prototype.TinhLuong = function() {
	var luong;
	luong = this.SoNgayLamViec*this.LuongCoBan + this.PhuCap;
	return luong; 
}
