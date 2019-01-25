# Definición del producto

Bravest

Esta herramienta surgió como una medida en contra del [Acoso sexual en las aulas](https://es.wikipedia.org/wiki/Acoso_sexual_en_la_educaci%C3%B3n), al que se enfrentan mujeres y las niñas en un ambito escolar.

Las instituciones escolares son espacios que deberían considerarse seguros para todos sus integrantes. Al estar presentes menores de edad, es responsabilidad de las autoridades de la institución garantizar la seguridad del alumnado. Sin embargo, en los últimos años se ha identificado el incremento del acoso sexual en las aulas.
Los centros educativos donde existe alto indice de acoso sexual son las secundarias, seguidos por las primarias, los centros de educación preescolar y por último el nivel medio superior.

A través de esta web app se busca impulsar las denuncias y reportes sobre casos de acoso ante las autoridades escolares correspondientes y si por alguna razón se prefiere hacer una denuncia anónima, utiliza el sistema de cifrado "Bravest" para encriptar mensajes y hacerlos llegar de manera efectiva y sin temor a tener represalias por la denuncia.
Bravest es una web app inspirada en el antiguo sistema de cifrado Cesar, un cifrado por desplazamiento que encripta tus mensajes según el numero de posiciones que desees recorrer las letras, para así conseguir textos ilegibles, amenos que cuentes una "key" que te permitirá descifrar el mensaje oculto.

![imagen acoso](https://www.cop-cv.org/db/cke_uploads/images/Acoso.jpg)


## ¿Quiénes son los principales usuarios del producto?

Mujeres y niñas en edad escolar, que se encuentran en una situación de acoso dentro o fuera de las aulas.

## ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?

Tener una herramienta que facilite las denuncias de caracter sexual ante autoridades, docentes, amigos y/o familiares de manera segura, sin sentir temor a una represalia.

## ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

En casos de acoso sexual, la victima no se siente libre de denunciar por falta de un canal seguro de comunicación, con esta herramienta existe la posibilidad de enviar mensajes de manera secreta a traves de cualquier mensajería. De esta manera se puede dar aviso sobre una situación de peligro latente en las aulas.

















El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre: qué version de JavaScript/ECMAScript, el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.
