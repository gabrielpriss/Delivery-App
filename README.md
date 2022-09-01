# App de Delivery!

Esse projeto foi desenvolvido em grupo durante o curso da Trybe e fiquei responsável principalmente pela parte de back-end. O objetivo é desenvolver um site para uma distribuidora de cervejas que está se informatizando! 🚀 "O negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery." 🍺 Nessa aplicação, nosso grupo foi responsável por criar e integrar tanto o back-end quanto o front-end. O projeto não é só codar, mas também é trabalhar em equipe!

<details>
  <summary><strong>Funções</strong></summary><br />
      - Acesso via login: tanto clientes como pessoas vendedoras, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que    compra da lista de produtos; <br /> (2) A pessoa vendedora, que aprova, prepara e entrega; <br /> (3) A pessoa administradora, que gerencia quem usa o aplicativo;<br />
      - Comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;<br />
      - Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;<br />

</details>

<br />

<details>
  <summary><strong>Rodando o projeto</strong></summary><br />

  1. Clone o repositório
    * `git clone git@github.com:gabrielpriss/Delivery-App.git`.
    * Entre na pasta do repositório que você acabou de clonar:
      * `cd Delivery-App.git`

  2. Instale as dependências
    * `npm install`
  
  3. Variáveis de ambiente
    
 - Você precisa configurar as variáveis globais do MySQL. 

 - Use suas configurações para as variáveis de ambiente nesse arquivo:

  `./backend/.env-example`

  ```
  NODE_ENV=development
  PORT=3003
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_USER=root
  MYSQL_PASSWORD=root
  MYSQL_DB_NAME=delivery-app
  EVAL_ALWAYS_RESTORE_DEV_DB=true

  ```

  - É essencial usar essas 3 variáveis no arquivo acima:
	* `host: process.env.DB_HOST`;
	* `user: process.env.DB_USER`;
	* `password: process.env.DB_PASS`.

  4. Renomear o  arquivo das variaveis de .env-example para .env
  
  5. Iniciar os serviços MySQL
	* Exemplo:

	* sudo service mysql start

  6. Iniciar a aplicação

	* Na pasta raiz rodar o script responsável por iniciar o front e o back-end
	* `npm start`
  * O aplicativo será iniciado na url http://localhost:3000/
  
  7. Registrar seu usuário e logar  <br />
        <strong>Fluxo Pessoa Administradora</strong> <br />
      - Para acessar como admin utilize o email `adm@deliveryapp.com` e senha `--adm2@21!!--`
      
        <strong>Fluxo Comum</strong> <br />
      - Para acessar como pessoa comum registre e logue
  * Seu usuário deve ter 12 caracteres
  * Seu email deve ser válido
  * Sua senha deve ter 6 caracteres

</details>

<details>
  <summary><strong>Obrigado</strong></summary><br />

 - Reforço que fiquei principalmente responsável pela aplicação back-end:

  `./backend/src/*`

</details>
