const TOKEN ='6363004395:AAGQtF2J2qSz5p4SoIACz6HPfbfHVCHw8-4',
    CHAT_ID ='-1002062693155',
    URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`,
    form = document.querySelector('#form');

form.addEventListener('submit',function (e){
    e.preventDefault();
   let message = `<b>Name:</b> ${this.name.value} \n`;
   message += `<b>Email:</b> ${this.email.value} \n`;
   message += `<b>Tell:</b> ${this.tell.value} \n`;
   message += `<b>Message:</b> ${this.message.value} \n`;


   axios.post(URL_API,{
       chat_id:CHAT_ID,
       parse_mode:'html',
       text:message
   }).then((res) => {
     this.name.value = '';
     this.email.value = '';
     this.tell.value ='';
     this.message.value = '';
   }).catch((err) => {
       console.log("error")
   }).finally(() => {
       console.log("end")
   })

})

