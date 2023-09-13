let player;
let nowPlay = 0;
function onYouTubeIframeAPIReady(){//當完成會自動幫你啟動
    player = new YT.Player("player",{
        height:"390",// 高度預設值為390，css會調成responsive
        width:"640",// 寬度預設值為640，css會調成responsive
        videoId:playList[nowPlay],
        playerVars:{
            autoplay:0,
            controls:0,
            start:playTime[nowPlay][0],
            end:playTime[nowPlay][1],
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,//當影片 ready 的時候，就執行下面 onPlayerReady 這個 function。
            onStateChange:onPlayerStateChange
        }

    })

}

function onPlayerReady(event){
    // 為確保瀏覽器上可以自動播放，要把影片調成靜音 
    //e.target 就是這個 Youtube 本身，mute() 是讓它靜音，playVideo() 就是播放影片。
    //event.target.mute().playVideo(); 這邊就是將影片調成靜音,並且自動播放,
    //但我們這邊選擇手動點及按鈕 才會播放 所以不用靜音
    $("#playButton").on("click", function(){
        $("h3").text(player.getVideoData().title);
        player.playVideo();
    });

}

function onPlayerStateChange(event){
    // -1：unstarted 未啟動，初次載入
    // 0：ended 結束
    // 1：playing 播放中
    // 2：paused 暫停
    // 3：buffering 緩衝中
    // 5：video cued 準備好可以播放了
    if(Math.floor(player.getCurrentTime())== playTime[nowPlay][1]){
        //go to next song
        if(nowPlay < playList.length -1){
            nowPlay++;
            player.loadVideoById({
                videoId:playList[nowPlay],
                startSeconds:playTime[nowPlay][0],
                endSeconds:playTime[nowPlay][1],
                suggestedQuality:"large"

            });
        }else{
            nowPlay=0;
            player.cueVideoById({videoId:playList[nowPlay],
                startSeconds:playTime[nowPlay][0],
                endSeconds:playTime[nowPlay][1],
                suggestedQuality:"large"
            });
        } 
    }
    if(event.data==1){$("h3").text(player.getVideoData().title);}}

    


