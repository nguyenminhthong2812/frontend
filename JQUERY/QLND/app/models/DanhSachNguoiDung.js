function DanhSachNguoiDung() {
	this.DSND = [];
}

//phương thức thêm người dùng
DanhSachNguoiDung.prototype.ThemNguoiDung = function(nguoiDung) {
	DanhSachNguoiDung.DSND.push(nguoiDung);	
};
// xóa người dùng
DanhSachNguoiDung.prototype.XoaNguoiDung = function(index){
	DanhSachNguoiDung.DSND.splice(index,1);
}