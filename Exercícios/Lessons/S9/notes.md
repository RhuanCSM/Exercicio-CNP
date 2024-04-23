[Udemy](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/15942550#notes)


## O que é um objeto?
<sub>213. What's an Object?</sub>

Tudo é um ```object```. Eles são ```core data structures``` – a estrutura dos dados principais do documento. 

– Típicamente refletem em entidades do **mundo real** (um botão, um filme, um carro por exemplo). <br>
– Isso se dá pela liberdade na criação do nome do ```object```, permitindo que tragamos a lógica do mundo real para a computação. <br>
– São feitos de ```methods``` e ```properties```. Armazenam ```data``` em ```properties``` e ```actions``` em ```methods```. <br>
– Permitem o agrupamento de dados relacionados e a divisão do projeto em blocos lógicos.

> [!TIP]
> ```Properties``` são ```variables``` em ```objects```. <br>```Methods``` são ```functions``` em ```objects```.

No Javascript temos os **valores primitivos** e os **valores de referência**, que são ```objects```.

– **Primitive**: ```boolean```, ```numbers```, ```strings``` etc. <br>
– **Reference**: Qualquer outra coisa. "{...}", Arrays, Nodes etc. 

## Adicionando, deletando e modificando propriedades
<sub>216. Adding, Modifying & Deleting Properties</sub>

## Caracteres especiais
<sub>217. Special Key Names & Square Bracket Property Access</sub>

## Tipos e ordem de propriedades
<sub>218. Property Types & Property Order</sub>

> [!NOTE]
> Se você tiver um ```object``` e chamá-lo, as ```properties``` manterão a ordem da criação. Contudo, se os nomes das ```properties``` forem ```numbers```, a ordem se ajustará para ordem crescente.

## Acesso às propriedades
<sub>219. Dynamic Property Access & Setting Properties Dynamically</sub>

Posso acessar a ```property``` do ```object``` não apenas com a ```string``` (```exemplo['Oi Leandro'```), mas também com uma 
```variable``` de valor igual ao nome da ```property``` (```exemplo[objComOiLeandro]```).

Você também pode usar os colchetes [] para setar a ```property``` de um ```object``` com uma ```variable```, sendo o valor dela o nome da ```property```. Ex:

```js
const eai = 'Leandro';
const leandersson = {
  [eai]: 'Leandersson', 
  // Aqui o exemplo. O nome não é 'eai', mas 'Leandro'.
  tudo: 'bem',
  'contigo': '?' 
}
```

## Trabalho de teste
<sub>220. Demo App & Shorthand Property Syntax</sub>

.
.
.

## Encadeamento de propriedade e método
<sub>224. Understanding "Chaining" (Property & Method Chaining)</sub>

Simplesmente o meio de acessar ```properties``` e ```methods``` numa única linha:

```example.info.title / Math.random()```


## Espalhar objeto
<sub>225. The Object Spread Operator (...)</sub>

{...} – Esse ```operator``` copia os ```values``` de um ```object``` em outro. Ex:

```js
const person = {name: 'Leandro', age: 30, hobbies: ['Sports', 'Cars']};

const newPerson = {...person};
```

Os ```values``` do ```object``` antigo são copiados, mas os ```objects``` dentro ainda fazem referência. Ou seja, se mudar uma ```array``` no antigo, ainda mudará a do novo. <br>
Para corrigir isso, precisamos reescrever as ```properties``` no ```Spread Operator```, assim:
```js
const newPerson = {...person, age: 29, hobbies: [...person.hobbies]};
```

## assign()
<sub>226. Understanding Object.assign()</sub>













## Projeto da vez:

```js
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];

const renderMovies = (filter = '') => {
	const movieList = document.getElementById("movie-list");
	if (movies.lenght === 0) {
		movieList.classList.remove("visible");
		return;
	} else {
		movieList.classList.add("visible");
	}
	movieList.innerHTML = "";

  const filteredMovies = 
    !filter ? 
    movies : 
    movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
		const movieEl = document.createElement("li");
		let text = movie.info.title + " – ";
		for (const key in movie.info) {
			if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`
			}
		}
    movieEl.textContent = text;
		movieList.append(movieEl);
	});
};

const addMovieHandler = () => {
	const title = document.getElementById("title").value;
	const extraName = document.getElementById("extra-name").value;
	const extraValue = document.getElementById("extra-value").value;
	if (
		title.trim() === "" ||
		extraName.trim() === "" ||
		extraValue.trim() === ""
	) {
		return;
	}
	const newMovie = {
		info: {
			title,
			[extraName]: extraValue,
		},
		id: Math.random(),
	};

	movies.push(newMovie);
	renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
```


