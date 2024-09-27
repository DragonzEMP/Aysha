const textElement = document.getElementById('text');
const head = document.getElementById("heading");

const textArray = [' Hey\nAysha', 'C...Ca...Cann I please \n    say something?\n']; 
let currentTextIndex = 0;

function typeText() {
    const text = textArray[currentTextIndex];

   
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            if (text.charAt(i) === '\n') {
                textElement.innerHTML += '<br><br><br><br>';
            } else {
                textElement.innerHTML += text.charAt(i) === ' ' ? '&nbsp;' : text.charAt(i); 
            }
        }, i * 100);
    }

    setTimeout(() => {
        if (currentTextIndex < textArray.length - 1) {
           
            for (let j = text.length; j >= 0; j--) {
                setTimeout(() => {
                    let currentText = text.substring(0, j).replace(/\n/g, '<br><br><br><br>').replace(/ /g, '&nbsp;'); 
                    textElement.innerHTML = currentText;
                }, (text.length - j) * 100);
            }

            setTimeout(() => {
                currentTextIndex++;
                typeText();
            },  text.length * 100);
        }
    }, text.length * 100 + 500);
}

setTimeout(typeText, 1000);

function showButtons() {
    const buttonsDiv = document.getElementById('buttons');
    buttonsDiv.style.visibility = 'visible'; 
}


setTimeout(showButtons, 8000);

const button = document.getElementById("No");
const container = document.getElementById("buttons");

button.addEventListener("mouseover", mouseHover);

function mouseHover(event) {
    
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

   
    const minDistance = 50;

   
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

   
    const maxLeft = containerRect.width - buttonRect.width;
    const maxTop = containerRect.height - buttonRect.height;

   
    let newLeft = Math.random() * maxLeft;
    let newTop = Math.random() * maxTop;

   
    if (Math.abs(newLeft - mouseX) < minDistance) {
        newLeft = (mouseX + minDistance <= maxLeft) ? mouseX + minDistance : mouseX - minDistance;
    }
    if (Math.abs(newTop - mouseY) < minDistance) {
        newTop = (mouseY + minDistance <= maxTop) ? mouseY + minDistance : mouseY - minDistance;
    }

    button.style.left = newLeft + "px";
    button.style.top = newTop + "px";
}

document.getElementById("Yes").addEventListener("click" ,()=>{
    const buttonsDiv = document.getElementById('buttons');
    head.removeChild(buttonsDiv); 
    textElement.innerHTML = "OMG! thank you so much!"
    setTimeout(() => {
        textElement.innerHTML = "Aysha do you know?"
    }, 2500);
    setTimeout(() => {
        textElement.innerHTML = "How much you mean to me?"
    }, 4500);

    setTimeout(() => {
        textElement.innerHTML = "try to guess!"
    }, 7000);

    setTimeout(() => {
        textElement.innerHTML = "try to guess!"
        document.getElementById("guessNum").style.visibility = "visible"
    }, 7000);
    
    

});

document.getElementById("guessNum").addEventListener("keydown", ()=>{
    if(event.key === "Enter"){
      const thisMuch =  document.getElementById("guessNum").value
      if(thisMuch == 0 || thisMuch == ''){
        textElement.innerHTML = `you think I dont mean anything to me?`
      head.removeChild(guess); 
      }else{
      textElement.innerHTML = `you think you only mean <br><br><br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${thisMuch} much to me? `
      head.removeChild(guess); 
      }
      
    }
    setTimeout(() => {
        textElement.innerHTML= `pfft..`
    }, 3500);
    setTimeout(() => {
        textElement.innerHTML= `you mean <br><br><br><img src ="universe.jpg" height="150" ><br><br><br>this to me`
    }, 4500);
    setTimeout(() => {
        textElement.innerHTML= `studying`
    }, 7000);
    setTimeout(() => {
        textElement.innerHTML= `studying, eating`
    }, 8000);
    setTimeout(() => {
        textElement.innerHTML= `studying, eating, sleeping`
    }, 9000);
    setTimeout(() => {
        textElement.innerHTML= `studying,eating,sleeping<br><br><br><br><br><br> I keep thinking about you<br><br><br><br><br><br> all the time`
    }, 10000);
    
    setTimeout(() => {
        textElement.innerHTML= `why`
    }, 14000);
    
    setTimeout(() => {
        textElement.innerHTML= `why are `
    }, 16000);
    setTimeout(() => {
        textElement.innerHTML= `why are we `
    }, 17000);
    
    setTimeout(() => {
        textElement.innerHTML= `why are we so distant`
    }, 19000);
    
    setTimeout(() => {
        textElement.innerHTML= `wwhyyyyyyyyyyyy?`
    }, 21000);
    setTimeout(() => {
        textElement.innerHTML= `I hope the very best`
    }, 23000);
    setTimeout(() => {
        textElement.innerHTML= `I hope the very best for you`
    }, 25000);
    setTimeout(() => {
        textElement.innerHTML= `We are gonna meet soon`
    }, 27000);
    setTimeout(() => {
        textElement.innerHTML= `You are my everything Aysha`
    }, 28500);
    setTimeout(() => {
        textElement.innerHTML= `Love you baby`
    }, 30000);
    
    

    
    
})



