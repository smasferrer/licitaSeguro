import logo from '../../assets/img/licitaseguro-logo.svg'

function Ayuda() {
    return (
        <section className="max-w-3xl mx-auto p-6 mt-24">
            {/* Página de ejemplo */}
            <h2 className="text-3xl font-semibold text-center text-white mb-20">¿Necesitas ayuda?</h2>
            <p className="text-white text-xl mb-10 text-justify italic">
                En LicitaSeguro estamos comprometidos con facilitar el acceso a la información sobre licitaciones públicas de forma clara, rápida y sin complicaciones. Sabemos que en ocasiones pueden surgir dudas, por eso hemos creado esta sección para ayudarte a resolverlas.
            </p>
            <p className="text-white text-xl mb-10 text-justify italic">
                Aquí podrás encontrar información útil sobre cómo utilizar nuestra plataforma, cómo buscar licitaciones específicas, aplicar filtros por estado o fecha de cierre, y qué significan los distintos campos que aparecen en cada resultado. Nuestro objetivo es que aproveches al máximo esta herramienta y encuentres rápidamente lo que estás buscando.
            </p>
            <p className="text-white text-xl mb-10 text-justify italic">
                Si ya exploraste esta sección y aún tienes inquietudes, no te preocupes. Puedes dirigirte a nuestra sección de contacto, donde estaremos encantados de recibir tus consultas o sugerencias. Tu opinión es muy importante para nosotros, ya que nos permite seguir mejorando.
            </p>
            <p className="text-white text-xl mb-10 text-justify italic">
                Recuerda que LicitaSeguro no publica licitaciones, sino que se alimenta de datos oficiales para presentarlos de forma más amigable y eficiente. Nuestro propósito es mejorar la experiencia de búsqueda que muchas veces puede ser confusa o poco accesible en otras plataformas.
            </p>
            <img
                src={logo}
                alt="Logo Licitaseguro"
                className='w-40 mt-20 mb-40'
            />
        </section>
    )
}

export default Ayuda