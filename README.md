<h1 align="center">:file_cabinet: Lista de Tarefas</h1>

## :memo: Descrição
Projeto criado para a matéria de Códigos de Alta Performance Web. Um site para verificar a lista de tarefas diárias.

## :books: Funcionalidades
* <b>Funcionalidades </b>: Nesse site o usuário vai fazer o login ou cadastro, adicionar ou remover tarefas e organiza-las em ordem para faze-las. 

## :wrench: Tecnologias utilizadas
* HTML
* CSS
* Javascript
* Node.JS

## 🛰️ API's
* <b>User API </b>: ela vai ser usada para fazer e verificar login, cadastrar novos usuários, e modificar seus dados.
* <b>Colections API </b>: vai ser usada para criar as coleções da tarefas, além de poder modifica-las, exclui-las e adiciona-las.
* <b>Tasks API </b>: vai ser usada para criar as tarefas, além de modifica-las, exclui-las e adiciona-las.

## :soon: Implementação futura
* Projeto poderá conter algumas alterações de melhorias.

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/joaoandrade07">
        <sub>
          <b>João Andrade</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :receipt: Mockup/Storyboard
* [Figma](https://www.figma.com/file/W0sRFGu09D7IIdMAVphABo/Lista-de-Tarefas?node-id=0%3A1&t=mriJbRgRdLFVJeg4-1) In Progress

## :game_die: Estrutura de dados
- Usuário
  - Criar, apagar e modificar cadastro, e fazer login
  
```s
  user= {
		name : string,
		surname : string,
		email : string,
		password : string
	}
```

- Coleções
  - Criar, apagar e modificar coleções de tarefas
  
```s
  collections= {
		title : string,
		id_collections : int,
		email : string
	}
```

- Tarefas
  - Criar, apagar, modificar e marcar como concluídas as tarefas
  
```s
  tasks= {
		item: string,
		id_tasks: int,
		situation: boolean,
		id_collections: int
	}
```

## :dart: Status do projeto
* Em andamento.
