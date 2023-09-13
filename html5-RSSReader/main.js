$(function(){
    $("#Politics").on("click",function(){
        loadServerDataTypeof(Politics)});
        $(this).addClass("uouo")
    $("#Mainland").on("click",function(){
        loadServerDataTypeof(Mainland)});
    $("#Intworld").on("click",function(){
        loadServerDataTypeof(Intworld)});
    $("#Finance").on("click",function(){
        loadServerDataTypeof(Finance)});
    $("#Technology").on("click",function(){
        loadServerDataTypeof(Technology)});
    $("#Lifehealth").on("click",function(){
        loadServerDataTypeof(Lifehealth)});
    $("#Social").on("click",function(){
        loadServerDataTypeof(Social)});
    $("#Local").on("click",function(){
        loadServerDataTypeof(Local)});
    $("#Culture").on("click",function(){
        loadServerDataTypeof(Culture)});
    $("#Sport").on("click",function(){
        loadServerDataTypeof(Sport)});
    $('#Stars').on('click',function(){
        loadServerDataTypeof(Stars)});
    });

const rsstojson = "https://api.rss2json.com/v1/api.json?rss_url=";
const Politics = "https://feeds.feedburner.com/rsscna/politics";
const Intworld = "https://feeds.feedburner.com/rsscna/intworld";
const Mainland ="https://feeds.feedburner.com/rsscna/mainland";
const Finance = "https://feeds.feedburner.com/rsscna/finance";
const Technology = "https://feeds.feedburner.com/rsscna/technology";
const Lifehealth ="https://feeds.feedburner.com/rsscna/lifehealth";
const Social = "https://feeds.feedburner.com/rsscna/social";
const Local = "https://feeds.feedburner.com/rsscna/local";
const Culture = "https://feeds.feedburner.com/rsscna/culture";
const Sport ="https://feeds.feedburner.com/rsscna/sport";
const Stars ="https://feeds.feedburner.com/rsscna/stars";


function loadServerDataTypeof(type){
        $.getJSON(rsstojson+type)
    .done(function(data){
        console.log(data);
        $("#dataTable").html("");
        for(let i = 0; i < data.items.length;i++){
            theRow ='<tr>';
            theRow += `<td class='arow'><a target='_blank' href='${data.items[i].link}'>- ${data.items[i].title}。</a></td>`;
            theRow += `<td class='brow'>${data.items[i].pubDate.split(" ")[0]} ${data.items[i].pubDate.split(" ")[1]}</td>`;
            theRow += '</tr>';
            
            $('#dataTable').append(theRow)
        }
    })
}