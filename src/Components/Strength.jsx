function Strength(props) {
    return (
        <>
            {
                [...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-5 ${i < (props.strength === 'STRONG' ? 4 : props.strength === 'MEDIUM' ? 3 : 1)
                            ? 'bg-yellow-400'
                            : 'bg-transparent border border-yellow-400'
                            }`}
                    ></div>
                ))
            }
            < span className="ml-2 text-yellow-400 font-bold" > {props.strength}</span >
        </>
    );
}

export default Strength;