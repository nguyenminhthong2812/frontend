import {NhanVien} from './NhanVien';

export class TroLy extends NhanVien{
    public TinhLuong(){
        this.TongLuong = this.LuongCB * 3;
    }
}