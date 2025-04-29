function Button(props) {
    return <button
        onClick={props.generatePassword}
        className="w-full py-2 px-4 mt-2 border border-green-400 rounded text-green-400 hover:bg-green-400 hover:text-gray-900 transition font-mono flex items-center justify-center gap-2 uppercase tracking-wider"
    >
        Generate →
    </button>
}

export default Button;