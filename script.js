var type = new Typed('.typing-text',{
    strings : [ 'Front-end Developer', 'Competitive Programmer','Web Designer'],
    typeSpeed: 120,
    loop:true,
});

var type = new Typed('.greeting-type',{
    strings : [ 'Hello', 'Hi', 'Namaste'],
    typeSpeed: 120,
    loop:true,
});

function show_alert() {
    alert("Thank You")
}

function show_msg() {
    var Name = document.getElementById('name');
    var Email = document.getElementById('email')
    var Message = document.getElementById('Message')
    const msg = document.getElementById('msg')

    setTimeout(() => {
        Name.value = '';
        Email.value = '';
        Message.value = '';
    }, 2000);

    msg.style.display = 'block';

    setTimeout(() => {
        msg.style.display = 'none'
    }, 4000);
}