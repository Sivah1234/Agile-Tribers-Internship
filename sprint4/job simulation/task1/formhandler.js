document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    if (!name || !email || !age) {
      errorMsg.textContent = "All fields are required.";
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMsg.textContent = "Invalid email format.";
      return;
    }
  
    if (isNaN(age) || age <= 0) {
      errorMsg.textContent = "Age must be a positive number.";
      return;
    }
  
    const userData = { name, email, age };
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "display.html";
  });
  