// khai báo 1 lớp nhân viên
function NhanVien(maNV,ho,ten,ngaySinh,chucVu){
	this.maNV = maNV;
	this.ho = ho;
	this.ten = ten;
	this.ngaySinh = ngaySinh;
	this.chucVu = chucVu;
	this.mangNV = [
		this.maNV,this.ho,this.ten,this.ngaySinh,this.chucVu
	];
}