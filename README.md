## Utilizando o protocolo WebSockets com a biblioteca Socket.io, alguns conceitos foram utilizados:

- Agrupar clientes em salas do Socket.IO:
  Utilizado método join() para isso, passando como parâmetro o nome da sala na qual colocar o cliente.

- Emitir eventos para uma sala específica:
  Método to(), passando como parâmetro o nome da sala para a qual emitir o evento.

- Enviar um dado de volta para o cliente com Reconhecimento:
  Quando o cliente emite um evento e espera receber dados de volta do servidor, imitando o modelo de requisição-resposta do HTTP. Utilizado função como último parâmetro de emit(), obtemos na função callback do lado do servidor e executada, passando como parâmetro o dado que interessa ao cliente.

- Conexão com o banco de dados MongoDB Atlas
  Utilização de métodos do mongodb para buscar tabelas (findOne) específicas e atualizar (updateOne, $set), com mudanças em tempo real no banco de dados.

- Adicionar, visualizar, deletar elementos em tempo real
- - Com o uso de find() que retorna um cursor (aponta para uma lista de documentos), e transformando e array e enviando de volta para o cliente visualizar.
- - insertOne() para inserir um documento no MongoDB, com verificação se ele já existe. Validando com a propriedade ackowledged, se positivo emite-se um evento de volta para o cliente para adicionar um documento na interface front-end.
- - deleteOne() com a validação da propriedade deletedCount que informa se a operação foi reconhecida pelo banco, e emite um evento de volta para todos os clienttes para realizar as operações necessárias no front-end. (redirecionamento e atualização da página)

## Arquitetura de código

- A pasta public foi para o código frontend (document.html, index.html) emissão de eventos do clientes para o servidor:
- - socket-front-index.js & socket-front-documento.js
- Para manipulação do frontend foi utilizado mediadores desses eventos:
- - documento.js & index.js
- Pasta ./src foi separada para:
- - Conexão com o banco de dados na nuvem MongoDB (Atlas)
- - Execução do servidor (biblioteca nodemon auxiliar)
- - CRUD de documentos
- - Escuta e emissão de eventos do backend (socket-back.js)
