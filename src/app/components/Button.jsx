export const Button = ({children , onClick , variant="primary"}) => {
    const defaultStyle = "h-10 px-5 rounded-lg"

    const btnStyle = {
        primary : "text-white bg-slate-800 hover:bg-slate-900",
        secondary : "text-black bg-white hover:bg-slate-50",
        dark : "text-white bg-black hover:bg-black-700 rounded-none"
    }
    return (
        <button onClick={onclick} >
        {children}
        </button>
    )
}