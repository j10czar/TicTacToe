//9 spots correlate to 9 spots on array
// 1 2 3
// 4 5 6
// 7 8 9 
//make check for winner function
//add ai after 2 player
var board = new Array("","","","","","","","","")
var isX = true
var aiMode = false
gameNotOver=true

document.getElementById('score-panel').style.display = "none"

b1 = document.getElementById('b1')
b2 = document.getElementById('b2') 
b3 = document.getElementById('b3')

b4 = document.getElementById('b4')
b5 = document.getElementById('b5')
b6 = document.getElementById('b6')

b7 = document.getElementById('b7')
b8 = document.getElementById('b8')
b9 = document.getElementById('b9')

document.getElementById("start").addEventListener('click', () => {
    document.getElementById("start").remove()
    if(aiMode)
    {
        //it is your turn on board
        console.log("ai mode is  currently not supported ")
    }
    else
    {
        document.getElementById('msg-board').innerText = "It is X's turn."
        document.getElementById('score-panel').style.display = "inline"

        b1.addEventListener('click' , () => {b1.innerText = 'X'})
        b2.addEventListener('click' , () => {b2.innerText = 'X'})
        b3.addEventListener('click' , () => {b3.innerText = 'X'})

        b4.addEventListener('click' , () => { b4.innerText = 'X'})
        b5.addEventListener('click' , () => { b5.innerText = 'X'})
        b6.addEventListener('click' , () => { b6.innerText = 'X'})

        b7.addEventListener('click' , () => { b7.innerText = 'X'})
        b8.addEventListener('click' , () => { b8.innerText = 'X'})
        b9.addEventListener('click' , () => { b9.innerText = 'X'})




    }

})