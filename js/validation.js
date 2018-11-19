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
	
	if(inputTag.value.lenght < minlenght || inputTag.value.lenght > maxlenght)
		return true;
	else
		return false;
}