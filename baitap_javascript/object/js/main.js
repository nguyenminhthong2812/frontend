//lấy element
function getMyEle(id){
	return document.getElementById(id);
}
getMyEle('btn').addEventListener("click",function(){
	getMyEle('banner').src = namecard.img;
	getMyEle('twi').href = namecard.link1;
	getMyEle('in').href = namecard.link2;
	getMyEle('google').href = namecard.link3;
	getMyEle('face').href = namecard.link4;
	getMyEle('baigiang').innerHTML = namecard.baigiang;
	getMyEle('theodoi').innerHTML = namecard.theodoi;
	getMyEle('follower').innerHTML = namecard.follower;
	getMyEle('luotxem').innerHTML = namecard.luotxem;
	getMyEle('luothich').innerHTML = namecard.luotthich;
	getMyEle('following').innerHTML = namecard.following;
});