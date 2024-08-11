const enviar = document.querySelector('#enviar')
enviar.addEventListener('click', cadastraremail)

function cadastraremail(){
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value
    const msg = document.querySelector('.msg')
    if(email  == '' ){
        msg.innerHTML ='Informe um <b style="color:red; text-transform:uppercase;">Email e Senha</b> para cadastro!'
    }else if(senha == '') {
        msg.innerHTML ='Informe um <b style="color:red; text-transform:uppercase;">Email e Senha</b> para cadastro!'
    } else{
        msg.innerHTML = `Seu email: <b style="color:green; text-transform:uppercase;">${email}</b> foi cadastrado com sucesso!`
    }
    
}

const check = document.querySelector('#check')
check.addEventListener('click', correto)

function correto(){
    const btn = document.querySelector('#enviar')
    const ccheck = document.querySelector('#check')
    let cheked = ccheck.checked
    if(cheked){
        btn.disabled = false
    } else {
        btn.disabled = true
    }

}