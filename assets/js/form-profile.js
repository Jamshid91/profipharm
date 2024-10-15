const user_name = document.getElementById('name'),
      last_name = document.getElementById('last-name'),
      first_name = document.getElementById('first-name'),
      upload_file = document.getElementById('upload-file'),
      phone = document.getElementById('phone'),
      email = document.getElementById('user-email'),
      city = document.getElementById('city'),
      pharmacy = document.getElementById('pharmacy'),
      job = document.getElementById('job'),
      hobby = document.getElementById('hobby'),
      user_avatar = document.querySelector('.profile .user-avatar'),
      password = document.getElementById('password'),
      password_repeat = document.getElementById('password-repeat'),
      saveBtnForm = document.querySelector('.personal.form__btn'),
      saveBtnForm_safety = document.querySelector('.safety.form__btn');

   
      
// safety
saveBtnForm_safety.addEventListener('click', () => {
    checkInputsSafety()
    let successPassword = password.parentElement.children[2].classList,
        successPassword_repeat = password_repeat.parentElement.children[2].classList;
  
    if(successPassword == 'success' && successPassword_repeat == 'success') {
      saveBtnForm_safety.type = 'submit'  
    }
  });

  function checkInputsSafety() {
    const passwordValue = password.value.trim(),
          password_repeatValue = password_repeat.value.trim();


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

// personal
saveBtnForm.addEventListener('click', () => {
    checkInputs()
    let successName = user_name.parentElement.children[2].classList,
        successLast_name = last_name.parentElement.children[2].classList,
        successFirst_name = first_name.parentElement.children[2].classList,
        successCity = city.parentElement.children[2].classList,
        successPhone = phone.parentElement.children[2].classList,
        successPharmacy = pharmacy.parentElement.children[2].classList,
        successEmail = email.parentElement.children[2].classList,
        successHobby = job.parentElement.children[2].classList,
        successJob = hobby.parentElement.children[2].classList;
  
    if(successName == 'success' && successLast_name == 'success' && successFirst_name == 'success' && successPhone == 'success' && successCity == 'success' && successPharmacy == 'success' && successEmail == 'success' && successHobby == 'success' && successJob == 'success') {
      saveBtnForm.type = 'submit'  
    }
  });

  function checkInputs() {
    const user_nameValue = user_name.value.trim(),
          last_nameValue = last_name.value.trim(),
          first_nameValue = first_name.value.trim(),
          cityValue = city.value.trim(),
          phoneValue = phone.value.trim(),
          pharmacyValue = pharmacy.value.trim(),
          emailValue = email.value.trim(),
          jobValue = job.value.trim(),
          hobbyValue = hobby.value.trim();

    
    
    if(user_nameValue === '') {
        setErrorFor(user_name, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(user_name, '')
        user_name.parentElement.children[2].classList.add('success')
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

    if(jobValue === '') {
        setErrorFor(job, 'Ошибка: Неверный запрос',)
    } else {
        setSuccesFor(job, '')
        job.parentElement.children[2].classList.add('success')
      }
    
    if(hobbyValue === '') {
        setErrorFor(hobby, 'Ошибка: Неверный запрос',)
    } 
    else {
        setSuccesFor(hobby, '')
        hobby.parentElement.children[2].classList.add('success')
      }
    
      if(phoneValue === '') {
          setErrorFor(phone, 'Ошибка: Неверный запрос',)
      } 
      else {
          setSuccesFor(phone, '')
          phone.parentElement.children[2].classList.add('success')
        }
  }

  upload_file.addEventListener('change', (e) => {
    if(e.target.files.length > 0) {
    let src = URL.createObjectURL(e.target.files[0]);
      upload_file.nextElementSibling.children[1].textContent = e.target.files[0].name;
      // let addAvatar = e.target.parentElement.children[1];
      user_avatar.src = src;
      console.log(user_avatar)
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
$("#phone").inputmask({"mask": "+7(999) 999-99-99"});


// tab profile
$(document).ready(function() {
  $('.profile-tab').hide();
  $('.profile-tab:first-child').show();
  $('.profile-tab-btn').click(function() {
    let pageInfo = $(this).attr('data-profile');
    $('.profile-tab').hide();
    $('.' + pageInfo).show();
  })
});