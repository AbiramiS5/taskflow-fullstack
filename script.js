async function fetchPrice() {
    const crypto = document.getElementById("crypto").value;

    const url = https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=inr;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML =
            `<h2>Price of ${crypto.toUpperCase()}</h2>
             <p>INR: ₹ ${data[crypto].inr}</p>`;
    } 
    catch (error) {
        document.getElementById("result").innerHTML = 
            <p style="color:red;">Something went wrong. Try again.</p>;
    }
}

document.getElementById("getPrice").addEventListener("click", fetchPrice);
