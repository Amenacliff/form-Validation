const username = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordb = document.getElementById('passwordb')
const button = document.querySelector('button')
const fac = document.getElementsByName('checking')
const facb = document.getElementsByName('checkingb')
const facc = document.getElementsByName('checkingc')
const facd = document.getElementsByName('checkingd')
const exclamation = document.getElementsByName('exc')
const exclamationb = document.getElementsByName('excb')
const exclamationc =  document.getElementsByName('excc')
const exclamationd =  document.getElementsByName('excd')
const firstMessage = document.getElementById('messa')
const secondMessage = document.getElementById('messb')
const thirdMessage = document.getElementById('messc')
const fourthMessage = document.getElementById('messd')
button.addEventListener('click' , (event)=>{
    event.preventDefault()

    checkInputs();
})
const checkInputs = ()=>{
    const value = username.value
    const emailValue = email.value
    const typedPassword =  password.value
    const confirmPassword =  passwordb.value
    if(value.length === 0){
       username.className = 'inputafail'
       Array.from(exclamation).forEach((icon)=>{
           icon.id = 'heyred'
       })
       Array.from(fac).forEach((icon)=>{
        icon.id = 'check'
    })
    firstMessage.innerText = 'Username Cannot be Blank'
    }
    else if(value.length > 0){
        username.className = 'inputasucced'
        Array.from(fac).forEach((icon)=>{
            icon.id = 'hey'
        })
        Array.from(exclamation).forEach((icon)=>{
            icon.id = 'excla'
         })
        firstMessage.innerText = ''
        }
        
         if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)){
             Array.from(facb).forEach((icon)=>{
                 icon.id = 'hey'
             })

             Array.from(exclamationb).forEach((icon)=>{
                 icon.id ='exclab'
             })

             email.className ='inputbsucced'

             secondMessage.innerText = ''
         }
         else{
             Array.from(exclamationb).forEach((icon)=>{
                 icon.id = 'exclabred'
             })
             Array.from(facb).forEach((icon)=>{
                icon.id = 'checkb'
            })

            email.className = 'inputbfail'
            secondMessage.innerText = 'Please input a Valid Email Address'
         }

         if(typedPassword.length < 8){
             password.className = 'inputcfail'
             Array.from(exclamationc).forEach((icon)=>{
                icon.id = 'exclacred';
            })

            Array.from(facc).forEach((icon)=>{
                icon.id = 'checkc'
            })

        thirdMessage.innerText = 'Password Must contain 8 characters or more'
         }

         else if(typedPassword.length >= 8){
             password.className = 'inputcsucced'

             Array.from(facc).forEach((icon)=>{
                 icon.id = 'hey'
             })

             Array.from(exclamationc).forEach((icon)=>{
                icon.id = 'exclac';
            })

            thirdMessage.innerText = ''


         }

         if(confirmPassword === typedPassword){
             passwordb.className = 'inputdsucced'

             fourthMessage.innerText = ''
             Array.from(facd).forEach((icon)=>{
                 icon.id = 'hey'
             })

             Array.from(exclamationd).forEach((icon)=>{
                 icon.id  ='exclad'
             })
         }
         else{
             passwordb.className = 'inputdfail'

             fourthMessage.innerText = 'Passowrd is not the same with first Password. Please check again'
             Array.from(facd).forEach((icon)=>{
                 icon.id = 'checkd'
             })

             Array.from(exclamationd).forEach((icon)=>{
                 icon.id = 'excladred'
             })
         }

        }
