
    // Simple slideshow for gallery top image
    (function(){
      const slides = [
        'images/70.png',
        'images/35.png',
        'images/36.png',
        'images/37.png'
      ];
      let i = 0;
      const el = document.querySelector('#slideshow img');
      setInterval(()=>{ i = (i+1) % slides.length; el.src = slides[i]; }, 2500);
    })();

    // Basic contact form handler (no backend) - saves to localStorage for demo
    function handleSubmit(e){
      e.preventDefault();
      const form = e.target;
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
        time: new Date().toISOString()
      };
      // store demo copy
      const existing = JSON.parse(localStorage.getItem('vm_contacts')||'[]');
      existing.push(data);
      localStorage.setItem('vm_contacts', JSON.stringify(existing));
      alert('Thanks! Your message was saved locally (demo).');
      form.reset();
    }