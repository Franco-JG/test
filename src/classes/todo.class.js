export class ToDo{
    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }

    static fromJSON({tarea, id, completado, creado}){
        const tempToDo      = new ToDo(tarea);
        tempToDo.id         = id;
        tempToDo.completado = completado;
        tempToDo.creado     = creado;

        return tempToDo;
    }

    constructor(tarea){
        this.tarea = tarea;

        this.id         = new Date().getTime(); //312323512
        this.completado = false;
        this.creado     = new Date(); 
    }
}