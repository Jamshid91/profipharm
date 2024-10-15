const user_name = document.getElementById('name'),
      email = document.getElementById('user-email'),
      phone = document.getElementById('phone'),
      text = document.getElementById('text'),
      submitBtnForm = document.querySelector('.form__btn');

    


// login
submitBtnForm.addEventListener('click', () => {
    checkInputs()
    let successName = user_name.parentElement.children[2].classList,
        successEmail = email.parentElement.children[2].classList,
        successPhone = phone.parentElement.children[2].classList,
        successText = text.parentElement.children[2].classList;
  
    if(successName == 'success' && successPhone == 'success' && successEmail == 'success' && successText == 'success') {
      submitBtnForm.type = 'submit'  
    }
  });

  function checkInputs() {
    const user_nameValue = user_name.value.trim(),
          emailValue = email.value.trim(),
          phoneValue = phone.value.trim(),
          textValue = text.value.trim();

    
    
    if(user_nameValue === '') {
        setErrorFor(user_name, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(user_name, '')
        user_name.parentElement.children[2].classList.add('success')
      }
  
    if(phoneValue === '') {
        setErrorFor(phone, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(phone, '')
        phone.parentElement.children[2].classList.add('success')
      }


      if(textValue === '') {
        setErrorFor(text, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(text, '')
        text.parentElement.children[2].classList.add('success')
      }


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
  }



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


  // input mask
$("#phone").inputmask({"mask": "+7(999) 999-99-99"});