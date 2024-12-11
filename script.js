function downloadCV() {
    window.location.href = 'FejkCV.pdf'; // Länka till ditt CV
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
  
    if (name.value.length < 2) {
      alert('Namnet måste vara minst 2 tecken långt.');
      return;
    }
  
    if (!email.value.includes('@')) {
      alert('Ange en giltig e-postadress.');
      return;
    }
  
    if (message.value.length < 10) {
      alert('Meddelandet måste vara minst 10 tecken långt.');
      return;
    }
  
    alert('Formuläret skickades!');
    // Här kan du skicka formuläret till en server eller tjänst.
  });
  