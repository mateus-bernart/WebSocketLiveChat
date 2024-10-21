import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirTextoEditor(texto) {
  socket.emit("texto_editor", texto);
}

socket.on("disconnect", (motivo) => {
  console.log(`Servidor desconectado! Motivo: ${motivo}`);
});

export { emitirTextoEditor, selecionarDocumento };
