let name = "";
let shortName = "";
let answer = "";

function getShortName(n) {
  return n.trim().split(" ").pop();
}

function goStep2() {
  name = document.getElementById("nameInput").value;

  if (!name) {
    alert("Nhập tên đi 😭");
    return;
  }

  shortName = getShortName(name);

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");

  document.getElementById("question").innerText =
    shortName + " ơi, cậu đã tìm thấy tớ ở đâu vậy? (lần đầu gặp)";
}

function goEnvelope() {
  answer = document.getElementById("answerInput").value;

  document.getElementById("step2").classList.add("hidden");
  document.getElementById("envelopeStep").classList.remove("hidden");
}

function openEnvelope() {
  let env = document.querySelector(".envelope");
  env.classList.add("open");

  setTimeout(() => {
    document.getElementById("envelopeStep").classList.add("hidden");
    document.getElementById("letterStep").classList.remove("hidden");

    document.getElementById("letterTitle").innerText =
     " Gửi cậu";

    // 💌 ===== CHỈ SỬA ĐOẠN NÀY =====
   document.getElementById("letterContent").innerHTML =
`Thương gửi ${shortName} ,<br><br>

Cảm ơn cậu đã xuất hiện trong hành trình này của tớ<br>
Việc cậu xuất hiện trong cuộc sống này<br>
đã làm mọi thứ của tớ trở nên tốt hơn rất nhiều.<br><br>

Tớ rất vui vì tụi mình đã gặp nhau ở ${answer},<br>
được làm bạn với nhau và đi cùng nhau đến hiện tại.<br><br>

Hy vọng rằng,<br>
dù sau này buồn, vui, hay bất cứ điều gì đi nữa<br>
tụi mình vẫn sẽ luôn luôn là bạn.<br><br>
Cảm ơn cậu,  ${shortName},vì đã ở đây.

❤️`;
  }, 1000);
}

function showImage() {
  document.getElementById("letterStep").classList.add("hidden");
  document.getElementById("imageStep").classList.remove("hidden");
}