var so1 = 0;
var so2 = 0;
var flag1 = 1;
var flag2 = 1;
var pheptinh = "";

function nhapso(id){
	var hienthi = document.getElementById("hienthi");	
	if(flag2 == 2)
		_clear();
	if(flag1 == 1)
	{
		var temp = document.getElementById(id);			
		so1 += temp.value;
		hienthi.value += temp.value;
	}
	else if(flag1 == 2)
	{		
		var temp = document.getElementById(id);
		if(temp.value == 0 && pheptinh == "/")	
			alert("không thể chia cho 0!");
		else{
			so2 += temp.value;
			hienthi.value += temp.value;
		}				
	}
}

function nhappheptinh(id){
	var hienthi = document.getElementById("hienthi");	
	if(pheptinh == ""){
		var _pheptinh = document.getElementById(id);
		pheptinh = _pheptinh.value;
		hienthi.value += pheptinh;
		flag1 = 2;
		if(flag2 == 2)
			flag2 = 1;
	}
}

function tinhtoan(){
	so1 = parseFloat(so1);
	so2 = parseFloat(so2);
	var kq = 0;
	switch(pheptinh){
		case "/":
			kq = so1/so2;
			break;
		case "*":
			kq = so1*so2;
			break;
		case "+":
			kq = so1+so2;
			break;
		case "-":
			kq = so1-so2;
			break;
	}
	hienthi.value = kq;
	so1 = kq;
	so2 = 0;
	flag2 = 2;
	pheptinh = "";
}
function _clear(){
	var hienthi = document.getElementById("hienthi");
	so1 = so2 = 0;
	flag1 = flag2 = 1;
	pheptinh = "";
	hienthi.value = "";
}