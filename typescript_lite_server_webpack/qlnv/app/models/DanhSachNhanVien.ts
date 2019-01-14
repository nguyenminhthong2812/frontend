import {NhanVien} from './NhanVien';
export class DanhSachNhanVien{
    public MangNhanVien:Array<NhanVien> = [];
    public ThemNhanVien(nhanvien){
        this.MangNhanVien.push(nhanvien);
    }
}