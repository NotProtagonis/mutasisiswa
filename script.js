function showForm(formId) {
    const forms = document.querySelectorAll('.form-section');
    forms.forEach(form => {
      form.style.display = form.id === formId ? 'block' : 'none';
    });
  }
  
  function handleFormSubmit(event, formId, url) {
    event.preventDefault();
    document.getElementById('loadingSpinner').style.display = 'block';
  
    const formData = new FormData(document.getElementById(formId));
    const queryString = new URLSearchParams(formData).toString();
  
    fetch(url + '?' + queryString, {
      method: 'GET',
    })
    .then(response => response.text())
    .then(result => {
      document.getElementById('loadingSpinner').style.display = 'none';
      alert(result);
      document.getElementById(formId).reset();
    })
    .catch(error => {
      document.getElementById('loadingSpinner').style.display = 'none';
      console.error('Error:', error);
    });
  }
  
  document.getElementById('formKelasForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, 'formKelasForm', 'https://script.google.com/macros/s/AKfycbxVpQgv3jGxelBbGxDDzzQhmt9dd_gJWTp5jJzxHHG3duXP0grMAvifm4BFu8h4KEe90Q/exec');
  });
  
  document.getElementById('formMutasiMasukForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, 'formMutasiMasukForm', 'https://script.google.com/macros/s/AKfycbxVpQgv3jGxelBbGxDDzzQhmt9dd_gJWTp5jJzxHHG3duXP0grMAvifm4BFu8h4KEe90Q/exec');
  });
  
  document.getElementById('formMutasiKeluarForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, 'formMutasiKeluarForm', 'https://script.google.com/macros/s/AKfycbxVpQgv3jGxelBbGxDDzzQhmt9dd_gJWTp5jJzxHHG3duXP0grMAvifm4BFu8h4KEe90Q/exec');
  });
  
  document.getElementById('formKasusForm').addEventListener('submit', function(event) {
    handleFormSubmit(event, 'formKasusForm', 'https://script.google.com/macros/s/AKfycbxVpQgv3jGxelBbGxDDzzQhmt9dd_gJWTp5jJzxHHG3duXP0grMAvifm4BFu8h4KEe90Q/exec');
  });
  