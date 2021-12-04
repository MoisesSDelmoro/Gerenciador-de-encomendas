[![License](https://img.shields.io/apm/l/vim-mode?color=blue)](http://badges.mit-license.org)

# C216-L1-1417
Implementação do teste prático de C216-L1 (2021/2).

---

# :seedling: Preparação do Banco de Dados

:one: Baixe e instale o banco de dados <a href="https://dev.mysql.com/downloads/mysql/"> MySQL Community Server </a>.

:two: Baixe e instale o <a href="https://dev.mysql.com/downloads/workbench/">MySQL Workbench</a>.

:three: Execute o MySQL Workbench, conecte-se à instância local e crie o schema 'C216-L1'. Para isto, clique com o botão direito na lista de schemas > ```Create Schema... ``` > ```Schema Name: C216-L1``` > ```Character Set: Default Charset``` > ```collation: Default Collation``` > ```Apply``` > ```Apply``` > ```Close```.

:four: Execute a seguinte query SQL para verificar que o schema foi criado com sucesso:
```
SELECT * FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'C216-L1';
```
Deve ser retornada uma linha com as informações referentes ao schema.

:five: Crie a tabela que armazenará os dados do Teste Prático. Para isto, copie e execute o script abaixo:
```
CREATE TABLE `C216-L1`.`encomenda` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `origem` VARCHAR(45) NULL,
  `destino` VARCHAR(45) NULL,
  `peso` VARCHAR(45) NULL,
  `data` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
````

:six: Expanda o schema ```C216-L1```, clique o botão direito em ```Tables```, clique em ```Refresh All```,clique com o botão direito na tabela recém criada, clique em ```Select Rows - Limit 1000``` e verifique se a listagem ocorreu com sucesso (nenhuma linha deve ser retornada).

---
# :seedling: Preparação do projeto

:warning: Siga as instruções abaixo passo à passo na ordem descrita.

- Baixe e instale o <a href="https://nodejs.org/en/">Node.js<a> se não tiver instalado.
  

## :one: Clone o repositório 
``` $ git clone https://github.com/MoisesSDelmoro/C216-L1-1417.git ```

## :two: Configurando o BackEnd

- 2.1 Entre no diretório do middleware: ``` $ cd C216-L1-1417\middleware ```

- 2.2. Instale as dependências: ```$ npm install ```

- 2.2. Para executar o middleware: ``` $ node index.js ```

## :three: Configurando o FrontEnd
  
- 3.1 Em um novo terminal, entre no diretório do frontend: ``` $ cd C216-L1-1417\frontend ```

- 3.2. Instale as dependências: ``` $ npm install ```

- 3.3. Para executar o frontend: ``` $ npm start ```  


## :four: Executando os testes automatizados via Cypress. 
  
- 4.1 Em um novo terminal, entre no diretório do test: ``` $ cd C216-L1-1417\middleware\ ```
  
- 4.2. Execute: ``` $ npx cypress open ```, após isso, será aberta uma janela de controle do Cypress.

- 4.3. Clique no nome do arquivo ```test_index.js``` e será aberto uma aba do navegador que executará os testes automaticamente!
  
---
  
## :white_check_mark: Tecnologias Utilizadas
<a href="https://nodejs.org/en/" target="_blank"><img height="42" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" />
<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"><img height="42" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" />
<a href="https://pt-br.reactjs.org/" target="_blank"><img height="42" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank"><img height="42" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" />
<a href="https://www.cypress.io/" target="_blank"><img height="42" src="https://avatars.githubusercontent.com/u/8908513?s=280&v=4" />
<a href="https://www.mysql.com/" target="_blank"><img height="42" src="https://www.blogson.com.br/wp-content/uploads/2020/12/logo-mysql-mysql-logo-png-images-are-download-crazypng-211.png" />
    
---
  
## :collision: Interface Web e Ambiente de testes
<p align="left">
<img height="330" src="https://user-images.githubusercontent.com/57488202/144708618-4fd427f0-d9bc-4117-afa7-f5779a77d29a.png" alt="moisessdelmoro" />
<img height="330" src="https://user-images.githubusercontent.com/57488202/144708674-d766b26b-7ac5-4ac0-bd04-25dda035a398.png" alt="moisessdelmoro" />
</p>
  
---
  
## :wink: Desenvolvedor

<table  style="text-align:center; border: none" >
<tr>
<td align="center"> 
<a href="https://github.com/MoisesSDelmoro" styles="text-align:center;">
<img style="border-radius: 20%;" src="https://github.com/MoisesSDelmoro.png" width="120px;" alt="autor"/><br><strong> Moises Delmoro </strong>
</a>
</td>

</tr>
</table>

---
  
### :calling: Contato
  
[![Linkedin Badge](https://img.shields.io/badge/-Moises-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/moises-s-delmoro-8747651ba/)](https://www.linkedin.com/in/moises-s-delmoro-8747651ba/)

---
## 📝 License
- **[MIT license](https://choosealicense.com/licenses/mit/)**
