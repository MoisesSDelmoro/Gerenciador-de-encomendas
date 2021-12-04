[![License](https://img.shields.io/apm/l/vim-mode?color=blue)](http://badges.mit-license.org)

# C216-L1-1417
Implementação do teste prático de C216-L1 (2021/2).

## Preparação do Banco de Dados

1. Baixe e instale o banco de dados <a href="https://dev.mysql.com/downloads/mysql/"> MySQL Community Server </a>.

2. Baixe e instale o <a href="https://dev.mysql.com/downloads/workbench/">MySQL Workbench</a>.

3. Execute o MySQL Workbench, conecte-se à instância local e crie o schema 'C216-L1'. Para isto, clique com o botão direito na lista de schemas > ```Create Schema... ``` > ```Schema Name: C216-L1``` > ```Character Set: Default Charset``` > ```collation: Default Collation``` > ```Apply``` > ```Apply``` > ```Close```.

4. Execute a seguinte query SQL para verificar que o schema foi criado com sucesso:
```
SELECT * FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'C216-L1';
```
Deve ser retornada uma linha com as informações referentes ao schema.

5. Crie a tabela que armazenará os dados do Teste Prático. Para isto, copie e execute o script abaixo:
```
CREATE TABLE `C216-L1`.`encomenda` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `origem` VARCHAR(45) NULL,
  `destino` VARCHAR(45) NULL,
  `peso` VARCHAR(45) NULL,
  `data` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
````

6. Expanda o schema ```C216-L1```, clique o botão direito em ```Tables```, clique em ```Refresh All```,clique com o botão direito na tabela recém criada, clique em ```Select Rows - Limit 1000``` e verifique se a listagem ocorreu com sucesso (nenhuma linha deve ser retornada).

---
# Preparação do projeto
Baixe e instale o <a href="https://nodejs.org/en/">Node.js<a>

### 1. Clone o repositório 
``` $ git clone https://github.com/MoisesSDelmoro/C216-L1-1417.git ```

### 2. Configurando o BackEnd.

2.1 Entre no diretório do middleware. ``` $ cd C216-L1-1417\middleware ```

2.2. Instale as dependências ```$ npm install ```

2.2. Para executar. ``` $ node index.js ```

### 3. Configurando o FrontEnd.
  
3.1 Entre no diretório do middleware. ``` $ cd C216-L1-1417\frontend ```

3.2. Instale as dependências ``` $ npm install ```

3.3. Para executar. ``` $ npm start ```  


### 4. Configurando o Test via Cypress. 
  
4.1 Entre no diretório do test. ``` $ cd C216-L1-1417\middleware\ ```
  
4.2. Abre e gerenciador de arquivos do Cypress ``` $ npx cypress open ```

4.3. Clique no arquivo "test_index.js", após isso, uma aba do navegador será aberta e executará os testes automaticamente!

---
## 👥 Desenvolvedor

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
### Contato
---
[![Linkedin Badge](https://img.shields.io/badge/-Moises-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/moises-s-delmoro-8747651ba/)](https://www.linkedin.com/in/moises-s-delmoro-8747651ba/)

---
## 📝 License
- **[MIT license](https://choosealicense.com/licenses/mit/)**
