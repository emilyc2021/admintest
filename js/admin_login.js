const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
    callLogin();

})


function callLogin() {
    if (email.value == "" || password.value == "") {
        alert("請填寫正確資訊");
        return;
    }
    let obj = {};
    obj.email = email.value;
    obj.password = password.value;
    console.log(obj);

    // axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
    //     .then(function (response) {
    //         if (response.data.message == "帳號註冊成功") {
    //             alert("恭喜帳號註冊成功");
    //         } else {
    //             alert("帳號註冊失敗，有可能有人用你的email註冊！");
    //         }
    //         account.value = "";
    //         password.value = "";
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}