const email = document.getElementById('user-email'),
      password = document.getElementById('password'),
      submitBtnForm = document.querySelector('.form__btn');

    


// login
submitBtnForm.addEventListener('click', () => {
    checkInputs()
    let successEmail = email.parentElement.children[2].classList,
        successPassword = password.parentElement.children[2].classList;
  
    if(successEmail == 'success' && successPassword == 'success') {
      submitBtnForm.type = 'submit'  
    }
  });

  function checkInputs() {
    const emailValue = email.value.trim(),
          passwordValue = password.value.trim();


    if(emailValue === '') {
      setErrorFor(email, 'Ошибка: Неверный запрос')
    }
    else if(!isEmail(emailValue)) {
      setErrorFor(email, 'Ошибка: Неверный запрос')
    }
     else {
      setSuccesFor(email)
      email.parentElement.children[2].classList.add('success')
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(password, '')
        password.parentElement.children[2].classList.add('success')
      }
  }

//   view password 
  const view_pass = document.querySelectorAll('.view-pass');
  view_pass.forEach(view => {
    let x = view.parentElement.children[0];
    view.addEventListener('click', () => {
        if (x.type === "password") {
            x.type = "text";
            view.classList.add('showPass')
          } else {
            x.type = "password";
            view.classList.remove('showPass')
          }
    })
  });



  function setErrorFor(input, message,) {
    input.style.border = '1px solid #FE1E25';
    let small = input.parentElement.children[2];
    small.classList.add('error-text');
    small.innerText = message;
  }
  
  function setSuccesFor(input) {
    input.style.border = `1px solid #C8CFDA`;
    let small = input.parentElement.children[2];
    small.classList.remove('error-text');
    small.innerText = '';
  } 
    
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }