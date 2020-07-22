const inputOninput = (input, verify, length, pos) => {
  const name = $("#" + input.id + "_name").html();
  //console.log(name);
  if (verify === "email") {
    const email = email_check(input.value);
    if (email === false) {
      $("#" + input.id + "error").html(name + "輸入有誤，請重新輸入");
      infoVerify[pos] = false;
    } else {
      $("#" + input.id + "error").html("");
      infoVerify[pos] = true;
    }
  } else if (verify === "phone") {
    const phone = phone_check(input.value);
    if (phone === false) {
      $("#" + input.id + "error").html(name + "輸入有誤，請重新輸入");
      infoVerify[pos] = false;
    } else {
      $("#" + input.id + "error").html("");
      infoVerify[pos] = true;
    }
  } else if (verify === "length") {
    const content = length_check(input.value, length);
    if (content === false) {
      $("#" + input.id + "error").html(name + "輸入有誤，請重新輸入");
      infoVerify[pos] = false;
    } else {
      $("#" + input.id + "error").html("");
      infoVerify[pos] = true;
    }
  }
};

const btnClick = (type) => {
  if (type === "back") {
    window.history.back();
  } else if (type === "refresh") {
    window.location.reload();
  } else if (type === "submit1") {
    submit1();
  }
};

const length_check = (value, v_length) => {
  let result = false;
  if (value.length > v_length) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const email_check = (value) => {
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
const phone_check = (value) => {
  let result = false;
  const rule = /^09\d{2}-?\d{3}-?\d{3}$/;
  if (rule.test(value)) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const checkBox = (check, pos) => {
  let checked = $(check).prop("checked");
  infoVerify[pos] = checked;
};

const submit1 = () => {
  let passNum = 0;
  for (let i = 0; i <= infoVerify.length; i++) {
    if (infoVerify[i] === true) {
      passNum++;
    }
  }

  if (passNum === 5) {
    let title = $("#title").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let purpose = $("#purpose").val();
    let text = [title, phone, email, purpose];
    console.log(text + "拿去跑ajax");
  } else {
    alert("請確認所有資料都已填寫，並勾選已詳細閱讀並同意接受相關權利義務");
  }
};

const timer = () => {
  let sec = $("#sec").html();
  console.log(sec);
  if (sec != 0) {
    sec = sec - 1;
    $("#sec").html(sec);
  }
  setTimeout("timer()", 1000);
};
