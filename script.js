// Temporary scripts for placeholder landing
document.addEventListener('DOMContentLoaded',function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const cta = document.getElementById('primary-cta');
  if(cta){
    cta.addEventListener('click', ()=>{
      const email = prompt('Enter your email to be notified (optional)');
      if(email) alert('Thanks — we will notify ' + email);
      else alert('Thanks — we will notify you when we launch.');
    });
  }

  const form = document.getElementById('subscribe-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('email').value;
      if(!email){
        alert('Please enter an email address.');
        return;
      }
      // Placeholder: simulate success
      alert('Thanks — ' + email + ' has been added to the waitlist (placeholder).');
      form.reset();
    });
  }
});
