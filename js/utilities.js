


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

    document.getElementById('donation-modal-noa').innerText = `Amount donated: $${donationIdGettingFunction("noadon")} , Total fund raised $${mainBalanceGettingFunction("card1-balance")}`
    

}


function openModalFeni() {
    document.getElementById('myModal').classList.remove('hidden');

    document.getElementById('donation-modal-noa').innerText = `Amount donated: $${donationIdGettingFunction("fenidon") } , Total fund raised $${mainBalanceGettingFunction("card2-balance")}`
    

}

function openModalQuota() {
    document.getElementById('myModal').classList.remove('hidden');

    document.getElementById('donation-modal-noa').innerText = `Amount donated: $${donationIdGettingFunction("quotadon")}, Total fund raised $${mainBalanceGettingFunction("card3-balance")}`
    

}



function closeModal() {
    document.getElementById('myModal').classList.add('hidden');
}