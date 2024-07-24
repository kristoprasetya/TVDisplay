let patientTitle = '';

function showForm(title, genderTitle) {
    document.getElementById('formTitle').innerText = title;
    document.getElementById('patientForm').style.display = 'flex';
    document.getElementById('greetingSection').style.display = 'none';
    patientTitle = genderTitle;
}

document.getElementById('patientName').addEventListener('input', function() {
    const patientName = document.getElementById('patientName').value;
    document.getElementById('patientGreeting').innerText = `${patientTitle} ${patientName}`;
});

function submitForm() {
    const patientName = document.getElementById('patientName').value;
    if (patientName.trim() !== '') {
        window.location.href = `main2.html?patientName=${encodeURIComponent(patientName)}&patientTitle=${encodeURIComponent(patientTitle)}`;
    }
}

function cancelForm() {
    document.getElementById('patientForm').style.display = 'none';
    document.getElementById('greetingSection').style.display = 'block';
    document.getElementById('patientName').value = '';
}
