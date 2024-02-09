//import { Unit_1 } from './Testing/Demo.js';

var arg = '';
    ans = "";
    ques = "";
    true_ans = "";
    kanji_ans = "";

const Unit_ls = [Unit_1]

function getLesson(a){
    lesson = a;
    getValue(lesson);
}

function getValue(Unit){
    if(Unit_ls[Unit] != undefined){
        arg = Unit_ls[Unit][Math.floor(Math.random() * Unit_1.length)].split(":")
        ques = arg[0];
        true_ans = arg[1];

        if(arg[2] != undefined){
            kanji_ans = arg[2];
        }

        document.getElementById('op').innerHTML = ques;
    }

    else{
        alert("This Unit will be updated soon.")
        _clear();
    }
}

function getAnswer(){
    ans = document.getElementById('ans').value;
    getResult();
}

function getResult(){
    if(ans == true_ans){
        alert('True!');
        getValue(lesson);
    }

    else{
        if(arg[2] != undefined){
            alert(`False! True answer is ${true_ans} or ${kanji_ans}`);
            getValue(lesson);
        }

        else{
            alert(`False! True answer is ${true_ans}`);
            getValue(lesson);
        }
    }
}

function _clear(){
    arg = '';
    ans = '';
    ques = "";
    true_ans = "";
    document.getElementById('op').innerHTML = ques;
    document.getElementById('Result').innerHTML = ans;
}

