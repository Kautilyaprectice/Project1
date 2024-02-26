function formHandle(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const details = {
        name , 
        email ,
        phone , 
        date ,
        time
    };

    localStorage.setItem(details.name , JSON.stringify(details));

    const deleteButton = document.getElementById("del");
    deleteButton.onclick = () => {
        localStorage.removeItem(details.name);
    }

    const editButton = document.getElementById("edit");
    editButton.onclick = () => {
        const storedDetails = JSON.parse(localStorage.getItem(details.name));
        document.getElementById("name").value = storedDetails.name;
        document.getElementById("email").value = storedDetails.email;
        document.getElementById("phone").value = storedDetails.phone;
        document.getElementById("date").value = storedDetails.date;
        document.getElementById("time").value = storedDetails.time;

        localStorage.removeItem(details.name);
    }

}