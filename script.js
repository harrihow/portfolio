const headerName = document.querySelector(".pAnimate");
const text       = "Aspiring Full Stack Developer";

function textTypingEffect(element, text, index = 0) {
  if (index < text.length) {
    element.textContent += text[index];
    setTimeout(() => {
      textTypingEffect(element, text, index + 1);
    }, 300);
  } else {
    setTimeout(() => {
      element.textContent = "";               
      textTypingEffect(element, text, 0);     
    }, 1500); 
  }
}
textTypingEffect(headerName, text);
