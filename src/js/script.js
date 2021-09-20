function enlarge(){

}

function saludar (event) {
    // `this` dentro de los métodos apunta a la instancia de Vue
    alert('Hola fidel!')
    // `evento` es el evento DOM nativo
    if (event) {
      alert(event.target.tagName)
    }
  }