let student1 = {
    nama: "Ale",
    age: 28,
    programmingLanguange : ["PHP", "C++", "C#", "Golang", "JavaScript", "Java"]
}

let student2 = {
    nama: "Yoga",
    age: 55,
    programmingLanguange : ["Love", "JavaScript", "Java"]
}

let student3 = {
    nama: "Fadlan",
    age: 8,
    programmingLanguange : ["India", "JavaScript", "Java"]
}

// constructor Function
function StudentFSW (name, age, programmingLanguange) {
    this.name = name;
    this.age = age;
    this.programmingLanguange = programmingLanguange;
}

// inisialisasi Object
var student1 = new StudentFSW('Hafizh', 20, ["Java"])
var student2 = new StudentFSW('Adrian', 20, ["JavaScript"])
var student3 = new StudentFSW('Diki', 18, ["Physical Touch"])

console.log(student2)