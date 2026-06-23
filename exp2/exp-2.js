// TechStore JavaScript File

console.log("Welcome to TechStore");

// Example button click message
document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("click", () => {
        console.log("View Details Button Clicked");
    });
});