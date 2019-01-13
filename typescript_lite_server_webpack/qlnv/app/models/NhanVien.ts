export class NhanVien{
    public MaNhanVien:string;
    public HoTen:string;
    public LuongCB:number;
    public LoaiNV:string;
    public TongLuong:number;
    constructor(manv:string,hoten:string,luong:number,loainv:string){
        this.MaNhanVien = manv;
        this.HoTen = hoten;
        this.LuongCB = luong;
        this.LoaiNV = loainv;
    }
    public TinhLuong(){
        this.TongLuong = this.LuongCB;
    }

}