const typing = document.getElementById("typing");
const days = document.getElementById("days");
const msg = "أنتِ أجمل شيء حدث في حياتي ❤️";
let i = 0;

function t() {
  if (i < msg.length) {
    typing.innerHTML += msg[i++];
    setTimeout(t, 80);
  }
}

t();