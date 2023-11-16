import { ToDo } from "./todo.class";

export class ToDoList{
    constructor(){
        // this.toDos = [];
        this.cargarLocalStorage();

    }

    //Metodos
    agregarToDo(toDo){
        this.toDos.push(toDo);
        this.guardarLocalStorage();
    }

    eliminarToDo(id){
        this.toDos = this.toDos.filter(elemento => elemento.id != id)   //filtra el arreglo de toDos y regresa una copia del arreglo
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for(const elemento of this.toDos){
            // console.log(id, toDo.id);       //para ver los diferentes tipos de datos que tiene el id de toDo
            if(elemento.id == id){
                elemento.completado = !elemento.completado
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.toDos = this.toDos.filter(elemento => !elemento.completado)    //regresa un arreglo con los toDos no completados
        this.guardarLocalStorage();
        
    }

    guardarLocalStorage(){
        localStorage.setItem('toDo',JSON.stringify(this.toDos));
    }

    cargarLocalStorage(){
        // if(localStorage.getItem('toDo')){
        //     this.toDos = JSON.parse(localStorage.getItem('toDo'));
        // }else{
        //     this.toDos = [];
        // }
        this.toDos = (localStorage.getItem('toDo'))
                        ? JSON.parse(localStorage.getItem('toDo'))
                        : [];
        // this.toDos = this.toDos.map(obj => ToDo.fromJSON(obj));
        this.toDos = this.toDos.map(ToDo.fromJSON);
    }

}