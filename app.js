// JSON veri
const users = [
  {
    id: 1,
    name: "Ali Yilmaz",
    email: "ali@example.com",
    role: "admin"
  },
  {
    id: 2,
    name: "Ayse Demir",
    email: "ayse@example.com",
    role: "user"
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    email: "mehmet@example.com",
    role: "user"
  }
];

// kullanıcıları ekrana yazdıran fonksiyon
function showUsers() {
  users.forEach(user => {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Role: ${user.role}`);
    console.log("-------------------");
  });
}

// fonksiyonu çalıştır
showUsers();