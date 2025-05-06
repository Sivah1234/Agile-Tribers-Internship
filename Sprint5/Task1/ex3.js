
function getStudentScore(students, name) {
  
    const studentMap = new Map();
  
    students.forEach(student => {
      studentMap.set(student.name, student.score);
    });
  
    return studentMap.get(name);
  }
  
  const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
  ];
  
  const result = getStudentScore(students, 'Bob');
  console.log(result);  