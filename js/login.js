function login(){
    const login = document.getElementById("inputLogin");
    const senha = document.getElementById("inputSenha");

    if (login.trim == "admin" && senha.trim == "admin")  {

        location.href = "./pages/home.html";
    }else{
        alert = "Usuario Incorreto!";
    }
}