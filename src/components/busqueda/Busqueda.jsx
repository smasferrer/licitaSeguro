import { useState, useEffect } from 'react'
import Modal from '../modal/Modal'
import rawData from '../../data/data.json'

function Busqueda() {
    const [query, setQuery] = useState('')
    const [filtered, setFiltered] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const resultsPerPage = 10
    const [estadoFiltro, setEstadoFiltro] = useState('')
    const [fechaFiltro, setFechaFiltro] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [licitacionSeleccionada, setLicitacionSeleccionada] = useState(null)

    useEffect(() => {
        const resultados = rawData.Listado.filter(item => {
            const coincideTexto = item.Nombre.toLowerCase().includes(query.toLowerCase())
            const coincideEstado = estadoFiltro === '' || String(item.CodigoEstado).trim().toLowerCase() === estadoFiltro.trim().toLowerCase()
            const coincideFecha = fechaFiltro === '' || new Date(item.FechaCierre).toISOString().slice(0, 10) === fechaFiltro
            return coincideTexto && coincideEstado && coincideFecha
        })

        setFiltered(resultados)
        setCurrentPage(1)
    }, [query, estadoFiltro, fechaFiltro])

    const totalPages = Math.ceil(filtered.length / resultsPerPage)
    const startIndex = (currentPage - 1) * resultsPerPage
    const currentResults = filtered.slice(startIndex, startIndex + resultsPerPage)

    return (
        <>
            <section className="max-w-4xl mx-auto mt-20 p-4">
                <h1 className="text-2xl sm:text-4xl font-normal text-center mb-4">
                    Busca acceso claro y directo a licitaciones públicas, mejorando la búsqueda desde <span className='font-semibold'>Mercado Público</span>.
                </h1>

                <div className="w-full lg:min-w-[768px] lg:w-[900px] text-sm mx-auto mt-10">
                    <h4 className='text-lg'>Filtro de búsqueda:</h4>
                    <div className="flex flex-col sm:flex-row sm:justify-start gap-4 mt-1">
                        {/* Input de búsqueda */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Escribe tu búsqueda..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full text-md border-b border-gray-300/30 py-2 pr-12 focus:outline-none"
                            />
                            <button
                                onClick={() => { }}
                                className="absolute inset-y-0 right-2 md:right-0 flex items-center cursor-pointer transition-colors text-fuchsia-400 rounded-r-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                        {/* Input estado */}
                        <div className="relative w-full sm:w-auto">
                            <select
                                id="estados"
                                value={estadoFiltro}
                                onChange={(e) => setEstadoFiltro(e.target.value)}
                                className="appearance-none text-md border-b border-gray-300/30 py-2 pr-10 pl-2 focus:outline-none cursor-pointer w-full bg-transparent text-white"
                            >
                                <option value="">Todos los estados</option>
                                {Array.from(new Set(
                                    rawData.Listado.map(item => String(item.CodigoEstado).trim().toLowerCase())
                                ))
                                    .sort()
                                    .map((estado, i) => (
                                        <option key={i} value={estado}>
                                            {estado.charAt(0).toUpperCase() + estado.slice(1)}
                                        </option>
                                    ))}
                            </select>

                            {/* Ícono flecha del input estado */}
                            <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-fuchsia-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Filtro Fecha */}
                        <div className="relative">
                            <input
                                type="date"
                                value={fechaFiltro}
                                onChange={(e) => setFechaFiltro(e.target.value)}
                                className="appearance-none w-full text-md border-b border-gray-300/30 py-2 pr-10 focus:outline-none cursor-pointer dark:[color-scheme:dark]"
                            />
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-fuchsia-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 7V3m8 4V3m-9 8h10m-10 4h6M3 10h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10Z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Botón Limpiar */}
                        <div className="md:ml-auto items-center flex justify-center py-4 md:py-0">
                            <button
                                onClick={() => {
                                    setQuery('')
                                    setEstadoFiltro('')
                                    setFechaFiltro('')
                                }}
                                className="flex items-center gap-2 text-sm text-fuchsia-200 font-bold hover:text-fuchsia-500 transition-colors cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                </svg>
                                Limpiar
                            </button>
                        </div>
                    </div>

                    <div className="mt-3">
                        {/* Tabla de resultado de las licitaciones */}
                        <div className="overflow-x-auto flex sm:justify-center bg-amber-50/10 rounded-lg py-8">
                            <table className="w-max text-sm">
                                <thead>
                                    <tr className="text-left">
                                        <th className="py-2 text-fuchsia-300 text-[16px] px-4 w-48">Código Licitación</th>
                                        <th className="py-2 text-fuchsia-300 text-[16px] px-4">Nombre</th>
                                        <th className="py-2 text-fuchsia-300 text-[16px] px-4">Estado</th>
                                        <th className="py-2 text-fuchsia-300 text-[16px] px-4 w-64">Fecha Cierre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentResults.map((licitacion, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100/10 cursor-pointer"
                                            onClick={() => {
                                                setLicitacionSeleccionada(licitacion)
                                                setIsModalOpen(true)
                                            }}
                                        >
                                            <td className="py-4 px-4 border-b border-amber-50/10">{licitacion.CodigoExterno}</td>
                                            <td className="py-4 px-4 border-b border-amber-50/10">
                                                {licitacion.Nombre.length > 30 ? licitacion.Nombre.slice(0, 30).toUpperCase() + '...' : licitacion.Nombre}
                                            </td>
                                            <td className="py-4 px-4 border-b border-amber-50/10">{licitacion.CodigoEstado}</td>
                                            <td className="py-4 px-4 border-b border-amber-50/10">
                                                {new Date(licitacion.FechaCierre).toLocaleString('es-CL')}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {filtered.length === 0 && (
                            <p className="text-center mt-20 text-gray-300 text-lg font-extrabold italic">No se encontraron resultados.</p>
                        )}

                        {/* Paginador de resultados */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-6 gap-2 flex-wrap mb-40">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 rounded hover:bg-gray-300/10 disabled:opacity-50"
                                >
                                    Anterior
                                </button>

                                {/* Si hay páginas anteriores que no se muestran */}
                                {currentPage > 4 && <span className="px-2 py-1">...</span>}

                                {/* Mostrar páginas desde (actual - 1) hasta (actual + 3), sin pasarse del total */}
                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                    .filter(page =>
                                        page === currentPage ||
                                        (page >= currentPage && page < currentPage + 4) ||
                                        (page <= currentPage && page > currentPage - 4)
                                    )
                                    .slice(0, 4)
                                    .map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-3 py-1 rounded ${currentPage === page ? 'bg-fuchsia-400 text-purple-950 font-semibold' : 'hover:bg-gray-300/10'}`}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                {/* Si hay más páginas que no se muestran después */}
                                {currentPage + 3 < totalPages && <span className="px-2 py-1">...</span>}

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 rounded hover:bg-gray-300/10 disabled:opacity-50"
                                >
                                    Siguiente
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* Modal de información de las licitaciones */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {licitacionSeleccionada && (
                    <div>
                        <h2 className="text-xl font-bold mb-8">Detalles de la Licitación</h2>
                        <p><strong>Código:</strong> {licitacionSeleccionada.CodigoExterno}</p>
                        <p><strong>Nombre:</strong> {licitacionSeleccionada.Nombre}</p>
                        <p><strong>Estado:</strong> {licitacionSeleccionada.CodigoEstado}</p>
                        <p><strong>Fecha Cierre:</strong> {new Date(licitacionSeleccionada.FechaCierre).toLocaleString('es-CL')}</p>
                    </div>
                )}
            </Modal>
        </>
    )
}

export default Busqueda