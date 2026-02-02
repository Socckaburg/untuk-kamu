// ===========================================
// 1️⃣ NAVIGASI PAGE
// ===========================================
function showPage(pageId) {
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "none"; // sembunyikan semua page
  });
  document.getElementById(pageId).style.display = "block"; // tampilkan page yg dipilih
}

// tampilkan page pertama saat web load
showPage("page1");

// ===========================================
// 2️⃣ VIEW PHOTO MODAL (PAGE 3)
// ===========================================
function viewPhoto(src) {
  const modal = document.getElementById('photoModal');
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('photoModal').style.display = 'none';
}

// ===========================================
// 3️⃣ YES / NO INTERAKTIF (PAGE 4)
// ===========================================
function handleYesNo(answer) {
  const yesBtn = document.getElementById('yesBtn');
  const message = document.getElementById('finalMessage');

  if(answer === 'no') {
    // tombol yes membesar
    yesBtn.style.transition = 'all 0.5s ease';
    yesBtn.style.width = '100vw';
    yesBtn.style.height = '100vh';
    yesBtn.style.fontSize = '2em';
  } else if(answer === 'yes') {
    message.innerText = "aku tau kok kalo kamu masih sayang aku 💙 selesai.";
  }
}

// ===========================================
// 4️⃣ MUSIC PLAY
// ===========================================
let musicStarted = false;
function playMusic() {
  if(!musicStarted) {
    const audio = document.getElementById('bgMusic');
    audio.play();
    musicStarted = true;
  }
}
