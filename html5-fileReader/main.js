$(function(){
    $("#dropbox").on("dragenter",dragenter);
    $("#dropbox").on("dragleave",dragleave);
    $("#dropbox").on("dragover",dragover);
    $("#dropbox").on("drop",drop);
});

function dragenter(){
    $("#dropbox").css("background-color","orange");
    $("#dropbox").text("請放置檔案");

}
function dragleave(){
    $("#dropbox").css("background-color","darkgray");
    $("#dropbox").text("請將檔案放在灰色區域");

}
function dragover(e){
    e.preventDefault();
}
function drop(e){
    e.preventDefault();
    let files = e.originalEvent.dataTransfer.files;
    if(files.length == 0){
        return false;
    }
    convert(files[0]);
}

function convert(file){
    //debugger;
    if(!file.type.match(/text.*/)){
        alert("僅接受副檔名為.text的檔案,請拖放文字檔");
        dragleave();
        return false;
    }
    // onabort : 檔案讀取被中斷時觸發
    // onerror : 檔案讀取發生錯誤時觸發
    // onload : 檔案讀取完成時觸發
    // onloadstart: 檔案開始讀取時觸發
    // onloadend: 每一次的檔案讀取結束後觸發(成功失敗都會)。在 onload or onerror之後
    // onprogress： 讀取Blob內容時觸發

    let reader = new FileReader();
    reader.onloadend = function(){
        let wordInText = reader.result;
        $("#preview").text(wordInText);
        // $("#preview").append("\n"+s);
        //dragleave();
    };

    reader.readAsText(file);
};

// abort() ： 中斷目前的讀取，呼叫後，readyState會是DONE
// readAsArrayBuffer() : 以ArrayBuffer物件讀入檔案內容
// readAsBinaryString() ： 以字串型式來表示讀入的原始二進位資料（raw binary data）
// readAsDataURL()：以dataURI格式（base64）讀入檔案內容
// readAsText():以文字字串型式讀入檔案內容