Ejercicios
# Currency Converter
Crear un componente CurrencyConverter que

renderice dos input
a medida que se escribe en el input, actualice el otro input con el precio convertido.
La conversion debe ser de ARS a USD
demo



# SearchList
Crear un componente SearchList que

renderice un input y una lista (ul con li)
tome la prop items, que es un array de strings
renderice cada item como li dentro del ul
a medida que se escribe en el input, actualice la lista mostrando los items que contengan como substring lo ingresado. (p. ej.: si se ingresa "java" debe mostrarse "javascript")
la lista al realizar la búsqueda debe mostrarse ordenada alfabéticamente
cuando el input está vacío, debe mostrar la lista normal con todos los ítems
EXTRA: si se ingresa algo en la búsqueda, resalta en cada ítem la substring ingresada, por ejemplo, si se ingresa java, javascript debería aparecer como: javascript

EXTRA 2: Agregar un boton para poder eliminar un item de la lista

# Ejercicio _elevando estado_

- En una aplicacion de react crear un componente `List`
- Renderizar una lista con el siguiente array

```const list = [
      { id: "1", text: "Elefante" },
      { id: "2", text: "Ballena azul"},
      { id: "3", text: "Jirafa" },
      { id: "4", text: "Hipopótamo" },
    ]
```

- Crear un componente `Item` para mostrar la informacion de cada item del array
- Tiene que tener un boton para eliminar ese item del arreglo