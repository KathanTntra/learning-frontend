function processObject() {
    const objectInput = document.getElementById("objectInput").value.trim();
  
    if (!objectInput) {
      alert("Please enter object properties.");
      return;
    }
  
    // Convert the input into an object
    const object = {};
    const properties = objectInput.split(",").map((item) => item.trim());
  
    properties.forEach((property) => {
      const [key, value] = property.split(":").map((item) => item.trim());
      object[key] = value;
    });
  
    // Perform operations on the object
    const originalObject = object;
    const objectKeys = Object.keys(object).join(", ");
  
    // Display results
    document.getElementById("originalObject").textContent = JSON.stringify(originalObject, null, 2);
    document.getElementById("objectKeys").textContent = objectKeys;
  }
  