function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location = "index.html";
};