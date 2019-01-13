import {NhanVien} from './NhanVien';
export class QuanLy extends NhanVien{
    public TinhLuong(){
        this.TongLuong = this.LuongCB * 2;
    }
}