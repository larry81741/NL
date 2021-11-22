const photos = [
  //資料存取處  place:0~5  skin:1~2
  { myurl: "./img/前燈/前燈_改色膜1.jpg", place: "0", skin: "1" },
  { myurl: "./img/前燈/前燈_改色膜2.jpg", place: "0", skin: "1" },
  { myurl: "./img/前燈/前燈_犀牛皮1.jpg", place: "0", skin: "2" },
  { myurl: "./img/引擎蓋/引擎蓋_改色膜1.jpg", place: "1", skin: "1" },
  { myurl: "./img/引擎蓋/引擎蓋_改色膜2.jpg", place: "1", skin: "1" },
  { myurl: "./img/引擎蓋/引擎蓋_犀牛皮1.jpg", place: "1", skin: "2" },
  { myurl: "./img/引擎蓋/引擎蓋_犀牛皮2.jpg", place: "1", skin: "2" },
  { myurl: "./img/後視鏡/後視鏡_犀牛皮.jfif", place: "2", skin: "2" },
  { myurl: "./img/後視鏡/後視鏡_犀牛皮2.jfif", place: "2", skin: "2" },
  { myurl: "./img/後視鏡/後視鏡_改色膜1.jpg", place: "2", skin: "1" },
  { myurl: "./img/後視鏡/後視鏡_改色膜2.jpg", place: "2", skin: "1" },
  { myurl: "./img/車頂/車頂_犀牛皮1.jfif", place: "3", skin: "2" },
  { myurl: "./img/車頂/車頂_改色膜1.jpg", place: "3", skin: "1" },
  { myurl: "./img/B柱飾板/B柱_改色膜1.jpg", place: "4", skin: "1" },
  { myurl: "./img/B柱飾板/B柱_犀牛皮.jfif", place: "4", skin: "2" },
  { myurl: "./img/尾燈/尾燈_改色膜1.jpg", place: "5", skin: "1" },
  { myurl: "./img/尾燈/尾燈_改色膜2.jpg", place: "5", skin: "1" },
  { myurl: "./img/尾燈/尾燈_犀牛皮1.jpg", place: "5", skin: "2" },
  { myurl: "./img/全車/全車_改色膜1.jpg", place: "6", skin: "1" },
  { myurl: "./img/全車/全車_改色膜2.jpg", place: "6", skin: "1" },
  { myurl: "./img/全車/全車_改色膜3.jpg", place: "6", skin: "1" },
  { myurl: "./img/全車/全車_犀牛皮1.jpg", place: "6", skin: "2" },





  

];
const carswiper = document.querySelector(".carSwiper>.swiper-wrapper");
const test = document.querySelectorAll("[name='btu']"); //選取按鈕
const btns = document.querySelectorAll(".btn-block>div");
const spandata = document.querySelector(".block-4>.left-block>span"); //圖片下的span(車體部位)
const showswiper = document.querySelector(".testtttt");
const leftblock = document.querySelector(".left-block");
const selecta=document.querySelector(".select-not-required");
console.log(selecta);
var radiotmp = "";
var btntmp = "";
var selecttmp="";
selecta.addEventListener("change",showdata);
test.forEach((aaa) => aaa.addEventListener("click", showdata)); //把按鈕加監聽器&點擊事件
btns.forEach((bbb) => bbb.addEventListener("click", showdata));

function showdata() {
  test.forEach((aaa) => aaa.previousElementSibling.classList.remove("showlai")); //重製畫面
  test.forEach((aaa) => aaa.classList.remove("byebye")); //重製畫面
  showswiper.classList.add("showswiper");
  showswiper.classList.add("swiper_settimeout0");
  if (this.previousElementSibling.className == "radio") {
    this.previousElementSibling.classList.add("showlai"); //新增class ->顯現
    this.classList.add("byebye"); //新增class->消失
    radiotmp = this.previousElementSibling.dataset.place; //紀錄部位
    spandata.innerHTML = this.previousElementSibling.innerHTML;
    setTimeout(function () {
      showswiper.classList.remove("swiper_settimeout0");
      leftblock.classList.remove("swiper_settimeout0");
    }, 200);

  }
  else if(this.className == "select-not-required"){
    selecttmp=this.value;
  }
  else {
    btns.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    btntmp = this.dataset.skin;
    leftblock.classList.remove("swiper_settimeout0");
    setTimeout(function () {
      showswiper.classList.remove("swiper_settimeout0");
    }, 200);
  }
  leftblock.classList.remove("disableleft-block");
  carswiper.style.transform = "translate3d(0px, 0px, 0px)";
 if (radiotmp && btntmp) {
    carswiper.innerHTML = "";
    for (let index = 0; index < photos.length; index++) {
      if (photos[index].place == radiotmp && photos[index].skin == btntmp) {
        carswiper.innerHTML += `<div class="swiper-slide"style="margin-right: 30px;"><img src="${photos[index].myurl}" alt=""></div>`;
        //1 1
      }
    }
  } 
  else if(selecttmp && btntmp){
    carswiper.innerHTML = "";
    for (let index = 0; index < photos.length; index++) {
      if (photos[index].place == selecttmp && photos[index].skin == btntmp) {
        carswiper.innerHTML += `<div class="swiper-slide"style="margin-right: 30px;"><img src="${photos[index].myurl}" alt=""></div>`;
        //1 1
      }
    }
  }
  else if (radiotmp) {
    carswiper.innerHTML = "";
    for (let index = 0; index < photos.length; index++) {
      if (photos[index].place == radiotmp) {
        carswiper.innerHTML += `<div class="swiper-slide"style="margin-right: 30px;"><img src="${photos[index].myurl}" alt=""></div>`;
        //1 0
        // console.log(photos[index].place, photos[index].skin);
      }
    }
  }
  else if (selecttmp) {
    carswiper.innerHTML = "";
    for (let index = 0; index < photos.length; index++) {
      if (photos[index].place == selecttmp) {
        carswiper.innerHTML += `<div class="swiper-slide"style="margin-right: 30px;"><img src="${photos[index].myurl}" alt=""></div>`;
        //1 0
        // console.log(photos[index].place, photos[index].skin);
      }
    }
  }
}
const steps = document.querySelectorAll(".step");
steps.forEach((step) => step.addEventListener("click", stepeffect));
function stepeffect() {
  steps.forEach((step) => step.classList.remove("click"));
  this.classList.add("click");}
