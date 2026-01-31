(function () {
  emailjs.init("exe7-XcT4wheT5_VT");
})();

const form = document.getElementById("formContato");
const statusMsg = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_sh2b256",
    "template_2dvy668",
    form
  )
  .then(function () {
    statusMsg.innerText = "Mensagem enviada com sucesso!";
    statusMsg.style.color = "green";
    form.reset();
  })
  .catch(function (error) {
    console.error("Erro:", error);
    statusMsg.innerText = "Erro ao enviar mensagem.";
    statusMsg.style.color = "red";
  });
});
