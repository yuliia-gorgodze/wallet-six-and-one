export default function chacked(e) {
  if (e === undefined) {
    return;
  }

  const addText = document.getElementById('addText');
  const addСosts = document.getElementById('addСosts');
  if (e.target.checked) {
    addText.classList.add('addText');
    if (addСosts.classList.length > 0) {
      addСosts.classList.remove('addСosts');
    }
    return;
  }
  addText.classList.remove('addText');
  addСosts.classList.add('addСosts');
  return;
}
