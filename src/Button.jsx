


function Button(props) {
    if (props.state) {
        return <button className="bg-red-600">contact</button>
    }
    return <button className="bg-yellow-400">contact</button>
}

export default Button;