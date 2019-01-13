// Kiểm tra loại nhân viên
function KiemTraLoaiNhanVien(){
    let mangLoaiNV:NodeListOf<any> = document.getElementsByClassName('loaiNV');
    for(let i in mangLoaiNV){
        if(mangLoaiNV[i].checked)
            return mangLoaiNV[i].value;
    }
    return null;
}

// Thêm nhân viên
function ThemNhanVien(){
    let maNV = (<HTMLInputElement>document.getElementById('maNV')).value;
}