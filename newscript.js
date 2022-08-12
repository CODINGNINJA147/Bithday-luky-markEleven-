var btnCheck = document.querySelector('#btn-check')
var birthDate = document.querySelector('#birth-date')
var luckyNumber = document.querySelector('#lucky-number')
var outputDiv = document.querySelector('.output')

btnCheck.addEventListener('click',function getValues(){
    var dob = birthDate.value
    var malik = calculateSum(dob)
    checkMyBirthDate(malik,luckyNumber.value)
    // if(malik&&dob){
    //     checkMyBirthDate(malik,luckyNumber.value)
    // }else{
    //     outputDiv.innerText = 'invalid'
    // }


    function checkMyBirthDate(m,n){
        if(m%n===0){
            outputDiv.innerText = 'Your birthday is  lucky 😍'
        }else{
            outputDiv.innerText = 'Your birthday is not lucky 😧'
        }
    }


    function calculateSum(dob){
        dob = dob.replaceAll('-','')
        let add = 0;
        for(i=0;i<dob.length;i++){
            add = add+Number(dob.charAt(i))
        }
        return add;

    }
})