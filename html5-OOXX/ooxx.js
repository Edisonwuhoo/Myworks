const perArea = document.getElementsByClassName('perArea');
const endMassage = document.getElementsByClassName('end')[0];
const winsMassage = document.getElementById('wins');
const restartButton = document.getElementById('reStart');
const Aaction =document.getElementsByClassName('Aaction');
const Baction =document.getElementsByClassName('Baction');



//console.log("1",winsMassage);
//console.log("2",restartButton);

restartButton.addEventListener('click',function(){
    location.reload();
})
// 贏得遊戲的條件
const winSituation = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let whosRound = true;
//console.log(perArea);
//console.log(perArea[1])
for(let i = 0;i < perArea.length;i++){

        perArea[i].addEventListener('click',function(){
            whosRound = whosRound ? false : true;
            //console.log("外面看",whosRound)
            if(whosRound){
                this.classList.add('Aaction');
                this.classList.add('notAllow');
                if(checkWinOrNot(whosRound)){
                    //alert("有人贏了AactionPreview");
                    winsMassage.innerText="白色獲勝";
                    endMassage.classList.remove('hide')
                }else if(checkDraw()){
                    //alert("平手");
                    endMassage.classList.remove('hide');
                    winsMassage.innerText="雙方平手";
                };
            }
            if(whosRound == false){
                this.classList.add('Baction');
                this.classList.add('notAllow');
                if(checkWinOrNot(whosRound)){
                    //alert("有人贏了BactionPreview");
                    winsMassage.innerText="綠色獲勝";
                    endMassage.classList.remove('hide')
                }else if(checkDraw()){
                    //alert("平手");
                    endMassage.classList.remove('hide');
                    winsMassage.innerText="雙方平手";
                };
            }
        },{once : true});


        perArea[i].addEventListener('mouseenter',function(){
            if(!perArea[i].classList.contains('Baction') && !perArea[i].classList.contains('Aaction')){
                if(whosRound){
                    perArea[i].classList.add('BactionPreview');
                }else{
                    perArea[i].classList.add('AactionPreview');
                }

            }
        })
        perArea[i].addEventListener('mouseleave',function(){
                perArea[i].classList.remove('AactionPreview');
                perArea[i].classList.remove('BactionPreview');   
        })


    


}

function checkWinOrNot(a){
    var a = whosRound ? 'Aaction' : 'Baction';
    console.log("這時候檢查勝負的a",a)
    return winSituation.some(situation =>{
        return situation.every(index =>{
            return perArea[index].classList.contains(a);
        })
    })
}

function checkDraw(){
    return [...perArea].every(areaClass=>{
        return areaClass.classList.contains('Aaction') || areaClass.classList.contains('Baction')
    })
}
