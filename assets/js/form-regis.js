const fio = document.getElementById('name'),
      last_name = document.getElementById('last-name'),
      first_name = document.getElementById('first-name'),
      city = document.getElementById('city'),
      pharmacy = document.getElementById('pharmacy'),
      email = document.getElementById('user-email'),
      password = document.getElementById('password'),
      password_repeat = document.getElementById('password-repeat'),
      upload_file = document.getElementById('upload-file'),
      submitBtnForm = document.querySelector('.form__btn');

    


// login
submitBtnForm.addEventListener('click', () => {
    checkInputs()
    let successName = fio.parentElement.children[2].classList,
        successLast_name = last_name.parentElement.children[2].classList,
        successFirst_name = first_name.parentElement.children[2].classList,
        successCity = city.parentElement.children[2].classList,
        successPharmacy = pharmacy.parentElement.children[2].classList,
        successEmail = email.parentElement.children[2].classList,
        successPassword = password.parentElement.children[2].classList,
        successPassword_repeat = password_repeat.parentElement.children[2].classList;
  
    if(successName == 'success' && successLast_name == 'success' && successFirst_name == 'success' && successCity == 'success' && successPharmacy == 'success' && successEmail == 'success' && successPassword == 'success' && successPassword_repeat == 'success') {
      submitBtnForm.type = 'submit'  
    }
  });

  function checkInputs() {
    const fioValue = fio.value.trim(),
          last_nameValue = last_name.value.trim(),
          first_nameValue = first_name.value.trim(),
          cityValue = city.value.trim(),
          pharmacyValue = pharmacy.value.trim(),
          emailValue = email.value.trim(),
          passwordValue = password.value.trim(),
          password_repeatValue = password_repeat.value.trim();

    
    
    if(fioValue === '') {
        setErrorFor(fio, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(fio, '')
        fio.parentElement.children[2].classList.add('success')
      }
  
    if(last_nameValue === '') {
        setErrorFor(last_name, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(last_name, '')
        last_name.parentElement.children[2].classList.add('success')
      }


      if(first_nameValue === '') {
        setErrorFor(first_name, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(first_name, '')
        first_name.parentElement.children[2].classList.add('success')
      }
  
    if(cityValue === '') {
        setErrorFor(city, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(city, '')
        city.parentElement.children[2].classList.add('success')
      }
  
    if(pharmacyValue === '') {
        setErrorFor(pharmacy, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(pharmacy, '')
        pharmacy.parentElement.children[2].classList.add('success')
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

    if(passwordValue === '') {
        setErrorFor(password, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(password, '')
        password.parentElement.children[2].classList.add('success')
      }
    
    if(password_repeatValue === '') {
        setErrorFor(password_repeat, 'Ошибка: Неверный запрос',)
    } 
    else if(passwordValue != password_repeatValue) {
        setErrorFor(password_repeat, 'Ошибка: Не соответствует паролю',)
    }
    else {
        setSuccesFor(password_repeat, '')
        password_repeat.parentElement.children[2].classList.add('success')
      }
  }

  upload_file.addEventListener('change', (e) => {
    if(e.target.files.length > 0) {
    let src = URL.createObjectURL(e.target.files[0]);
      upload_file.nextElementSibling.children[1].textContent = e.target.files[0].name
  }
});

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


  // input mask
// $("#user-phone").inputmask({"mask": "+7(999) 999-99-99"});