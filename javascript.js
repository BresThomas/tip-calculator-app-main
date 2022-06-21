
var tip = 0;

function reset() {
    tip_amount = 0.00;
    total = 0.00;
    document.getElementById("value_tip_amount").innerHTML = tip_amount.toPrecision([3]);
    document.getElementById("value_total").innerHTML = total.toPrecision([3]);
    person_okay()
}

function cinq() {
    tip = 1.05;

    var bill = document.getElementById("input_bill").value;
    var number_of_people = document.getElementById("input_number_of_people").value;
    if (number_of_people==0) {
        person_not_zero()
    }
    else {
    var tip_amount = ((bill*tip)-bill)/number_of_people;
    var total = (bill*tip)/number_of_people;

    document.getElementById("value_tip_amount").innerHTML = tip_amount.toPrecision([3]);
    document.getElementById("value_total").innerHTML = total.toPrecision(4);}
  }

  function dix() {
    tip = 1.1;

    var bill = document.getElementById("input_bill").value;
    var number_of_people = document.getElementById("input_number_of_people").value;
    if (number_of_people==0) {
        person_not_zero()
    }
    else {
    var tip_amount = ((bill*tip)-bill)/number_of_people;
    var total = (bill*tip)/number_of_people;

    document.getElementById("value_tip_amount").innerHTML = tip_amount.toPrecision([3]);
    document.getElementById("value_total").innerHTML = total.toPrecision(4);}
  }

  function quinze() {
    tip = 1.15;
  
    var bill = document.getElementById("input_bill").value;
    var number_of_people = document.getElementById("input_number_of_people").value;
    if (number_of_people==0) {
        person_not_zero()
    }
    else {
    var tip_amount = ((bill*tip)-bill)/number_of_people;
    var total = ((bill*tip)/number_of_people);

    document.getElementById("value_tip_amount").innerHTML = tip_amount.toPrecision([3]);
    document.getElementById("value_total").innerHTML = total.toPrecision(4);}
  }

  function vingt_cinq() {
    tip = 1.25;
    var bill = document.getElementById("input_bill").value;
    var number_of_people = document.getElementById("input_number_of_people").value;
    if (number_of_people==0) {
        person_not_zero()
    }
    else {
    var tip_amount = ((bill*tip)-bill)/number_of_people;
    var total = (bill*tip)/number_of_people;
    document.getElementById("value_tip_amount").innerHTML = tip_amount.toPrecision([3]);
    document.getElementById("value_total").innerHTML = total.toPrecision(4);}
  }

  function cinquante() {
    tip = 1.5;
    var bill = document.getElementById("input_bill").value;
    var number_of_people = document.getElementById("input_number_of_people").value;
    if (number_of_people==0) {
        person_not_zero()
    }
    else {
    var tip_amount = ((bill*tip)-bill)/number_of_people;
    var total = (bill*tip)/number_of_people;
    document.getElementById("value_tip_amount").innerHTML = tip_amount.toPrecision([3]);
    document.getElementById("value_total").innerHTML = total.toPrecision(4);}
  }

  function custom() {
    tip = document.getElementById('card_custom').value
    var bill = document.getElementById("input_bill").value;
    var number_of_people = document.getElementById("input_number_of_people").value;
    if (number_of_people==0) {
        person_not_zero()
    }
    else {
    var tip_amount = ((bill*tip)-bill)/number_of_people;
    var total = ((bill*tip)/number_of_people);
    document.getElementById("value_tip_amount").innerHTML = tip_amount.toPrecision([3]);
    document.getElementById("value_total").innerHTML = total.toPrecision(4);}
  }

  function person_not_zero() {
    const input_number_of_people = document.getElementById("input_number_of_people");
    input_number_of_people.style.borderStyle = 'solid';
    input_number_of_people.style.borderColor = '#E0722D';
    input_number_of_people.style.borderWidth = '3px';
    const not_zero = document.getElementById("not_zero");
    not_zero.textContent = "Can't be zero";
    
    }
  
    function person_okay() {
        const input_number_of_people = document.getElementById("input_number_of_people");
        input_number_of_people.style.borderStyle = 'none';
        input_number_of_people.style.borderColor = 'none';
        input_number_of_people.style.borderWidth = 'none';
        const not_zero = document.getElementById("not_zero");
        not_zero.innerHTML = ''; 
    }


    function verif(){
        document.getElementById('card_custom').type = 'text';
        document.getElementById("custom").innerHTML = '';

        document.querySelector("#card_custom").addEventListener("keypress", function (e){
            if (e.key === "Enter"){
                
                 custom();
            }
        })
        
        }