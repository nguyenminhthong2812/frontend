function DanhSachNguoiDung() {
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