// Cấu hình cây thông
const treeHeight = 15; // Chiều cao cây thông
const tree = document.getElementById("tree");

// Tạo cây thông
function generateTree() {
  tree.innerHTML = ""; // Xóa cây cũ

  // Thêm ngôi sao trên đỉnh
  const star = document.createElement("div");
  star.id = "star";
  star.innerHTML = "★";
  tree.appendChild(star);

  // Tạo phần lá cây
  for (let i = 0; i < treeHeight; i++) {
    const row = document.createElement("div");
    let rowText = "";

    // Thêm khoảng trắng để căn giữa hàng
    const spaces = "&nbsp;".repeat(treeHeight - i - 1);

    for (let j = 0; j < 2 * i + 1; j++) {
      // Tạo ký tự 0 hoặc 1
      const isRed = Math.random() < 0.1; // 10% đổi màu đỏ
      const color = isRed ? "#f82727" : "#3ff65d";
      const digit = Math.random() < 0.5 ? "0" : "1";

      rowText += `<span style="color: ${color};">${digit}</span>`;
    }

    row.innerHTML = spaces + rowText + spaces; // Căn chỉnh hai bên
    tree.appendChild(row);
  }
}
// Hiệu ứng tuyết rơi
const snowfall = document.getElementById('snowfall');
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = "❄";

  // Vị trí ngẫu nhiên
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;

  snowfall.appendChild(snowflake);

  // Loại bỏ bông tuyết khi kết thúc
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}
// Thay đổi liên tục
setInterval(generateTree, 500);
setInterval(createSnowflake, 100);
// play music
const audio = document.querySelector('#background-radio');
const btnAudio = document.querySelector('button');
console.log(audio + ' ' + btnAudio)
btnAudio.addEventListener('click', () => {
  audio.play();
})