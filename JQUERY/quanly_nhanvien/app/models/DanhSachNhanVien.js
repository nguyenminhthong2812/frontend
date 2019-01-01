function DanhSachNhanVien(){
	this.DSNV = []
}
DanhSachNhanVien.prototype.ThemNhanVien = function(NhanVien){
	this.DSNV.push(NhanVien);
}
DanhSachNhanVien.prototype.XoaNhanVien = function(index){
	this.DSNV.splice(index,1);
}
DanhSachNhanVien.prototype.SuaNhanVien = function(index,NhanVien){
	this.DSNV.splice(index,1,NhanVien);
}