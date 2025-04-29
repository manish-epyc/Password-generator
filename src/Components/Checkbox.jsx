function Checkbox(props) {
    return (
        <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                className="form-checkbox text-green-400 rounded-sm"
                checked={props.status}
                onChange={() => props.dispatch({ type: 'TOGGLE_OPTION', id: props.id })}
            />
            <span>Include {props.title}</span>
        </label>
    );
}

export default Checkbox;


/// Controlled inputs
// Uncrontlled inputs