function addingEventListener() {
  // Select the button (assuming it has an id="button")
  const button = document.getElementById("button");

  // Ensure the button exists before adding an event listener
  if (button) {
    button.addEventListener("click", function () {
      alert("Button was clicked!");
    });
  }
}

// Call the function to bind the event listener
addingEventListener();
