const fio = document.getElementById('fio'),
      city = document.getElementById('city'),
      job = document.getElementById('job'),
      phone = document.getElementById('phone'),
      email = document.getElementById('user-email'),
      submitBtnForm = document.querySelector('.form__btn');

    


// login
submitBtnForm.addEventListener('click', () => {
    checkInputs()
    let successName = fio.parentElement.children[2].classList,
        successCity = city.parentElement.children[2].classList,
        successjob = job.parentElement.children[2].classList,
        successphone = phone.parentElement.children[2].classList,
        successEmail = email.parentElement.children[2].classList;
  
    if(successName == 'success' && successjob == 'success' && successphone == 'success' && successCity == 'success' && successEmail == 'success') {
      submitBtnForm.type = 'submit'  
    }
  });

  function checkInputs() {
    const fioValue = fio.value.trim(),
          cityValue = city.value.trim(),
          jobValue = job.value.trim(),
          phoneValue = phone.value.trim(),
          emailValue = email.value.trim();

    
    
    if(fioValue === '') {
        setErrorFor(fio, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(fio, '')
        fio.parentElement.children[2].classList.add('success')
      }
  
    if(jobValue === '') {
        setErrorFor(job, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(job, '')
        job.parentElement.children[2].classList.add('success')
      }


      if(phoneValue === '') {
        setErrorFor(phone, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(phone, '')
        phone.parentElement.children[2].classList.add('success')
      }
  
    if(cityValue === '') {
        setErrorFor(city, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(city, '')
        city.parentElement.children[2].classList.add('success')
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