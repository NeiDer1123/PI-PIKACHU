
export default function validate(form){
    let errors = {}

    if(!form.name){
        errors.name = "Debes escribir un nombre a tu pokemon"
    }
    if(form.name.length > 10){
        errors.name = 'Debe contener máximo 10 caracteres'
    }
    if(form.life <= 0){
        errors.life = "Debes asignarle un numero"
    }
    if(form.life > 100 ){
        errors.life = "No puede ser mayor a 100"
    }
    if(form.types.length < 2){
        errors.types = "Debe contener por lo menos 2 tipos"
    }
    if(form.types.length > 4){
        errors.types = "Debe contener maximo 4 tipos"
    }

    return errors
}