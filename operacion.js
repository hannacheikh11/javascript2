function operation(a, b, op) {

    switch (op) {
  
      case '+':
        return a + b
        break;
      case '-':
        return a - b
        break;
      case '*':
        return a * b
        break;
      case '/':
        return a / b
        break;
    
    }
  
  }
  console.log(operation(5, 5, '+'));