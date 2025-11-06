// biar tombol landing page smooth
const learnBtn = document.querySelector('.btn[href="#testimoni"]');
if (learnBtn) {
    learnBtn.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector('#testimoni');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// notif abis submit di kontak
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Terima kasih telah menghubungi kami');
        form.reset();
    })
}