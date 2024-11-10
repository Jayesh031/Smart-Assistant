let btn=document.querySelector(".btn");
let voice=document.querySelector(".gif");

function say(text){
    let text_talk=new SpeechSynthesisUtterance(text);
    text_talk.rate=1;
    text_talk.pitch=1;
    text_talk.volume=1;
    text_talk.lang="en-US"; //hi-GB,en-US
    window.speechSynthesis.speak(text_talk);
}

function wish(){
    let day=new Date();
    let hrs=day.getHours();
    // let min=day.getMinutes();
    // let time=`${hrs}:${min}`;

    if(hrs>=0 && hrs<12){
        say("Good Morning Sir");
    }else if(hrs>=12 && hrs<16){
        say("Good Afternoon sir");
    }else{
        say("Good Evening Sir");
    }
}

window.addEventListener("load",()=>{
    wish()
})

let SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition=new SpeechRecognition();

recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block";
})

function takeCommand(mes){

    btn.style.display="flex";
    voice.style.display="none";

   if(mes.includes("hello") || mes.includes("hey")){
        say("Hello sir,How Can i help you");
    }else if(mes.includes("who are you")){
        say("I am Pran, virtual assistant created by Jayesh.");
    }else if(mes.includes("open youtube")){
        say("Opening YouTube!!");
        window.open("https://www.youtube.com/");
    }
    else if(mes.includes("open google")){
        say("Opening Google!!");
        window.open("https://www.google.co.in/");
    }else if(mes.includes("open instagram")){
        say("Opening Instagram!!");
        window.open("https://www.instagram.com");
    }
    else if(mes.includes("open my github")){
        say("Opening Github!!");
        window.open("https://github.com/");
    }else if(mes.includes("open calculator")){
        say("Opening calculator!!");
        window.open("calculator://");
    }else if(mes.includes("open whatsapp")){
        say("Opening Whatsapp!!");
        window.open("whatsapp://");
    }else if(mes.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        say(time);
    }else if(mes.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
        say(date);
    }else{
        //let t=mes.replace("pran","")
        say(`This is what i found on google for ${mes}`);
        window.open(`https://www.google.com/search?q=${mes}`);
    }
}









