- **Escribir tu primer componente de React**: Crear un componente `Pantalla` para mostrar los números y resultados de la calculadora. 

src/components/screen

- **Crear archivos con múltiples componentes**: Crear componentes para cada botón numérico y de operaciones.

src/components/button

- **Añadir marcado a JavaScript con JSX**: Usar JSX para estructurar los botones y la pantalla de la calculadora.

src/components/screen.txs
src/components/button.tsx

- **Añadir llaves con JSX**: Utilizar llaves para manejar las operaciones matemáticas y el estado de los números ingresados.

src/app.tsx

const calculateResult = (): void => {
    let tempResult: number = result ?? 0;
    const numInput = input ? parseFloat(input) : lastInput; // Usar input o el último número si input está vacío

    if (numInput !== null && operator) {
      switch (operator) {
        case '+':
          tempResult += numInput;
          break;
        case '-':
          tempResult -= numInput;
          break;
        case '*':
          tempResult *= numInput;
          break;
        case '/':
          tempResult /= numInput;
          break;
        default:
          return;
      }

      setResult(tempResult);
      setInput('');
      setLastInput(numInput); // Actualizar el último número utilizado
    }
  };


- **Configurar componentes con props**: Pasar la información de los botones a los componentes que representan las operaciones y los números.

src/components/button.tsx

interface ButtonProps {
  text: string;
  handleClick: (value: string) => void;
}

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button className="Button" onClick={() => handleClick(text)}>
      {text}
    </button>
  );
};

- **Renderizar condicionalmente**: Renderizar los resultados de las operaciones de acuerdo con los valores ingresados.

src/components/screen.tsx 

  value: string;
}

const Screen: React.FC<ScreenProps> = ({ value }) => {
  return <div className="Screen">{value}</div>;
};

export default Screen;

- **Renderizar múltiples componentes a la vez**: Renderizar todos los botones numéricos y de operaciones utilizando `map`.

src/app.tsx 

const App: React.FC = () => {
  const [input, setInput] = useState<string>(''); 
  const [operator, setOperator] = useState<string | null>(null); 
  const [result, setResult] = useState<number | null>(null);
  const [lastInput, setLastInput] = useState<number | null>(null); // Último número ingresado para repetir la operación

  const handleButtonClick = (value: string): void => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperatorClick = (operator: string): void => {
    if (input) {
      setResult(parseFloat(input));
      setInput('');
      setOperator(operator);
      setLastInput(parseFloat(input)); // Guardar el último número ingresado
    }
  };

  const calculateResult = (): void => {
    let tempResult: number = result ?? 0;
    const numInput = input ? parseFloat(input) : lastInput; // Usar input o el último número si input está vacío

    if (numInput !== null && operator) {
      switch (operator) {
        case '+':
          tempResult += numInput;
          break;
        case '-':
          tempResult -= numInput;
          break;
        case '*':
          tempResult *= numInput;
          break;
        case '/':
          tempResult /= numInput;
          break;
        default:
          return;
      }

- **Mantener componentes puros**: Asegurar que los componentes no alteren el estado directamente y solo reciban información a través de props.
Qué: Los componentes no deben cambiar el estado de la aplicación directamente.
Cómo: Pasa la información que necesitan a través de props y haz que solo muestren los datos que reciben.
Por qué: Esto hace que los componentes sean más fáciles de entender, probar y mantener.

function Button({ value, onClick }) {
    return <button onClick={() => onClick(value)}>{value}</button>;
}

- **Entender la UI como árboles**: Visualizar la calculadora como una estructura de árbol donde los botones y la pantalla están organizados jerárquicamente.
Qué: La calculadora está formada por una estructura de componentes en forma de árbol.
Cómo: El componente principal (Calculator) tiene componentes secundarios (pantalla y botones), organizados de forma jerárquica.
Por qué: Pensar en la estructura como un árbol ayuda a organizar el código de manera lógica y clara.

function Calculator() {
    return (
        <div>
            <Screen value={currentValue} />
            <Button value="1" onClick={handleInput} />
            <Button value="2" onClick={handleInput} />
            {/* Otros botones */}
        </div>
    );
}

- **Controlar eventos del usuario**: Capturar los clics en los botones numéricos y de operaciones.
Qué: Capturar las acciones del usuario, como los clics en los botones.
Cómo: Define funciones en el componente principal y pásalas a los botones. Cuando el usuario hace clic, esas funciones se activan.
Por qué: Permite que la calculadora responda de forma interactiva a las acciones del usuario

function Calculator() {
    const handleInput = (value) => { /* lógica de actualización de estado */ };
    return <Button value="1" onClick={handleInput} />;
}

- **Gestionar el estado**: Mantener el estado de los números ingresados, la operación actual y el resultado final.
Qué: Guardar los valores ingresados, la operación seleccionada y el resultado.
Cómo: Usa useState en el componente principal para almacenar estos valores.
Por qué: Controlar el estado permite a la calculadora funcionar correctamente y mostrar los resultados al usuario.

const [input, setInput] = useState("");
const [operation, setOperation] = useState(null);
const [result, setResult] = useState(null);


- **Actualizar el estado**: Actualizar el estado de los números y el resultado en tiempo real a medida que el usuario interactúa con la calculadora.
Qué: Cambiar el valor de input, operation, y result cuando el usuario interactúa.
Cómo: Usa funciones para actualizar el estado cada vez que el usuario realiza una acción.
Por qué: Así, los resultados se muestran en tiempo real y la calculadora responde inmediatamente.

const handleInput = (value) => setInput(input + value); // Agrega el valor ingresado
const calculateResult = () => { /* lógica para calcular el resultado */ };

- **Sincronizar con efectos (opcional)**: Si deseas, podrías usar `useEffect` para manejar algún comportamiento extra, como un historial de cálculos.
Qué: useEffect permite ejecutar acciones adicionales cuando algo cambia.
Cómo: Usa useEffect para realizar tareas como guardar el historial de resultados.
Por qué: Te permite agregar características adicionales sin afectar la funcionalidad principal de la calculadora.

const [history, setHistory] = useState([]);

useEffect(() => {
    if (result !== null) {
        setHistory([...history, `${result}`]); // Agrega el resultado al historial
    }
}, [result]); // Ejecuta el efecto cuando `result` cambia
