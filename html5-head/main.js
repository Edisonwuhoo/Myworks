$(function(){
    $("button").on("click",go);
});

const manKeyWords = [
    "雄","伯","博","勃","文","志","賢",
    "壯",'家','豪','明','俊','傑','建',
    '宏','志','偉','雄','承','翰','冠',
    '哲','爺','陽','杰','毅','翔','威',
    '皓','先','男生','男']; //判讀的關鍵字列表
const grilKeyWords =[
    "宜","靜","郁","婷","柔","珊","妤",
    "美",'淑','華','怡','君','貞','娟',
    '麗','華','惠','雅','惠','芬','雪',
    '玉','薇','敏','芷','姿','玲','佩',
    '姐','姨','女生'];
const monWords = ["埍","索","腦"];
const weedK = ["弦","和","謝"];
const JokerWords = ["丑","尼","懷","斯"];
const RWords = ["機","器","若","史","柯文哲",'丹','利'];
const ALawords =["阿","拉","主","瓜",'真','亞','拉','罕'];
const ghostWords=["鬼","魂","靈","幽","死",'殭','屍','惡'];
const ForWords=[
    "a","b","c","d","e","f",
    'A','B','C','D','E','F',
    "g","h","i","j","k","l",
    'G','H','I','J','K','L',
    "m","n","o","p","q","r",
    'M','N','O','P','Q','R',
    "s","t","u","v","w","x",
    'S','T','U','V','W','X',
    "y","z",'Y','Z'];

let go = ( ) =>{ // 定義gofunction  箭頭函數沒有參數必須要留著() 但是只有一個參數就可以省略() 
    let inputText = $("#userInput").val();//去拿畫面上id為userinput的value(val())
    const isMen = manKeyWords.some(thisElement => inputText.includes(thisElement));//some:只在乎後面callbackfunction尋訪(陣列)後 是否有 任何一個是否有true 
    const isGirl = grilKeyWords.some(thisElement => inputText.includes(thisElement));//include也是相同道理，只是他是針對字串?
    const isM = monWords.some(thisElement => inputText.includes(thisElement));
    const isJ = JokerWords.some(thisElement => inputText.includes(thisElement));
    const isHa = weedK.some(thisElement => inputText.includes(thisElement));
    const isRW = RWords.some(thisElement => inputText.includes(thisElement));
    const isAL = ALawords.some(thisElement => inputText.includes(thisElement));
    const isgh = ghostWords.some(thisElement => inputText.includes(thisElement));
    const isfo = ForWords.some(thisElement => inputText.includes(thisElement));
    if(isMen && isGirl){ //同時符合
        $(".HeadEmoji").text("😁");
        $('.UserName').text(inputText)
    }else if(isMen){
        $(".HeadEmoji").text("👨");
        $('.UserName').text(inputText)
        $('.description').text(`帥氣的好名字,因為帥氣的存在，令我們無法停止對此的思考。帥氣，發生了會如何，不發生又會如何。`)
    }else if(isGirl){
        $(".HeadEmoji").text("👩");
        $('.UserName').text(inputText)
        $('.description').text(`將來即是美女,拿破崙深信，強將手下無弱兵。這句話幾乎解讀出了問題的根本。我想，把美女的意義想清楚，對各位來說並不是一件壞事。`)
    }else if(isM){
        $(".HeadEmoji").text("🧠");
        $('.UserName').text(inputText)
        $('.description').text(`布雷頓告訴我們，不假雕琢的藝術才是真正的藝術。這段話讓我的心境提高了一個層次。 若無法徹底理解咒術回戰，恐怕會是人類的一大遺憾。`)
    }else if(isHa){
        $(".HeadEmoji").text("👽");
        $('.UserName').text(inputText)
        $('.description').text(`這名字令我們想起謝和弦,對於謝和弦，我們不能不去想，卻也不能走火入魔。謝和弦的出現，重寫了人生的意義。`)
    }else if(isJ){
        $(".HeadEmoji").text("🤡");
        $('.UserName').text(inputText)
        $('.description').text(`儘管如此，我們仍然需要對小丑保持懷疑的態度。由於，海塞曾經提過，思想和智慧是高尚的美德。這段話可說是震撼了我`)
    }else if(isRW){
        $(".HeadEmoji").text("🤖");
        $('.UserName').text(inputText)
        $('.description').text(`胡適在過去曾經講過，發明不是發財，是為人類。我希望諸位也能好好地體會這句話。若能夠洞悉機器人各種層面的含義，勢必能讓思維再提高一個層級。`)
    }else if(isAL){
        $(".HeadEmoji").text("👳");
        $('.UserName').text(inputText)
        $('.description').text(`我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。我們不得不相信，我們不妨可以這樣來想: 透過逆向歸納，得以用最佳的策略去分析阿拉伯。`)
    }else if(isgh){
        $(".HeadEmoji").text("👻");
        $('.UserName').text(inputText)
        $('.description').text(`這名字我不能確定,因為葉芝講過，人心只能贏得，不能靠人饋贈。這段話可說是震撼了我。回過神才發現，思考鬼魂的存在意義，已讓我廢寢忘食。`)
    }else if(isfo){
        $(".HeadEmoji").text("🧙");
        $('.UserName').text(inputText)
        $('.description').text(` the perfect name , cuz will there is a will there's a way`)
    }else{//以上都不符合
        $(".HeadEmoji").text("🤓");
        $('.UserName').text(inputText)
        $('.description').text(`這是個未來無法預測也不可被定義限制的名字,我們無法從字面獲取任何消息`)
    };
    $('#userInput').val('');
    $('.UserName').text(inputText)
}