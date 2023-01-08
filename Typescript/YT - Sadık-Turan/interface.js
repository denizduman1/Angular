var travelTo = function (sch) {
    console.log(sch.student.name + " " + sch.student.number + " teacher:" + sch.teacher.lesson);
};
travelTo({
    student: {
        name: "Deniz",
        number: 1865
    },
    teacher: {
        lesson: "Math",
        name: "Deniz"
    }
});
