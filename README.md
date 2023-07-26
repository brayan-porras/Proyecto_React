# Proyecto_React
1. En el proyecto se desea hacer la búsqueda de canciones por medio de un filtro de búsqueda con el id de las canciones o el titulo. 
2. como primera parte se instala el node.js y al clonar el repositorio.
Debemos instalar las dependencias para poder hacer uso de esta con el comando de npm install para poder ejecutarlo 
3. se crea una carpeta para los hooks y un archivo useSongs.js que es donde se importan las dependencias necesarias como la de axios que se instala esta para hacer peticiones al contenido del enlace http. 
-Se procede a definir el gancho personalizado en este caso use songs.
-se crea una constante que inicia como un arreglo vacío. 
-se crea una función para obtener las canciones y para pode acceder a la información se deben configurar los orígenes de las peticiones y habilitar los cors y para poder hacer que pueda dar respuesta y obtener la información del servidor ingresamos a esta pagina:

cors-anywhere.herokuapp.com/corsdemo 

y daremos clic en el botón de “request tempory acces to the demo server” cuando vallamos a ejecutar la aplicación con el “npm start” , lo que se realiza es que las peticiones las haga a este servidor intermedio y de hay realice las peticiones al servidor principal ya que nos generaba un error por Access-Control-Origin lo que nos impide que el navegador permita solicitudes desde un dominio diferente a la API, y sea posible visualizar la informacion. 
