


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