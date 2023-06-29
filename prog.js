const pass = document.querySelector("#password"); 
const confPass = document.querySelector("#confirmed-password"); 

const bothPasses = [pass, confPass];

confPass.addEventListener('click', function(){
    for (thisPass of bothPasses){
        thisPass.addEventListener('blur', function() {
            if (pass.value !== confPass.value){
                pass.setCustomValidity("Passwords do not match."); 
                confPass.setCustomValidity("Passwords do not match."); 
                pass.classList.add('password-mismatch');
                confPass.classList.add('password-mismatch');
            } else {
                pass.setCustomValidity(""); 
                pass.classList.remove('password-mismatch');
                confPass.classList.remove('password-mismatch');
                confPass.setCustomValidity(""); 
            }
        });
    }
}, {once: true}); 