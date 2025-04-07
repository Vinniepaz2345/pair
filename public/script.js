async function generateCode() {
  const number = document.getElementById('number').value.trim();
  const result = document.getElementById('result');

  if (!number) {
    result.textContent = 'Please enter a valid number.';
    return;
  }

  result.textContent = 'Generating code...';

  try {
    const res = await fetch(`/pair?number=${encodeURIComponent(number)}`);
    const data = await res.json();
    result.textContent = data.code || 'Failed to generate code.';
  } catch (err) {
    result.textContent = 'Error: ' + err.message;
  }
}
