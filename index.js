window.addEventListener("load",()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visuals");
    const colors=[
        "#f08080"," #fffd78","#a3ee90","#6cf1e0","#e78af3","#ffde85"
    ];

    pads.forEach((pad,index)=>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    const createBubbles=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";

    }
});