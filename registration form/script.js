document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    
    // Show notification
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    notification.style.bottom = '0';
    
    // Reset form
    this.reset();
    
    //notification 
    setTimeout(() => {
        notification.style.bottom = '-50px';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 400);
    }, 3000);
    
    console.log('Registration data:', { username, email, password });
});