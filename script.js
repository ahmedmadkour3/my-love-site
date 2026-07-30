const SUPABASE_URL =
"https://pkcskuknbvlbbkfiecqf.supabase.co";

const SUPABASE_KEY =
"ضع هنا الـ anon key بالكامل";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

let msg = "Loading...";
let i = 0;

async function loadMessage() {
  const { data } = await supabase
    .from("messages")
    .select("*")
    .eq("lang", "ar")
    .single();

  if (data) {
    msg = data.message;

    typing.innerHTML = "";
    i = 0;
    t();
  }
}

function t() {
  if (i < msg.length) {
    typing.innerHTML += msg[i++];
    setTimeout(t, 80);
  }
}

async function loadSettings() {
  const { data } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (data) {
    days.innerText =
      "Days Together: " +
      Math.floor(
        (Date.now() -
          new Date(data.start_date)) /
          86400000
      );
  }
}

heart.onclick = () => {
  ["❤️", "🌹", "😺", "✨"].forEach((v, n) => {
    let e = document.createElement("div");

    e.className = "float";
    e.innerText = v;
    e.style.left = 20 + n * 20 + "vw";

    document.body.appendChild(e);

    setTimeout(() => e.remove(), 2000);
  });
};

loadMessage();
loadSettings();