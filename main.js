// ===== Binary Reveal and Copy =====
document.addEventListener("DOMContentLoaded", () => {
  const revealBtn = document.getElementById("revealBtn");
  const decoded = document.getElementById("decoded");
  const copyBtn = document.getElementById("copyBtn");
  const copyAck = document.getElementById("copyAck");
  const binaryBlock = document.getElementById("binaryBlock");

  if(revealBtn){
    revealBtn.addEventListener("click", () => {
      decoded.style.display = decoded.style.display === "block" ? "none" : "block";
    });
  }

  if(copyBtn){
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(binaryBlock.innerText).then(() => {
        copyAck.style.display = "inline";
        setTimeout(() => copyAck.style.display = "none", 1500);
      });
    });
  }

  // ===== Optional: Typing Effect =====
  if(binaryBlock){
    const fullText = binaryBlock.innerText;
    binaryBlock.innerText = "";
    let i = 0;
    const typing = setInterval(() => {
      binaryBlock.innerText += fullText[i];
      i++;
      if(i >= fullText.length) clearInterval(typing);
    }, 10); // speed of typing
  }
});

