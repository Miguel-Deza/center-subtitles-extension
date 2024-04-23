window.onload = function() {
    // Obtener el elemento con el id "ejoy"
    setTimeout(function() {
        // Obtener el elemento con el id "ejoy"
        var ejoyElement = document.getElementById("ejoy");

        // Verificar si se encontró el elemento
        if (ejoyElement) {
            // Establecer la posición en 300px desde abajo
            ejoyElement.style.bottom = "400px";
        } else {
            console.log("No se encontró el elemento con id 'ejoy'.");
        }
    }, 3000);

    function fixSubtitlePosition() {
        // Selecciona todos los elementos con la clase 'ytp-caption-segment'
        var subtitles = document.querySelectorAll('.ytp-caption-segment');
        
        // Itera sobre cada subtítulo
        subtitles.forEach(function(subtitle) {
            // Modifica el estilo para fijar la posición deseada
            subtitle.style.position = 'fixed';
            // Calcula las coordenadas para posicionar el subtítulo en el centro
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var subtitleWidth = subtitle.offsetWidth;
            var subtitleHeight = subtitle.offsetHeight;

            var topPosition = ((windowHeight - subtitleHeight) / 2) - 40;
            var leftPosition = (windowWidth - subtitleWidth) / 2;

            subtitle.style.top = topPosition + 'px';
            subtitle.style.left = leftPosition + 'px';
    
    // Puedes ajustar otras propiedades de estilo según sea necesario // Cambia esto según tu necesidad
            // Puedes ajustar otras propiedades de estilo según sea necesario
        });
    }

    // Llama a la función para fijar la posición de los subtítulos
    fixSubtitlePosition();

    // Observa cambios en el DOM y vuelve a llamar a la función si es necesario
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                fixSubtitlePosition();
            }
        });
    });

    // Configura el observador para que observe cambios en el DOM
    var observerConfig = { childList: true, subtree: true };
    observer.observe(document.body, observerConfig);
};
