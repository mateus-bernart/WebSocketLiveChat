Utilizando WebSockets, alguns conceitos foram utilizados:

- Agrupar clientes em salas do Socket.IO:
  Utilizado método join() para isso, passando como parâmetro o nome da sala na qual colocar o cliente.

- Emitir eventos para uma sala específica:
  Método to(), passando como parâmetro o nome da sala para a qual emitir o evento.

- Enviar um dado de volta para o cliente com Reconhecimento:
  Quando o cliente emite um evento e espera receber dados de volta do servidor, imitando o modelo de requisição-resposta do HTTP. Utilizado função como último parâmetro de emit(), obtemos na função callback do lado do servidor e executada, passando como parâmetro o dado que interessa ao cliente.

- Conexão com o banco de dados MongoDB Atlas
  Utilização de métodos do mongodb para buscar tabelas (findOne) específicas e atualizar (updateOne, $set), com mudanças em tempo real no banco de dados.
