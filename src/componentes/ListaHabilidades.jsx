const habilidades = ["HTML", "CSS", "JavaScript", "React"];

export default function Habilidades() {
  return (
    <ul>
    {habilidades.map((nombre, index) => (
        <li key={index}>{nombre}</li>
    ))}
</ul>
  );
}