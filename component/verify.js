export const length_check = (value, v_length) => {
  let result = false;
  if (value.length > v_length) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

export const email_check = (value) => {
  let result = false;
  const emailRegxp = /[\w-.]+@[\w-]+(.[\w_-]+)+/;
  if (value === "") {
    result = false;
  } else if (value.length > 5) {
    if (emailRegxp.test(value) !== true) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
};

/**電話驗證**/
export const phone_check = (value) => {
  let result = false;
  const rule = /^09\d{2}-?\d{3}-?\d{3}$/;
  if (rule.test(value)) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
