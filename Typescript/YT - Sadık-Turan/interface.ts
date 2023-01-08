interface Person {
    name:string,
}

interface Student extends Person{
    number:number
}

interface Teacher extends Person{
    lesson: string
}


interface School{
    student: Student,
    teacher: Teacher
}

let travelTo = (sch:School) : void => {
    console.log(sch.student.name + " " + sch.student.number + " teacher:" + sch.teacher.lesson)    
}

travelTo ({
   student : {
    name : "Deniz",
    number : 1865
   },
   teacher : {
     lesson: "Math",
     name: "Deniz"
   }
});



