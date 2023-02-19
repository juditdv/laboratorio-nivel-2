const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario campo');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	clave: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	}




const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre':
	if(expresiones.nombre.test(e.target.value)){
        document.getElementById('grupo_nombre').classList.remove('formulario_grupo-incorrecto');
        document.getElementById('grupo_nombre').classList.add('formulario_grupo-correcto');
        document.querySelector('#grupo_nombre i').classList.remove('error');
        document.querySelector('#grupo_nombre i') .classList.add ('acierto');
    } else {
        document.getElementById('grupo_nombre') .classList.add('formulario_grupo-incorrecto')
    }
    }}



function mostrarMensaje ()
{
    alert ('Formulario enviado correctamente');
}