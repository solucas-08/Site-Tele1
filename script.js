        // Alternar Menu Mobile
        document.getElementById('menuButton').addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.toggle('hidden');
        });
        
        // Rolagem Suave para Ancoragem
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.getElementById('mobileMenu').classList.add('hidden');
                }
            });
        });

    // Enviar Formulário para WhatsApp
    function enviarParaWhatsApp() {
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("phone").value;
    const assunto = document.getElementById("subject").value;
    const mensagem = document.getElementById("message").value;

        if (!nome || !email || !telefone || !assunto || !mensagem){
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

    const numero = "5571985505056"; 
    const texto = `Olá! Me chamo ${nome}.
    E-mail: ${email}
    Telefone: ${telefone}
    Assunto: ${assunto}
    Mensagem: ${mensagem}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }