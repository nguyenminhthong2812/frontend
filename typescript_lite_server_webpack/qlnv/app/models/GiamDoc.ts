import {NhanVien} from './NhanVien';

export class GiamDoc extends NhanVien{
    public TienHoaHong: number;
    constructor(manv:string, hoten:string, luong:number, loainv:string, tienhh:number){
        super(manv,hoten,luong,loainv);
        this.TienHoaHong = tienhh;
    }
    public TinhLuong(){
        this.TongLuong = this.LuongCB * 4 + this.TienHoaHong;        
    }
}