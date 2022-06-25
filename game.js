var board = new Array("","","","","","","","","")
var temp = new Array("","","","","","","","","")

var isX = true
var aiMode = false
var gameOver = false

var Xwins = 0
var ties = 0
var Owins = 0


document.getElementById('score-panel').style.display = "none"

const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2') 
const b3 = document.getElementById('b3')

const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')

const b7 = document.getElementById('b7')
const b8 = document.getElementById('b8')
const b9 = document.getElementById('b9')

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
        addXlisteners()
        checkForMove()





    }

})

function addXlisteners(){
        
        if(board[0]==""){b1.addEventListener('click' , () => {b1.innerText = 'X';board[0]="X"})} 
        if(board[1]==""){b2.addEventListener('click' , () => {b2.innerText = 'X';board[1]="X"})}
        if(board[2]==""){b3.addEventListener('click' , () => {b3.innerText = 'X';board[2]="X"})}

        if(board[3]==""){b4.addEventListener('click' , () => { b4.innerText = 'X';board[3]="X"})}
        if(board[4]==""){b5.addEventListener('click' , () => { b5.innerText = 'X';board[4]="X"})}
        if(board[5]==""){b6.addEventListener('click' , () => { b6.innerText = 'X';board[5]="X"})}

        if(board[6]==""){b7.addEventListener('click' , () => { b7.innerText = 'X';board[6]="X"})}
        if(board[7]==""){b8.addEventListener('click' , () => { b8.innerText = 'X';board[7]="X"})}
        if(board[8]==""){b9.addEventListener('click' , () => { b9.innerText = 'X';board[8]="X"})}
}

function addOlisteners(){
        if(board[0]==""){b1.addEventListener('click' , () => {b1.innerText = 'O';board[0]="O"})} 
        if(board[1]==""){b2.addEventListener('click' , () => {b2.innerText = 'O';board[1]="O"})}
        if(board[2]==""){b3.addEventListener('click' , () => {b3.innerText = 'O';board[2]="O"})}

        if(board[3]==""){b4.addEventListener('click' , () => { b4.innerText = 'O';board[3]="O"})}
        if(board[4]==""){b5.addEventListener('click' , () => { b5.innerText = 'O';board[4]="O"})}
        if(board[5]==""){b6.addEventListener('click' , () => { b6.innerText = 'O';board[5]="O"})}

        if(board[6]==""){b7.addEventListener('click' , () => { b7.innerText = 'O';board[6]="O"})}
        if(board[7]==""){b8.addEventListener('click' , () => { b8.innerText = 'O';board[7]="O"})}
        if(board[8]==""){b9.addEventListener('click' , () => { b9.innerText = 'O';board[8]="O"})}
        
}

function checkForMove(){

    
    let isMove = false

    

    for(let i = 0; i<9;i++)
    {
        if(temp[i]!=board[i])
        {
            isMove = true
        }   

    }

    if(!isMove)
    {
        window.setTimeout(checkForMove,100)
    }
    else
    {
        temp = board.slice(0)
        if(isX)
        {
            if(Xwon())
            {
                document.getElementById('msg-board').innerText = "X won!"
                Xwins+=1
                endGame()

            }
            else if(boardFull())
            {
                ties+=1
                document.getElementById('msg-board').innerText = "Tie."
                endGame()

            }
            else 
            {
                document.getElementById('msg-board').innerText = "It is O's turn."
                isX = false   
                addOlisteners()
                checkForMove()

            }
        }
        else
        {
            if(Owon())
            {
                Owins+=1
                document.getElementById('msg-board').innerText = "O won!"
                endGame()
            }
            else if(boardFull())
            {
                ties+=0
                document.getElementById('msg-board').innerText = "Tie."
                endGame()
            }
        
            else 
            {
                document.getElementById('msg-board').innerText = "It is X's turn."
                isX = true   
                addXlisteners()
                checkForMove()
                

            }
                
        }
    }
}


function boardFull()
{
    for(let i = 0; i<9;i++)
    {
        if(board[i]=="")
        {
            return false
        }
        

    }
    return true
}
function endGame()
{
    //clears leftover listeners
    if(board[0]==""){b1.addEventListener('click' , () => {b1.innerText = ''})} 
    if(board[1]==""){b2.addEventListener('click' , () => {b2.innerText = ''})}
    if(board[2]==""){b3.addEventListener('click' , () => {b3.innerText = ''})}

    if(board[3]==""){b4.addEventListener('click' , () => { b4.innerText = ''})}
    if(board[4]==""){b5.addEventListener('click' , () => { b5.innerText = ''})}
    if(board[5]==""){b6.addEventListener('click' , () => { b6.innerText = ''})}

    if(board[6]==""){b7.addEventListener('click' , () => { b7.innerText = ''})}
    if(board[7]==""){b8.addEventListener('click' , () => { b8.innerText = ''})}
    if(board[8]==""){b9.addEventListener('click' , () => { b9.innerText = ''})}


    gameOver=true
    const restartBtn = document.createElement("button")
    restartBtn.innerHTML="Play again"
    restartBtn.setAttribute("type","button")
    restartBtn.addEventListener("click", () =>{
        clearBoard()
        addXlisteners()
        checkForMove()
        restartBtn.remove()
    })
    document.getElementById("button-panel").appendChild(restartBtn)

}

function clearBoard()
{
    
    b1.style.color="#dce1f8"
    b2.style.color="#dce1f8"
    b3.style.color="#dce1f8"

    b4.style.color="#dce1f8"
    b5.style.color="#dce1f8"
    b6.style.color="#dce1f8"

    b7.style.color="#dce1f8"
    b8.style.color="#dce1f8"
    b9.style.color="#dce1f8"
    document.getElementById("score-h3").innerHTML="X - "+Xwins+"  | Tie - "+ties+"  |  O - "+Owins
    isX = true
    document.getElementById('msg-board').innerText = "It is X's turn."
    board = new Array("","","","","","","","","")
    temp = new Array("","","","","","","","","")
    b1.innerText = ''
    b2.innerText = ''
    b3.innerText = ''

    b4.innerText = ''
    b5.innerText = ''
    b6.innerText = ''

    b7.innerText = ''
    b8.innerText = ''
    b9.innerText = ''


}

// 0 1 2
// 3 4 5
// 6 7 8 

function Xwon()
{
    //check rows
    if(board[0]=="X"&&board[1]=="X"&&board[2]=="X")
    {
        b1.style.color="#7aa2f7"
        b2.style.color="#7aa2f7"
        b3.style.color="#7aa2f7"
        return true
    }
    if(board[3]=="X"&&board[4]=="X"&&board[5]=="X")
    {
        b4.style.color="#7aa2f7"
        b5.style.color="#7aa2f7"
        b6.style.color="#7aa2f7"
        return true
    }
    if(board[6]=="X"&&board[7]=="X"&&board[8]=="X")
    {
        b7.style.color="#7aa2f7"
        b8.style.color="#7aa2f7"
        b9.style.color="#7aa2f7"
        return true
    }    
    //check cols
    if(board[0]=="X"&&board[3]=="X"&&board[6]=="X")
    {
        b1.style.color="#7aa2f7"
        b4.style.color="#7aa2f7"
        b7.style.color="#7aa2f7"
        return true
    }   
    if(board[1]=="X"&&board[4]=="X"&&board[7]=="X")
    {
        b2.style.color="#7aa2f7"
        b5.style.color="#7aa2f7"
        b8.style.color="#7aa2f7"
        return true
    }   
    if(board[2]=="X"&&board[5]=="X"&&board[8]=="X")
    {
        b3.style.color="#7aa2f7"
        b6.style.color="#7aa2f7"
        b9.style.color="#7aa2f7"
        return true
    } 

    //check diagonals
    if(board[0]=="X"&&board[4]=="X"&&board[8]=="X")
    {
        b1.style.color="#7aa2f7"
        b5.style.color="#7aa2f7"
        b9.style.color="#7aa2f7"
        return true
    } 
    if(board[6]=="X"&&board[4]=="X"&&board[2]=="X")
    {
        b7.style.color="#7aa2f7"
        b5.style.color="#7aa2f7"
        b3.style.color="#7aa2f7"
        return true
    } 

    return false
}

function Owon()
{
    if(board[0]=="O"&&board[1]=="O"&&board[2]=="O")
    {
        b1.style.color="#7aa2f7"
        b2.style.color="#7aa2f7"
        b3.style.color="#7aa2f7"
        return true
    }
    if(board[3]=="O"&&board[4]=="O"&&board[5]=="O")
    {
        b4.style.color="#7aa2f7"
        b5.style.color="#7aa2f7"
        b6.style.color="#7aa2f7"
        return true
    }
    if(board[6]=="O"&&board[7]=="O"&&board[8]=="O")
    {
        b7.style.color="#7aa2f7"
        b8.style.color="#7aa2f7"
        b9.style.color="#7aa2f7"
        return true
    }    
    //check cols
    if(board[0]=="O"&&board[3]=="O"&&board[6]=="O")
    {
        b1.style.color="#7aa2f7"
        b4.style.color="#7aa2f7"
        b7.style.color="#7aa2f7"
        return true
    }   
    if(board[1]=="O"&&board[4]=="O"&&board[7]=="O")
    {
        b2.style.color="#7aa2f7"
        b5.style.color="#7aa2f7"
        b8.style.color="#7aa2f7"
        return true
    }   
    if(board[2]=="O"&&board[5]=="O"&&board[8]=="O")
    {
        b3.style.color="#7aa2f7"
        b6.style.color="#7aa2f7"
        b9.style.color="#7aa2f7"
        return true
    } 

    //check diagonals
    if(board[0]=="O"&&board[4]=="O"&&board[8]=="O")
    {
        b1.style.color="#7aa2f7"
        b5.style.color="#7aa2f7"
        b9.style.color="#7aa2f7"
        return true
    } 
    if(board[6]=="O"&&board[4]=="O"&&board[2]=="O")
    {
        b7.style.color="#7aa2f7"
        b5.style.color="#7aa2f7"
        b3.style.color="#7aa2f7"
        return true
    }
    return false
}