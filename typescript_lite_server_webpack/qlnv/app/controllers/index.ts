import { NhanVien } from "../models/NhanVien";
import { QuanLy } from "../models/QuanLy";
import { TroLy } from "../models/TroLy";
import { GiamDoc } from "../models/GiamDoc";
import { DanhSachNhanVien } from "../models/DanhSachNhanVien";

let DSNV = new DanhSachNhanVien();
// Kiểm tra loại nhân viên
let KiemTraLoaiNhanVien = () => {
    let mangLoaiNV:any = document.getElementsByClassName('loaiNV');
     for(let i in mangLoaiNV){
         if(mangLoaiNV[i].checked)
             return mangLoaiNV[i].value;
     }
     return null;
}

// Thêm nhân viên
let ThemNhanVien = () => {
    //lấy ra giá trị từ input
    let maNV = (<HTMLInputElement>document.getElementById('maNV')).value;
    let tenNV = (<HTMLInputElement>document.getElementById('tenNV')).value;
    let luong:any = (<HTMLInputElement>document.getElementById('luongCB')).value;
    luong = parseFloat(luong);
    let tienHH:any = (<HTMLInputElement>document.getElementById('tienHoaHong')).value;
    tienHH = parseFloat(tienHH);
    let loaiNV:string = KiemTraLoaiNhanVien();
    let NhanVienMoi:NhanVien;       
    if(loaiNV == "quanly"){        
        NhanVienMoi = new QuanLy(maNV,tenNV,luong,loaiNV);
    }
    else if(loaiNV == "troly"){        
        NhanVienMoi = new TroLy(maNV,tenNV,luong,loaiNV);
    }
    else{        
        NhanVienMoi = new GiamDoc(maNV,tenNV,luong,loaiNV,tienHH);
    }
    NhanVienMoi.TinhLuong();   
    DSNV.ThemNhanVien(NhanVienMoi);
    //console.log(DSNV.MangNhanVien);
    TaoBang(DSNV);
}

// XỬ LÝ HÀM
let btnThem = (<HTMLButtonElement>document.getElementById('btnThemNV'));
btnThem.addEventListener("click",ThemNhanVien);

// HÀM HIỂN THỊ DỮ LIỆU LÊN BẢNG
let TaoBang = (dsnv:DanhSachNhanVien) => {
    let content : string = '';
    for(let nhanVien of dsnv.MangNhanVien){
        let{MaNhanVien,HoTen,LuongCB,LoaiNV,TongLuong} = nhanVien;
        content += `
            <tr>
                <td>${MaNhanVien}</td>
                <td>${HoTen}</td>
                <td>${LuongCB}</td>
                <td>${LoaiNV}</td>
                <td>${TongLuong}</td>
            </tr>
        `;
    }
    document.getElementById('tbodyNV').innerHTML = content;
}