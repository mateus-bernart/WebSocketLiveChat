import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

export { emitirTextoEditor, selecionarDocumento };
