import { toDoList } from "..";
import { ToDo } from "../classes";

//Rerefencias HTML
const divToDoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const listaFiltros = document.querySelector('.filters');
const anchorFiltros =  document.querySelectorAll('.filtro')


export const crearToDoHtml = (toDo) => {
    const htmlToDo = `
    <li class="${(toDo.completado)? 'completed': ''}" data-id="${toDo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(toDo.completado)? 'checked':''}>
            <label>${toDo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `
    const div = document.createElement('div');
    div.innerHTML = htmlToDo;

    divToDoList.append(div.firstElementChild);
 
    return div.firstElementChild;
}

//Eventos

txtInput.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13 && txtInput.value.length > 0){
        const nuevoToDo = new ToDo(txtInput.value);
        toDoList.agregarToDo(nuevoToDo);
        crearToDoHtml(nuevoToDo);
        txtInput.value = '';
    }
})

divToDoList.addEventListener('click', (event)=>{
    const nombreElemento    = event.target.localName;
    const toDoElemento      = event.target.parentElement.parentElement;     //Accede al elemento superior HTML. ul > li > div
    const toDoId            = toDoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){
        toDoList.marcarCompletado(toDoId);
        toDoElemento.classList.toggle('completed')      //Agrega la clase si no existe y si existe, la quita
    }else if(nombreElemento.includes('button')){
        toDoList.eliminarToDo(toDoId);
        divToDoList.removeChild(toDoElemento);
    }
});

btnBorrarCompletados.addEventListener('click', ()=>{
    toDoList.eliminarCompletados();
    for(let i = divToDoList.children.length-1; i >= 0; i--){
        const elementoLi = divToDoList.children[i];
        if(elementoLi.classList.contains('completed')){
            divToDoList.removeChild(elementoLi);
        }

    }
})

listaFiltros.addEventListener('click', (event)=>{
    const filtro = event.target.text;
    if(!filtro){return;}

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divToDoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break; 
        }
    }
})