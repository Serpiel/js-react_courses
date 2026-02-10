function Majeur(props) {
    if (props.age >= 18) {
        return <p>Grown ass man</p>;
    }
    return <p>Minor</p>;
}

export default Majeur;
