const students = [];
function inputData() {
    promptName      = document.getElementById('name').value;
    promptHeight    = document.getElementById('height').value;
    promptAge       = document.getElementById('age').value;
    promptGender    = document.getElementById('gender').value;
    promptClassRoom = document.getElementById('classRoom').value;
    promptMathGrade = document.getElementById('mathGrade').value;
    students.push({ name        : String(promptName), 
                    height      : Number(promptHeight),
                    age         : Number(promptAge),
                    gender      : String(promptGender),
                    classRoom   : String(promptClassRoom),
                    mathGrade   : Number(promptMathGrade)
    });
    var sizeArray = students.length;
    var listp = document.getElementById('students');
    listp.innerHTML = '';
    var ul=document.createElement('ul');
    for (var index = 0; index < sizeArray; ++index) {
        var li=document.createElement('li');
        var textnode = document.createTextNode(`    Name: ${students[index].name} - 
                                                    Height: ${students[index].height}cm - 
                                                    Age: ${students[index].age} - 
                                                    Gender: ${students[index].gender} - 
                                                    ClassRoom: ${students[index].classRoom} -
                                                    MathGrade: ${students[index].mathGrade}
        `);    
        li.appendChild(textnode);
        ul.appendChild(li);                                 
    }
    listp.appendChild(ul);
}; 

function clearData() { students.length = 0; };

function averageStudents() {
    var sizeArray = students.length;
    var average = 0;
    for ( var index = 0; index < sizeArray; index++ ) {
        average += students[index].mathGrade;
    };
    average /= sizeArray;
    var elementAverage = document.getElementById('average');
    elementAverage.innerHTML = (`Média dos Alunos: ${average}`);
};

function validateSituation(gender, name, Grade, averagePass) {
    var situationPass = '';
    var situationNotPass = '';

    switch(gender) {
        case 'female':
            situationPass = 'Aprovada'; 
            situationNotPass = 'Reprovada';
            break;
        case 'male':
            situationPass = 'Aprovado'; 
            situationNotPass = 'Reprovado';
            break;
        default:
            situationPass = 'Aprovado(a)'; 
            situationNotPass = 'Reprovado(a)';
            break;                
    }
    
    Grade >= averagePass
        ? result = (`${name} ${situationPass}, nota: ${Grade}`) 
        : result = (`${name} ${situationNotPass}, nota: ${Grade}`);
    return result;
};

function verifyAproveReprove() {
    var sizeArray = students.length;
    averagePass = 7;
    const resultSituation = [];
    for ( var index = 0; index < sizeArray; index++ ) {
        resultSituation.push( validateSituation(students[index].gender,
                            students[index].name, 
                            students[index].mathGrade, 
                            averagePass), 
        );
    };
    var listp = document.getElementById('aproveReprove');
    listp.innerHTML = '';
    var ul=document.createElement('ul');
    for (var index = 0; index < sizeArray; ++index) {
        var li=document.createElement('li');
        var textnode = document.createTextNode(`${resultSituation[index]}`);    
        li.appendChild(textnode);
        ul.appendChild(li);                                 
    }
    listp.appendChild(ul);
};