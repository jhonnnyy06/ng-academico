function ShowGeneralMessage(message) {
  console.log(message);
  document.querySelector("#txtMensajeGeneral").innerHTML = message;
  var elem = document.querySelector("#generalMessageModal");
  var instance = M.Modal.getInstance(elem);
  instance.open();
}
