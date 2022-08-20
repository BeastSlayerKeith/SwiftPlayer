console.log("Welcome to Spotify");

// Initialize the Variables
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
Array.from(document.getElementsByClassName('songName19')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/19.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName20')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/20.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName21')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/21.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName22')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/22.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName23')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/23.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName24')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/24.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName25')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/25.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName26')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/26.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName27')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/27.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName28')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/28.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName29')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/29.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})
Array.from(document.getElementsByClassName('songName30')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        audioElement.src = `songs/30.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})