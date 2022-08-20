console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let progess = document.getElementById('progressbar');
let myProgressBar = document.getElementById('myProgressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progessHeight = (window.pageYOffset/totalHeight)*100;
    progess.style.height = progessHeight+"%";
}


let songs = [
    {songName: "...Ready For It", filePath: "songs/1.mp3"},
    {songName: "End Game", filePath: "songs/2.mp3"},
    {songName: "I Did Something Bad", filePath: "songs/3.mp3"},
    {songName: "Don't Blame Me", filePath: "songs/4.mp3"},
    {songName: "Delicate", filePath: "songs/5.mp3"},
    {songName: "Look What You Made Me Do", filePath: "songs/6.mp3" },
    {songName: "So It Goes...", filePath: "songs/7.mp3"},
    {songName: "Gorgeous", filePath: "songs/8.mp3"},
    {songName: "Getaway Car", filePath: "songs/9.mp3"},
    {songName: "King Of My Heart", filePath: "songs/10.mp3"},
    {songName: "Dancing With Our Hands Tied", filePath: "songs/11.mp3"},
    {songName: "Dress", filePath: "songs/12.mp3"},
    {songName: "This Is WHy We Can't Have Nice Things", filePath: "songs/13.mp3"},
    {songName: "Call It WHat You Want", filePath: "songs/14.mp3"},
    {songName: "New Year's Day", filePath: "songs/15.mp3"}

]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    else{
        audioElement.pause();
    }  
})
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songName')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/1.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})

Array.from(document.getElementsByClassName('songName2')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/2.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName3')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/3.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName4')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/4.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName5')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/5.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName6')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/6.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName7')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/7.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName8')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/8.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName9')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/9.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName10')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/10.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName11')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/11.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName12')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/12.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName13')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/13.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName14')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/14.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName15')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/15.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName16')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/16.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName17')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/17.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName18')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/18.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
