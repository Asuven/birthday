// R 系列
for (let i = 1; i <= 35; i++) {
  let img = document.createElement("img");
  img.src = `moyi/r${i}.jpg`;
  img.alt = `r ${i}`;
  document.body.appendChild(img);
}

// SR 系列
for (let i = 1; i <= 30; i++) {
  let img = document.createElement("img");
  img.src = `moyi/sr${i}.jpg`;
  img.alt = `sr ${i}`;
  document.body.appendChild(img);
}

// MR 系列
for (let i = 1; i <= 22; i++) {
  if(i!==3)
  {
    let img = document.createElement("img");
    img.src = `moyi/mr${i}.jpg`;
    img.alt = `mr ${i}`;
    document.body.appendChild(img);   
  }
}

// SSR 系列
const lineBreak = document.createElement("div");
lineBreak.style.width = "100%";   // 占满一行
document.body.appendChild(lineBreak);

let img = document.createElement("img");
img.src = `moyi/mr3.jpg`;
img.alt = `mr 3`;
img.classList.add("ssr-img");
document.body.appendChild(img);  
for (let i = 1; i <= 92; i++) {
  let img = document.createElement("img");
  img.src = `moyi/ssr${i}.jpg`;
  img.alt = `ssr ${i}`;
  img.classList.add("ssr-img"); // 如果你要对 SSR 单独加样式
  document.body.appendChild(img);
}

// SSS 系列
for (let i = 1; i <= 6; i++) {
  let img = document.createElement("img");
  img.src = `moyi/sss${i}.jpg`;
  img.alt = `sss ${i}`;
  img.classList.add("ssr-img");
  document.body.appendChild(img);
}

// function addImage(src, alt, cls = "") {
//   let link = document.createElement("a");
//   link.href = src;
//   link.setAttribute("data-lightbox", "gallery"); // 同一组图片
//   link.setAttribute("data-title", alt);

//   let img = document.createElement("img");
//   img.src = src;
//   img.alt = alt;
//   if (cls) img.classList.add(cls);

//   link.appendChild(img);
//   document.body.appendChild(link);
// }

// // R 系列
// for (let i = 1; i <= 35; i++) {
//   addImage(`moyi/r${i}.jpg`, `R ${i}`);
// }

// // SR 系列
// for (let i = 1; i <= 30; i++) {
//   addImage(`moyi/sr${i}.jpg`, `SR ${i}`);
// }

// // MR 系列
// for (let i = 1; i <= 22; i++) {
//   if(i !== 3) addImage(`moyi/mr${i}.jpg`, `MR ${i}`);
// }

// // SSR 系列
// const lineBreak = document.createElement("div");
// lineBreak.style.width = "100%";
// document.body.appendChild(lineBreak);

// addImage(`moyi/mr3.jpg`, `MR 3`, "ssr-img");
// for (let i = 1; i <= 92; i++) {
//   addImage(`moyi/ssr${i}.jpg`, `SSR ${i}`, "ssr-img");
// }

// // SSS 系列
// for (let i = 1; i <= 6; i++) {
//   addImage(`moyi/sss${i}.jpg`, `sss ${i}`,"ssr-img");
// }

    // 模态弹窗功能
    const container = document.body;
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    container.addEventListener("click", e => {
      if(e.target.tagName === "IMG"){
        modal.style.display = "flex";
        modalImg.src = e.target.src;
      }
        // 延迟滚动，让图片渲染后滚动到视野中
        setTimeout(() => {
        modalImg.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 50);
    });

    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });

// 音乐播放控制
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "🔊";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵";
  }
});
