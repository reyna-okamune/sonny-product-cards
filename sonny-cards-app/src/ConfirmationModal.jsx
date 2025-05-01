export default function ConfirmationModal({onExit}) {
    console.log(`pop up modal opened!`)
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <button
                        onClick={onExit}
                        className="hover:border-none hover:outline-none focus:border-none focus:outline-none"
                    >
                        <span className="material-symbols-outlined cursor-pointer text-stone-800 text-base sm:text-lg hover:text-rose-600">
                            cancel
                        </span>
                    </button>
                    <p className="text-lg font-semibold">Are you sure you want to confirm your order?</p>
                </div>
            </div>
        </>
    )
}