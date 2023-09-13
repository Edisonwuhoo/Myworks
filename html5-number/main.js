
//initial
var ctx, thisImage;
$(function(){
$("[type='date']").on("change",showDate);
ctx = $("#myCanvas")[0].getContext("2d");
});

function showDate(){
    //debugger;查看有沒有吃到值
   
    var thisDate = this.value;
    thisDate = thisDate.replace(/-/g,""); // g代表全域搜尋 搜尋所有-號 用空白取代
    thisImage = new Image();
    console.log(thisImage);
    console.log(ctx);
    console.log(thisDate);
    thisImage.src = "flipClockNumbers.png";
    thisImage.onload = function () {
        for(var x=0;x<thisDate.length;x++){
            ctx.drawImage(thisImage,thisDate[x] * 80, 0, 90, 130,   60 * x,  0, 60, 100);
            //ctx,drawimage,getcontext是canvas的屬性與方法
            //最後這一行是拿thisimage切來做圖,也就是在html的canvax(ctx)上作畫 
            //依據是拿到轉換好的日期,ex:20230503
            //這樣thisDate[0] = 2 [1]= 0
            //後面則是切的區域
            //完整的參數為drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            //前面的 sx, sy 為裁切圖片的起點， sWidth 和 sHeight 為裁切的寬高
            //後面的 dx, dy, dWidth, dHeight 則跟前面範例一樣是繪製的起點與寬高
            //剛好我們的圖案即是0123456789
            //所以依照設定好的參數對照下來才切,剛好會thisDate[2],切出圖片的2
            //透過for迴圈一個一個切出來並貼上去 這樣看起來就像是使用圖片自動轉換
        }
    }
}

