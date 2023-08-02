document.getElementById('btn-submit').addEventListener('click',function(){
    // s1
    // console.log('Submit button click')
    // s2
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    // console.log(email);
    // s3

    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;
    // console.log(password);

    // s4
    if(email=== 'ss@a.com' && password ==='ss'){
        console.log('valid user');
    }
    else{
        alert('invalid user');
    }
} )