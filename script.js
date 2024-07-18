function showForm(formId) {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => form.style.display = 'none');
  document.getElementById(formId).style.display = 'block';
}

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const sheetName = this.getAttribute('data-sheet');
    formData.append('sheetName', sheetName);
    document.getElementById('loadingSpinner').style.display = 'block';

    fetch('https://script.google.com/macros/s/AKfycbwGQu1rBBLdXRCoAbj7kF1U8UgGXj7zzbxlohQrumgv/exec', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        document.getElementById('loadingSpinner').style.display = 'none';
        alert(data);
        this.reset();
      })
      .catch(error => {
        document.getElementById('loadingSpinner').style.display = 'none';
        alert('Error: ' + error.message);
      });
  });
});
