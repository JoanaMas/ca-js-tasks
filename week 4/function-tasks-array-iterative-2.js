const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupEnd();

console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
{

  // 1 - su forEach

  students.forEach((student) => {
    if (student.faculty === 'Informatikos fakultetas') {
      return console.log(student)
    }
  });


  // 2 - su for cycle

  // const printAllStudents = function (student) {
  //     for (let i = 0; i < student.length; i++) {
  //         if(student[i].faculty === 'Informatikos fakultetas') {
  //             console.log(student[i]);
  //         }

  //     }        
  // }

  //     console.log(printAllStudents(students));


}
console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
{

  // 1 - su forEach

  students.forEach((student) => {
    if (student.faculty === 'Chemijos fakultetas') {
      console.log(student);
    };
  });


  // 2 - su for cycle

  /* const printStudentsFacultyOfChemistry = function (student) {
      for (let i = 0; i < student.length; i++) {
          if(student[i].faculty === 'Chemijos fakultetas') {
              console.log(student[i]);
          }
          
      }
  }

  console.log(printStudentsFacultyOfChemistry(students)); */

}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{

  // 1 - su forEach

  students.forEach((student) => {
    if (student.faculty === 'Elektros ir elektronikos fakultetas') {
      console.log(student);
    };
  });

  // 2 - su for cycle

  /* const printStudentsFacultyOfElectrical = function (student) {
      for (let i = 0; i < student.length; i++) {
          if(student[i].faculty === 'Elektros ir elektronikos fakultetas') {
              console.log(student[i]);
          }
      } 
  }

  console.log(printStudentsFacultyOfElectrical(students)); */

}
console.groupEnd();

console.groupCollapsed('4. Atspausdinti tik pirmo kurso studentus');
{
  students.forEach((student) => {
    if (student.course === 1) {
      console.log(student);
    };
  });

}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti tik antro kurso studentus');
{
  students.forEach((student) => {
    if (student.course === 2) {
      console.log(student);
    };
  });
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti tik trečio kurso studentus');
{
  students.forEach((student) => {
    if (student.course === 3) {
      console.log(student);
    } else {
      console.error('There are no 3rd course students at the moment');
    };
  });

}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti tik ketvirto kurso studentus');
{
  students.forEach((student) => {
    if (student.course === 4) {
      console.log(student);
    } else {
      console.error('There are no 4th course students at the moment')
    };
  });

}
console.groupEnd();

console.groupCollapsed('8. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{

  // 1. 

  const studentAverages = students.map((student) => {
    return studentsSemesterAverage(student);
  });

  // 2. 

  function studentsSemesterAverage(student) {
    const semesterCredits = countSemesterCredits(student.modules);

    let semesterAvgWeight = 0;
    student.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvg(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits;
  }

  
  // 3.

  function calcModuleAvg(module) {

    let sum = 0;

    module.marks.forEach(mark => sum += mark);
    return Math.round(sum / module.marks.length);
  }

  // 4.

  function countSemesterCredits(modules) {

    let sum = 0;

    modules.forEach(module => sum += module.credits);
    return sum;
  }

  console.log(studentAverages);


}
console.groupCollapsed('9. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{

  // 1. 
  students.forEach(function (student) {
    if (student.faculty === 'Informatikos fakultetas')
      console.log(`%cFull name: ${student.name} ${student.surname} - Average:`, 'color: green', studentsSemesterAverage(student));
  });


  // 2. 
  function studentsSemesterAverage(student) {
    const semesterCredits = countSemesterCredits(student.modules);

    let semesterAvgWeight = 0;
    student.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvg(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits;
  }


  // 3.

  function calcModuleAvg(module) {

    let sum = 0;

    module.marks.forEach(mark => sum += mark);
    return Math.round(sum / module.marks.length);
  }


  // 4.

  function countSemesterCredits(modules) {

    let sum = 0;

    modules.forEach(module => sum += module.credits);
    return sum;
  }
}



console.groupEnd();

console.groupCollapsed('10. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  // 1. 
  students.forEach(function (student) {
    if (student.faculty === 'Chemijos fakultetas')
      console.log(`%cFull name: ${student.name} ${student.surname} - Average:`, 'color: green', studentsSemesterAverage(student));
  });

  // 2. 
  function studentsSemesterAverage(student) {
    const semesterCredits = countSemesterCredits(student.modules);

    let semesterAvgWeight = 0;
    student.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvg(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits;
  }

  // 3.

  function calcModuleAvg(module) {

    let sum = 0;

    module.marks.forEach(mark => sum += mark);
    return Math.round(sum / module.marks.length);
  }

  // 4.

  function countSemesterCredits(modules) {

    let sum = 0;

    modules.forEach(module => sum += module.credits);
    return sum;
  }

}
console.groupEnd();

console.groupCollapsed('11. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{

  // 1. 

  students.forEach(function (student) {
    if (student.faculty === 'Elektros ir elektronikos fakultetas')
      console.log(`%cFull name: ${student.name} ${student.surname} - Average:`, 'color: green', studentsSemesterAverage(student));
  });



  // 2. 

  function studentsSemesterAverage(student) {
    const semesterCredits = countSemesterCredits(student.modules);

    let semesterAvgWeight = 0;
    student.modules.forEach(module => {
      const semesterAvgWeightComponent = calcModuleAvg(module) * module.credits;
      semesterAvgWeight += semesterAvgWeightComponent;
    });
    return semesterAvgWeight / semesterCredits;
  }


  // 3.

  function calcModuleAvg(module) {

    let sum = 0;

    module.marks.forEach(mark => sum += mark);
    return Math.round(sum / module.marks.length);
  }


  // 4.

  function countSemesterCredits(modules) {

    let sum = 0;

    modules.forEach(module => sum += module.credits);
    return sum;
  }
}
console.groupEnd();