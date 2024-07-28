


function Button({ state }) {
    if (state) {
        return <button className="font-fraunces font-bold uppercase bg-white text-heading-text-color py-1 px-3 rounded-3xl text-base hover:bg-[#6fcfff] hover:text-white">contact</button>
    }
    return <button className="font-fraunces font-bold uppercase bg-link-yellow text-heading-text-color py-1 px-3 rounded-3xl text-base">contact</button>
}

export default Button;