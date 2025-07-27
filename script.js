const headerName = document.querySelector(".hero-subtitle");
const text       = "Aspiring Full-Stack Developer building modern web applications with React, Java, and cloud technologies";

function textTypingEffect(element, text, index = 0) {
  if (index < text.length) {
    element.textContent += text[index];
    setTimeout(() => {
      textTypingEffect(element, text, index + 1);
    }, 100);
  } else {
    setTimeout(() => {
      element.textContent = "";               
      textTypingEffect(element, text, 0);     
    }, 1500); 
  }
}
textTypingEffect(headerName, text);
