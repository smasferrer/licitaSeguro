function Contacto() {
    return (
        <section className="max-w-lg mx-auto p-6 mt-24">
            <h2 className="text-3xl font-semibold mb-6 text-center text-white">¿Tienes alguna duda o sugerencia?</h2>
            <p className="text-white mb-10 text-center">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad. Estamos aquí para ayudarte en lo que necesites.
            </p>
            {/* Contacto de ejemplo */}
            <form className="flex flex-col gap-6">
                <div>
                    <label htmlFor="nombre" className="block text-sm mb-2 text-white">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        className="w-full p-2 border border-gray-300/30 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label htmlFor="asunto" className="block text-sm mb-2 text-white">Asunto</label>
                    <input
                        type="text"
                        id="asunto"
                        className="w-full p-2 border border-gray-300/30 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        placeholder="Motivo de tu mensaje"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                    Enviar
                </button>
            </form>
        </section>
    )
}

export default Contacto