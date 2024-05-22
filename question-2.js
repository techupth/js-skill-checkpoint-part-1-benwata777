// Question #2
// 1) ให้แก้ไขจำนวนสินค้า “Apple” จาก `100` เป็น `200`

// 2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา `20` บาท และมีจำนวน `300` ชิ้นในสต็อก

// 3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก

// - ผลลัพธ์ของโปรแกรมควรจะแสดงออกมาทางหน้าจอ Console แบบนี้
// มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก 13500 บาท
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
console.log(inventory[0]);
inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory[2]);

function calculate(price, quantity) {
  return price * quantity;
}

const totalValue = inventory.reduce(
  (acc, curr) => acc + calculate(curr.price, curr.quantity),
  0
);

console.log(totalValue);
