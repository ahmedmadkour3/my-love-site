
const data={
startDate:"2026-01-01",
messages:{
ar:"أنتِ أجمل شيء في حياتي ❤️",
en:"You are the best thing in my life ❤️",
fr:"Tu es la plus belle chose de ma vie ❤️",
ko:"당신은 내 인생에서 가장 아름다운 사람이에요 ❤️",
ja:"あなたは私の人生で一番大切な人です ❤️"
}
};

function update(){
 let l=document.getElementById('lang').value;
 document.getElementById('msg').innerText=data.messages[l];
 let days=Math.floor((Date.now()-new Date(data.startDate))/(1000*60*60*24));
 document.getElementById('counter').innerText="Days Together: "+days;
}

document.getElementById('lang').addEventListener('change',update);

document.getElementById('loveBtn').onclick=()=>{
 document.getElementById('tap').play().catch(()=>{});
 const arr=['❤️','🌹','⭐','😺'];
 let x=document.createElement('div');
 x.className='float';
 x.innerText=arr[Math.floor(Math.random()*arr.length)];
 x.style.left=(Math.random()*90)+'vw';
 document.body.appendChild(x);
 setTimeout(()=>x.remove(),2000);
};
update();
