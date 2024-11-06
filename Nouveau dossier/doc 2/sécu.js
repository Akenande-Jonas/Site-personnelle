function checkLogin() {
    // Informations de connexion prédéfinies
    const correctUsername = "admin";
    const correctPassword = "1234";

    // Récupération des valeurs entrées par l'utilisateur
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Vérification des informations de connexion
    if (username === correctUsername && password === correctPassword) {
        alert("Connexion réussie !");
        window.location.href = "dashboard.html";  // Redirection vers une autre page après connexion
        return false;  // Empêche l'envoi du formulaire
    } else {
        document.getElementById("error-message").innerText = "Nom d'utilisateur ou mot de passe incorrect";
        return false;  // Empêche l'envoi du formulaire
    }
}
