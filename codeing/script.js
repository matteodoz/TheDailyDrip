
document.addEventListener("DOMContentLoaded", function () {
    // Get the Order Online button
    const orderButton = document.querySelector(".button");

    // Make the order button interactive
    orderButton.addEventListener("click", function (event) {
        event.preventDefault();

        const drink = prompt(
            "Welcome to The Daily Drip!\n" +
            "Which drink would you like to order?\n\n" +
            "1. Pumpkin Spice Latte\n" +
            "2. Honey Cinnamon Cold Brew\n" +
            "3. Caramel Pecan Latte"
        );

        if (drink === null || drink.trim() === "") {
            alert("No order placed. Come back anytime!");
            return;
        }

        const drinks = {
            "1": "Pumpkin Spice Latte",
            "2": "Honey Cinnamon Cold Brew",
            "3": "Caramel Pecan Latte"
        };

        if (!drinks[drink.trim()]) {
            alert("Invalid choice. Please refresh and try again!");
            return;
        }

        alert(
            "Thank you for choosing The Daily Drip! ☕\n\n" +
            "Your selected drink: " + drinks[drink.trim()] +
            "\nDiscount Code: FALLCOFFEE2026\n\n" +
            "Show this code at our counter to claim your offer!"
        );
    });

    // Add a hover effect to the order button
    orderButton.addEventListener("mouseenter", function () {
        orderButton.style.backgroundColor = "#4a2c11";
        orderButton.style.transform = "scale(1.05)";
        orderButton.style.transition = "0.3s";
    });

    orderButton.addEventListener("mouseleave", function () {
        orderButton.style.backgroundColor = "#8b4513";
        orderButton.style.transform = "scale(1)";
    });

    // Welcome message in the browser console
    console.log("Welcome to The Daily Drip Coffee Shop!");
});
