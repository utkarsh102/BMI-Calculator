// const values = document.querySelectorAll(".input_values");
let age = document.querySelectorAll("#agee");
let submit = document.querySelector("#submitb");
let vBmi = document.querySelector("#bmiV");
const sBmi = document.querySelector ("#bmiS");


const bmiDisplay = (bmivaluee) => {
    vBmi.innerText = `Your Body mass Index is: ${bmivaluee}`;

}

const bmiStatus = (bmivalue) => {
    if(bmivalue < 18.5){
        sBmi.innerText = "Your Weight status is: Underweight"
    } else if(bmivalue > 18.5 && bmivalue < 25){
        sBmi.innerText = "Your Weight status is: Normal"
    } else if(bmivalue > 24.9 && bmivalue < 30){
        sBmi.innerText = "Your Weight status is: Over Weight"
    }else if(bmivalue > 29.9 && bmivalue < 35){
        sBmi.innerText = "Your Weight status is: Obese Class 1"
    }else if(bmivalue > 34.9 && bmivalue < 40){
        sBmi.innerText = "Your Weight status is: Obese Class 2"
    }else if(bmivalue > 39.9){
        sBmi.innerText = "Your Weight status is: Obese Class 3"
    }
}

submit.addEventListener("click", () => {
    event.preventDefault();
    let weight = document.querySelector("#pweight").value;
    let height = document.querySelector("#pheight").value;
    const bmivalue = weight / height**2;
    const bmivaluee = bmivalue.toFixed(2);
    bmiDisplay(bmivaluee);
    bmiStatus(bmivaluee);
})