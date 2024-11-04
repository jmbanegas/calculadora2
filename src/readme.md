- **Escribir tu primer componente de React**: Crear un componente `Pantalla` para mostrar los números y resultados de la calculadora. 

src/components/screen

- **Crear archivos con múltiples componentes**: Crear componentes para cada botón numérico y de operaciones.

src/components/button

- **Añadir marcado a JavaScript con JSX**: Usar JSX para estructurar los botones y la pantalla de la calculadora.

src/components/screen.txs
src/components/button.tsx

- **Añadir llaves con JSX**: Utilizar llaves para manejar las operaciones matemáticas y el estado de los números ingresados.


- **Configurar componentes con props**: Pasar la información de los botones a los componentes que representan las operaciones y los números.
- **Renderizar condicionalmente**: Renderizar los resultados de las operaciones de acuerdo con los valores ingresados.
- **Renderizar múltiples componentes a la vez**: Renderizar todos los botones numéricos y de operaciones utilizando `map`.
- **Mantener componentes puros**: Asegurar que los componentes no alteren el estado directamente y solo reciban información a través de props.
- **Entender la UI como árboles**: Visualizar la calculadora como una estructura de árbol donde los botones y la pantalla están organizados jerárquicamente.
- **Controlar eventos del usuario**: Capturar los clics en los botones numéricos y de operaciones.
- **Gestionar el estado**: Mantener el estado de los números ingresados, la operación actual y el resultado final.
- **Actualizar el estado**: Actualizar el estado de los números y el resultado en tiempo real a medida que el usuario interactúa con la calculadora.
- **Sincronizar con efectos (opcional)**: Si deseas, podrías usar `useEffect` para manejar algún comportamiento extra, como un historial de cálculos.