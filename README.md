### Backend para e-commerce

> Este projeto tem como objetivo ajudar meus amigos que estão aprendendo NodeJS com TypeScript

#### Iniciando projeto

- Inicie o projeto com o instalador de pacotes de sua preferencia

##### npm
```=
npm init
```

##### yarn
```
yarn init
```
<hr />

#### Adicionando dependencias

- Adicione as dependencias que irá utilizar no projeto ( você pode adicionar ou remover outras caso necessario )

Para adicionar dependencias use:
##### npm
> npm install *nome da dependencia*

##### yarn
> yarn add *nome da dependencia*

<hr />

#### Types nas dependencias

Normalmente as dependencias mais famosas ja vem com suporte a TypeScript nativo

Caso não possua essa tipagem, é necessario criar as tipagens para aquela dependencia
 
> Por sorte a comunidade quase sempre ja possui as tipagens prontas para essas dependencias, normalmente basta adicionar ao projeto a dependencia @types/*nome da dependencia*


- Para projetos Node Typescript recomendo sempre utilizar as seguintes dependencias
  - typescript
  - @types/node
  - ts-node-dev
  - ts-config-paths

> Normalmente essas dependencias que tem relação com TypeScript devem ser colocadas como dependencias de desenvolvimentos já que elas não são utilizadas quando o após a build que transforma o TS em JS

<hr />

#### Eslint

- O Eslint nada mais é do que uma ferramenta que busca padronizar o codigo baseado nas configurações presentes no seu JSON
- Ele vai reforçar para que o padrão escolhido seja mantido durante todo o codigo

##### Iniciando ESLINT no projeto

- Para adicionar o Eslint no projeto basta utilizar

> npm init @eslint/config

> É recomendado baixar a extensão do Eslint no Vscode e habilitar o formatar ao salvar, assim sempre que seu codigo for salvo o Eslint tentara corrigir os erros mais simples presentes no seu codigo
