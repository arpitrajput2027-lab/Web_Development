const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const income = parseInt(document.getElementById("income").value);
    const result = document.getElementById("result");

    let tax = 0;
    if(income <=1200000){
        tax = 0;
    }
    else if(income <=1600000){
        tax+= (income - 1200000)*0.15;
    }
    else if(income <= 2000000){
        tax+=(income-1600000)*0.2 + 60000;
    }
      else if(income <= 2400000){
        tax+=(income-2000000)*0.25 + 60000 + 80000;
    }

    else{
        tax+=(income-2400000)*0.3 + 60000 + 80000 + 100000;
    }

    result.textContent = ` Total Tax : ${tax}₹`


  
})