function createVariable() {
    const varName = document.getElementById("variableName").value.trim();
    const varValue = document.getElementById("variableValue").value.trim();
    const varType = document.getElementById("variableType").value;
  
    if (!varName) {
      alert("Please enter a variable name.");
      return;
    }
  
    if (!varValue) {
      alert("Please enter a variable value.");
      return;
    }
  
    let declaration, value, type, scopeInfo, reassignable;
  
    // Simulate variable creation and behavior
    if (varType === "let") {
      declaration = `let ${varName} = "${varValue}";`;
      value = varValue;
      type = typeof varValue;
      scopeInfo = "Block-scoped (available only within the block where declared)";
      reassignable = "Yes";
    } else if (varType === "const") {
      declaration = `const ${varName} = "${varValue}";`;
      value = varValue;
      type = typeof varValue;
      scopeInfo = "Block-scoped (available only within the block where declared)";
      reassignable = "No (cannot be reassigned)";
    } else if (varType === "var") {
      declaration = `var ${varName} = "${varValue}";`;
      value = varValue;
      type = typeof varValue;
      scopeInfo = "Function-scoped (available within the function where declared)";
      reassignable = "Yes";
    }
  
    // Display results
    document.getElementById("declaration").textContent = declaration;
    document.getElementById("value").textContent = value;
    document.getElementById("type").textContent = type;
    document.getElementById("scope").textContent = scopeInfo;
    document.getElementById("reassignable").textContent = reassignable;
  }
  