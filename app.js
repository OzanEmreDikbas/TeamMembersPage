const bgrColorBtn = document.querySelector('button')

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
console.log(bgrColorBtn);
bgrColorBtn.addEventListener('click', myFunction)