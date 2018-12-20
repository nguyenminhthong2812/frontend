//Khai báo lớp danh sách nhân viên để chứa danh sách các nhân viên
function DanhSachNV(){
	this.mangDS = [];
}

DanhSachNV.prototype.ThemNV = function(nv) {
	// body...
	this.mangDS.push(nv);
};