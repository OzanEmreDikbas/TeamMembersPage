const switchButton = document.querySelector('#switch');

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
console.log(switchButton);
switchButton.addEventListener('click', myFunction);