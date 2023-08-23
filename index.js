let one = document.querySelector('.one');


one.onclick = er => {

  let ukeep = one.getAttribute('ukeep');

  console.log(ukeep);
  if (ukeep == 'false') {
    one.style.border = '1px solid blue';
    one.setAttribute('ukeep', true);
  } else {
    one.style.border = '2px solid red';
    one.setAttribute('ukeep', false);
  }
}