function InputRange(props) {
    return (
        <>
            <label className="text-sm mb-2 block font-mono text-gray-300">Character Length</label>
            <div className="flex items-center justify-between">
                <input
                    type="range"
                    min="4"
                    max="20"
                    value={props.length}
                    onChange={(e) => props.setLength(parseInt(e.target.value))}
                    className="accent-green-400 w-full"
                />
                <span className="ml-4 font-semibold text-green-400">{props.length}</span>
            </div>
        </>
    );
}

export default InputRange;