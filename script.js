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
      const color = isRed ? "red" : "green";
      const digit = Math.random() < 0.5 ? "0" : "1";

      rowText += `<span style="color: ${color};">${digit}</span>`;
    }

    row.innerHTML = spaces + rowText + spaces; // Căn chỉnh hai bên
    tree.appendChild(row);
  }
}

// Thay đổi liên tục
setInterval(generateTree, 500);

var thep = document.querySelector('.name');
var originContent = thep.innerHTML;
var index = 0;
var dk = true;
var time = 200;
setInterval(function() {
    if(dk) {
        index++;
        if(index > originContent.length) {
            dk = false;
        }
    } else{
        index--;
        if(index < 0) {
            dk = true;
        }
    }
    thep.innerHTML = originContent.substring(0, index);
}, time)
