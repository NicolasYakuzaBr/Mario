// Adicione um evento de clique ao botão de hamburguer para mostrar/ocultar o menu de navegação
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuToggle.classList.toggle("open");
});
