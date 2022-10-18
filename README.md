### Backend para e-commerce

#### Iniciando projeto

- Inicie o projeto com o instalador de pacotes de sua preferencia

##### npm
```=
npm init
```

##### yarn
```
yarn
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

