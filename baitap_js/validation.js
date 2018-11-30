/*
	Các hàm kiểm tra sẽ trả về là true/false
*/

// chỉ nhập chữ
function allLetter(inputTag){
	var letters = /^[a-zA-z]+$/;
	if(inputTag.value.match(letters))
		return true;
	else
		return false;
}

// chỉ nhập số
function allNumber(inputTag){
	var numbers = /^[0-9]+$/;
	if(inputTag.value.match(numbers))
		return true;
	else
		return false;
}

// kiểm tra đúng định dạng email
function emailCorect(inputTag){
	var numbers = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
	if(inputTag.value.match(numbers))
		return true;
	else
		return false;
}

// kiểm tra chiều dài chuỗi nhập có trong khoảng cho phép
function stringLenght(inputTag,minlenght,maxlenght){
	
	if(minlenght <= inputTag.value.length && inputTag.value.length <= maxlenght)
		return true;
	else
		return false;
}

//chuyển đổi form đăng ký và đăng nhập
function onDangky()
{
	var frm_dk = document.getElementById("div_dangky");
	var frm_dn = document.getElementById("div_dangnhap");
	frm_dn.style.display = "none";
	frm_dk.style.display = "block";
	
}

function onDangnhap()
{
	var frm_dk = document.getElementById("div_dangky");
	var frm_dn = document.getElementById("div_dangnhap");
	frm_dk.style.display = "none";
	frm_dn.style.display = "block";
	
	
}

// hàm đăng ký
function DANGKY()
{
	var tendk = document.getElementById("txt_ten");
	var mkdk = document.getElementById("txt_mk");
	var email = document.getElementById("txt_email");
	var nghenghiep = document.getElementById("nghenghiep");
	var tuoi = document.getElementById("txt_tuoi");
	var nam = document.getElementById("rd_nam");
	var nu = document.getElementById("rd_nu");
	var thongbao = document.getElementById("thongbao_dk");	
	
	if(tendk.value == "" || mkdk.value == "" || email.value == "" ||tuoi.value == "")
	{		
		thongbao.style.display = "block";
		thongbao.innerHTML = "Vui nhập đầy đủ thông tin";
		return false;
	}
	else if(nghenghiep.selectedIndex == 0)
	{
		thongbao.style.display = "block";
		thongbao.innerHTML = "Vui nhập chọn nghề nghiệp";
		return false;
	}
	else if(!allNumber(tuoi))
	{
		thongbao.style.display = "block";
		thongbao.innerHTML = "Tuổi chỉ được nhập số";
		return false;
	}
	else if(!nam.checked && !nu.checked)
	{
		thongbao.style.display = "block";
		thongbao.innerHTML = "Bạn chưa chọn giới tính";
		return false;
	}
	else if(!stringLenght(mkdk,8,32))
	{		
		thongbao.style.display = "block";
		thongbao.innerHTML = "chỉ nhập được 8 đến 32 ký tự";
		return false;
	}
	else if(!emailCorect(email))
	{
		thongbao.style.display = "block";
		thongbao.innerHTML = "Bạn nhập email chưa đúng";
		return false;
	}
	
	
	else	{
		thongbao.style.display = "none";
		return true;
		
	}
	
}















