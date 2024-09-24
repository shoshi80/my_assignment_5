document.getElementById("noabut")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const num = donationIdGettingFunction("noadon");
        const mainBalance = mainBalanceGettingFunction("main-balance");
        const donatedBalance = mainBalanceGettingFunction("card1-balance");

        console.log(`num: ${num}, mainBalance: ${mainBalance}`);

        if (num > mainBalance) {
            alert("You do not have sufficient balance");
            return;
        }
        if (isNaN(num) || num < 0 || num == "") {
            alert("Invalid Input");
            return;
        }
        else {
            const newBalance = mainBalanceUpdate(mainBalance, num);
            const newDonatedBalance = donatedBalanceUpdate(donatedBalance, num);



            document.getElementById("main-balance").innerHTML = newBalance;
            document.getElementById("card1-balance").innerHTML = newDonatedBalance;

         

            openModalNoa();

            const div = document.createElement('div');
        div.classList.add('border-dashed');
        div.innerHTML = `
    <div class="border border-dashed h-auto w-8/12 text-start mt-10 mb-6 mx-auto p-4"> 
    <h1 class="text-lg"> Money Donated ${num} BDT </h1>
    <p> Your new balance is ${newBalance} BDT </p>
    </div>

    
    
    `
        document.getElementById('transaction-section').appendChild(div);




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

        if (isNaN(num) || num < 0 || num == "") {
            alert("Invalid Input");
            return;
        }

        else {
            const newBalance = mainBalanceUpdate(mainBalance, num);
            const newDonatedBalance = donatedBalanceUpdate(donatedBalance, num);



            document.getElementById("main-balance").innerHTML = newBalance;
            document.getElementById("card2-balance").innerHTML = newDonatedBalance;


            openModalFeni();

            appendFunction(num, newBalance);
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
        if (isNaN(num) || num < 0 || num == "") {
            alert("Invalid Input");
            return;
        }

        else {
            const newBalance = mainBalanceUpdate(mainBalance, num);
            const newDonatedBalance = donatedBalanceUpdate(donatedBalance, num);



            document.getElementById("main-balance").innerHTML = newBalance;
            document.getElementById("card3-balance").innerHTML = newDonatedBalance;
             openModalQuota();

             appendFunction(num, newBalance);
        }



    })


document.getElementById("donation-btn")
    .addEventListener("click", function () {

        showSectionById("cards-section");

    })

document.getElementById("history-btn")
    .addEventListener("click", function () {

        showSectionById("transaction-section");

    })
