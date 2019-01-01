function NhanVien(TenNhanVien,MaNhanVien,Email,SoDT,NgaySinh,LuongCoBan,SoNgayLamViec,ChucVu,PhuCap)
{
	this.TenNhanVien = TenNhanVien,
	this.MaNhanVien = MaNhanVien,
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
