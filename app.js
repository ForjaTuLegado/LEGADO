// CONTROLADOR DEL FORMULARIO DE LISTA DE ESPERA
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    
    // Obtenemos los valores ingresados por el usuario
    const nombre = document.getElementById('userName').value;
    const correo = document.getElementById('userEmail').value;

    console.log("Nuevo aspirante registrado:", { nombre, correo });

    // PASO PARA EL FUTURO: Aquí es donde conectaremos tu base de datos gratuita.
    
    // Mostrar mensaje de éxito en pantalla
    document.getElementById('waitlistForm').classList.add('hidden');
    document.getElementById('formSuccess').classList.remove('hidden');
});

// SIMULADOR DE MERCADO PAGO (FUTURO PROCESADOR)
function simularBotonMercadoPago(monto, concepto) {
    console.log(`Abriendo pasarela de Mercado Pago por $${monto} para: ${concepto}`);
    // Esto disparará la API de Mercado Pago con tarjeta/transferencia en la fase 2.
}
