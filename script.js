const form = document.querySelector("form");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const age = document.getElementById("age").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const department = document.getElementById("department").value;
    const address = document.getElementById("address").value;

    result.innerHTML = `
        <h2>Submitted Successfully!</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;
});