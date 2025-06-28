import React from 'react'

function checkEmail(mail) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
  }

const ValidateMail = (email) => {
    if (email === '') {
        // setError(email, "Enter valid email");
        console.log('email false');
        return false;
      } else if (!checkEmail(email)) {
        // setError(email, "Please enter a valid email address");
        console.log('email false');
        return false;
      } else {
        // setSuccess(email);
      //   console.log('email true');
        return true;
      }
}

export default ValidateMail


