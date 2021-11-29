# Masiv Comics

En este proyecto se consume la API de [xkcd](https://xkcd.com/) para mostrar información de comics y luego se puede calificar cada uno de ellos, esa calificación se guarda en el local storage para poder verla cuando se vuelva a mostrar el comic previamente calificado

## Instalación y ejecución

Una vez clonado el repositorio se deben instalar las dependencias con ```npm install```, luego se ejecuta con ```npm run serve``` para poder ver el proyecto vaya al siguiente enlace en su navegador ```http://localhost:8080/```

1. Al abrir el enlace en el navegador se encontrará con la pagina del home con un link para ver un comic de form aleatoria
2. Pagina de comic, aqui encontrará información acerca de un comic aleatorio, el titulo, la imagen, rating y botones anterior, aleatorio y siguiente. Con rating podrá calificar el comic, los botones son para navegar hacia otros comics
3. Pagina de error, esta pagina se muestra cuando se ingresa una url que no existe dentro del sitio o al intentar ver información de un comic que no existe.

A continuación un video con el funcionamiento del sitio:

## Demo

https://user-images.githubusercontent.com/34575757/143793041-5e69bb7d-fe0d-4bc5-9ccd-a20337d4c46f.mp4


# Otras consideraciones

Decidí usar Vue.js + Typescript pues como es sabido este ultimo ayuda en cuanto a las buenas practicas como SOLID y ayuda a una escalabilidad correcta de los proyectos, mas en un framework como Vue.js en el que si no se tiene cuidado se puede volver un problema al momento de trabajar con proyectos que se piensan van a ser grandes y robustos

Las tecnologias usadas fueron 
- Axios
- Tailwind
- Vuex
- Vuex persist
- Vue-lazyload
- Vue star rating

## Axios
Esta es una libreria de la cual no hay mucho que explicar, pues como sabemos permite realizar las peticiones necesarias dntro del proyecto para el funcionamiento del mismo

## Tailwind
Utilicé esta herramienta por su facil personalización, la cual permite que se use para proyectos escalables, su facil implementación y la forma en que permite el desarrollo de temas para los estilos dentro de un proyecto hizo que me decidiera por este framework css

## Vuex
El tema de del store dentro de una aplicación web es muy importante y permite con el apoyo de otros plugin como **Vuex-persist** hace que el store se vuelva poderoso y permita mejorar rendimiento y calidad dentro de los proyectos

## Vuex pesist
Este plugin me permite trabajar en conjunto con vuex para mejorar el rendimiento del estado global de la aplicación web

## Vue-lazyload
Permite la carga de imagenes por demanda

## Vue-star-rating
Para la calificaion de los comics
