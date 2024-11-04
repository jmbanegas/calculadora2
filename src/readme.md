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
- **Entender la UI como árboles**: Visualizar la calculadora como una estructura de árbol donde los botones y la pantalla están organizados jerárquicamente.
- **Controlar eventos del usuario**: Capturar los clics en los botones numéricos y de operaciones.
- **Gestionar el estado**: Mantener el estado de los números ingresados, la operación actual y el resultado final.
- **Actualizar el estado**: Actualizar el estado de los números y el resultado en tiempo real a medida que el usuario interactúa con la calculadora.
- **Sincronizar con efectos (opcional)**: Si deseas, podrías usar `useEffect` para manejar algún comportamiento extra, como un historial de cálculos.