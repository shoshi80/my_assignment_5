document.getElementById("noabut")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const num = donationIdGettingFunction("noadon");
        const mainBalance = mainBalanceGettingFunction("main-balance");
        const donatedBalance = mainBalanceGettingFunction("card1-balance");

        if (num > mainBalance) {
            alert("You do not have sufficient balance");
            return;
        }
        if (isNaN(num) || num < 0||num=="") {
            alert("Invalid Input");
            return;
        }
        else{
            const newBalance = mainBalanceUpdate(mainBalance, num);
            const newDonatedBalance = donatedBalanceUpdate(donatedBalance, num);
    
    
    
            document.getElementById("main-balance").innerHTML = newBalance;
            document.getElementById("card1-balance").innerHTML = newDonatedBalance;

            this.onclick=openModalNoa();
            
        }


       

        

    })


document.getElementById("fenibut")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const num = donationIdGettingFunction("fenidon")
        const mainBalance = mainBalanceGettingFunction("main-balance");
        const donatedBalance = mainBalanceGettingFunction("card2-balance");
        if (num > mainBalance) {
            alert("You do not have sufficient balance");
            return;
        }

        if (isNaN(num)|| num < 0 ||num=="") {
            alert("Invalid Input");
            return;
        }

        else{
            const newBalance = mainBalanceUpdate(mainBalance, num);
            const newDonatedBalance = donatedBalanceUpdate(donatedBalance, num);
    
    
    
            document.getElementById("main-balance").innerHTML = newBalance;
            document.getElementById("card2-balance").innerHTML = newDonatedBalance;
            this.onclick=openModalFeni();
        }

      
    })

document.getElementById("quotabut")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const num = donationIdGettingFunction("quotadon")
        const mainBalance = mainBalanceGettingFunction("main-balance");
        const donatedBalance = mainBalanceGettingFunction("card3-balance");
        if (num > mainBalance) {
            alert("You do not have sufficient balance");
            return;
        }
        if (isNaN(num)|| num < 0 ||num=="") {
            alert("Invalid Input");
            return;
        }

        else{
            const newBalance = mainBalanceUpdate(mainBalance, num);
        const newDonatedBalance = donatedBalanceUpdate(donatedBalance, num);



        document.getElementById("main-balance").innerHTML = newBalance;
        document.getElementById("card3-balance").innerHTML = newDonatedBalance;
            this.onclick=openModalQuota();
        }

        

    })


    document.getElementById("donation-btn")
    .addEventListener("click", function(){

        showSectionById("cards-section");

    })

    document.getElementById("history-btn")
    .addEventListener("click", function(){

        showSectionById("transaction-section");

    })
