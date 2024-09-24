


function donationIdGettingFunction(id) {


    const ids = document.getElementById(id).value;




    const idNumber = Number(ids);
    return idNumber;

}
function mainBalanceGettingFunction(id) {


    const ids = document.getElementById(id).innerText;
    const idNumber = Number(ids);
    return idNumber;

}


function mainBalanceUpdate(balance, donation) {

    const updateBalance = balance - donation;

    return updateBalance.toFixed(2);

}

function donatedBalanceUpdate(balance, donation) {

    const updateBalance = balance + donation;

    return updateBalance.toFixed(2);

}


function showSectionById(id) {

    document.getElementById("cards-section").classList.add('hidden')
    document.getElementById("transaction-section").classList.add('hidden')
    document.getElementById("footer-sec").classList.add('hidden')

    // show
    document.getElementById(id).classList.remove('hidden')


}


function toggleActive(activeButtonId, inactiveButtonId) {
    // Get buttons
    const activeButton = document.getElementById(activeButtonId);
    const inactiveButton = document.getElementById(inactiveButtonId);

    // Add active class to clicked button (turn it green)
    activeButton.classList.add('bg-green-500', 'text-black');
    activeButton.classList.remove('bg-gray-200', 'text-black');

    // Remove active class from the other button (reset to neutral)
    inactiveButton.classList.remove('bg-green-500', 'text-black');
    inactiveButton.classList.add('bg-gray-200', 'text-black');
}




function openModalNoa() {
    document.getElementById('myModal').classList.remove('hidden');

    document.getElementById('donation-modal-noa').innerText = `Amount donated: ${donationIdGettingFunction("noadon")} BDT, Total fund raised ${mainBalanceGettingFunction("card1-balance")} BDT`
    

}


function openModalFeni() {
    document.getElementById('myModal').classList.remove('hidden');

    document.getElementById('donation-modal-noa').innerText = `Amount donated: ${donationIdGettingFunction("fenidon") }BDT , Total fund raised ${mainBalanceGettingFunction("card2-balance")} BDT`
    

}

function openModalQuota() {
    document.getElementById('myModal').classList.remove('hidden');

    document.getElementById('donation-modal-noa').innerText = `Amount donated: ${donationIdGettingFunction("quotadon")} BDT, Total fund raised ${mainBalanceGettingFunction("card3-balance")} BDT`
    

}



function closeModal() {
    document.getElementById('myModal').classList.add('hidden');
}



function appendFunction(num, newBalance , donationPlace){

    const div = document.createElement('div');
    div.classList.add('border-dashed');
    const timestamp = new Date().toLocaleString(); // Formats the date and time

    div.innerHTML = `
<div class="border border-dashed h-auto w-8/12 text-start mt-10 mb-6 mx-auto p-4"> 
<h1 class="text-lg font-extrabold"> Money Donated ${num} BDT for ${donationPlace} </h1>
<p> Your new balance is ${newBalance} BDT </p>
<p class="text-sm text-gray-500">Timestamp: ${timestamp}</p> 
</div>



`
    const child= document.getElementById('transaction-section').prepend(div);
    return child;
}