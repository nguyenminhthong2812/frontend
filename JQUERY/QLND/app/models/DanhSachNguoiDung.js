export function DanhSachNguoiDung() {
	this.DSND = [];
}

//phương thức thêm người dùng
DanhSachNguoiDung.prototype.ThemNguoiDung = function(nguoiDung) {
	this.DSND.push(nguoiDung);	
};
// xóa người dùng
DanhSachNguoiDung.prototype.XoaNguoiDung = function(index){
	this.DSND.splice(index,1);
}
// Cập nhật lại người dùng
DanhSachNguoiDung.prototype.CapNhat = function(index,nguoiDung){
	this.DSND.splice(index,1,nguoiDung);
}