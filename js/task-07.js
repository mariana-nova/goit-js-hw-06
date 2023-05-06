const fontSizeControl = document.querySelector('#font-size-control');
 const textElement = document.querySelector('#text'); 
 textElement.style.fontSize="50px";
fontSizeControl.addEventListener('input', (e) => 
{  textElement.style.fontSize = fontSizeControl.value + 'px'; });