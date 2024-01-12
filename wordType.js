const text = document.getElementById('text')
const texts = ["Web Developer ","Coder ","Not a Robot "]
let currText = []
let i = 0
let j = 0
let goBack = false
let wordEnd = false
function change(){
    text.innerHTML = currText.join('')
    let wordEnd = false
    if(i<texts.length){
        if(!goBack && j <= texts[i].length){
            currText.push(texts[i][j])
            j++
        }
        if(goBack && j<=texts[i].length){
            currText.pop(texts[i][j])
            j--
        }
        if(j == texts[i].length){
            wordEnd = true
            goBack = true
        }
        if(goBack && j == 0){
            currText = []
            goBack = false
            i++
            if(i == texts.length){
                i=0
            }
        }
    }

   const speedType = Math.random()*(90-60) + 50
   const speedNormal = Math.random()*(300-200) + 250
   const time = wordEnd ? 1500 : goBack ? speedType : speedNormal
    setTimeout(change,time)
}
change()
