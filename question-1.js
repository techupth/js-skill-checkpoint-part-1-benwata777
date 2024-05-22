// Question #1
// - ให้เขียนโปรแกรมดังนี้

//     1) เพิ่ม To-do ใหม่ชื่อว่า `"Walk the dog"`

//     2) ให้แก้ไขชื่อ Todo ที่มี `id` เป็น `4` จาก `"Wash dishes"` เป็น `"Go to the gym"`

//     3) ลบ To-do สุดท้ายที่อยู่ใน Array ออก

//     4) ให้แสดงข้อความของ To-do ตัวสุดท้ายที่อยู่ในรายการออกมาบนหน้าจอ Console
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({ id: 5, todo: "walk the dog" });
console.log(myTodo[4]);
myTodo[3].todo = "go to gym";
console.log(myTodo[3]);
delete myTodo[4];
console.log(myTodo[4]); //ลบ id: 5, todo: "walk the dog" ทิ้ง
console.log(myTodo[myTodo.length - 1]);
let lastToDo = myTodo[myTodo.length - 1];
console.log(lastToDo);
//ถ้าไม่ใช้ console.log(myTodo[4]); มีวิธีอื่นให้แสดงtodoสุดท้ายอีกไหม?
