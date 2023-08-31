// function obtenerUsuario(id) {
//     let usuario;
//     setTimeout(() => {
//     if (id === 1) {
//     usuario = { id: 1, nombre: 'John Doe' };
//     }
//     }, 2000);
//     return usuario;
//     }
//     const usuario = obtenerUsuario(1);
//     console.log(usuario);


function obtenerUsuario(id){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (id === 1){
                let usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario);
            }else{
                reject(new Error('usuario no encontrado'))
            }
        }, 2000)
    });
}

obtenerUsuario(1)
.then(function(usuario){
    console.log(usuario);
})
.catch(function(error){
    console.error(error);
});
