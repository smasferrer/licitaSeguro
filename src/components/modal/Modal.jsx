
function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex p-4 items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="modal bg-amber-50/10 text-amber-50 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-6 text-4xl text-purple-300 hover:text-white cursor-pointer transition-all"
                >
                    &times;
                </button>
                {children}
                <div className="flex justify-end border-t border-amber-50/10 mt-4 pt-6 pb-0">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 font-medium rounded bg-fuchsia-500 hover:bg-fuchsia-600 disabled:opacity-50 cursor-pointer transition-all"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal