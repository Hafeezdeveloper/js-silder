var display = document.getElementById("display")
var parent = document.getElementById('parent')
var allimg = parent.getElementsByTagName('IMG')

var indexnum = 0

function initsilider(){
    display.src = allimg[indexnum].src
}
initsilider()

function pre(){
    if(indexnum == 0 ){
  indexnum = allimg.length-1
    }
indexnum--;
initsilider()
    }

function next(){
    if(indexnum == allimg.length-1){
indexnum = 0;
    }else{
        indexnum++;
    }
initsilider()

}