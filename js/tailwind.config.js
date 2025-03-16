tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand:"#FF007F",
            },
            spacing:{
                72:"6.25rem",
            },
            width: {
                'custom-w': '300px', // Define un ancho personalizado
            },
            minWidth: {
                'custom-min-w': '200px', // Define un ancho mínimo personalizado
            },
            minHeight: {
                'custom-min-h': '100px', // Define una altura mínima personalizada
            },
            screens: {
                'xs': '320px', // Define el nuevo breakpoint "xs"
            },
        }
    }
}