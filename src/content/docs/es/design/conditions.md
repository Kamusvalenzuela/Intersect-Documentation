---
title: Condiciones
---
## Descripción general

Las condiciones en Intersect Engine permiten ejecutar acciones según ciertas condiciones, como verificar variables, objetos, estado del jugador, etc. Se usan para crear eventos dinámicos, tomar decisiones en diálogos, activar misiones y hacer que el juego reaccione a lo que sucede.

## Requisitos dinámicos

> Los requisitos dinámicos son condiciones que deben cumplirse para que un evento se ejecute. Si no se cumplen, el evento no ocurre. Funcionan como un "filtro previo" que verifica cosas como nivel, items, variables o estado del jugador antes de permitir que algo suceda.

![](https://raw.githubusercontent.com/Kamusvalenzuela/images/refs/heads/main/Images/Conditions-Doc/Screenshot_323.png)

* Basta con darle al botón `Agregar condición` para añadir una nueva condición.
* Con **doble clic** se puede editar una condición ya añadida.

**Todas** las condiciones pueden **Negarse** y añadirle un **else** _(El `Else` funciona como una excepción; "Si algo no es 'A' entonces es 'B', sino es 'C', etc)_

![](https://raw.githubusercontent.com/Kamusvalenzuela/images/refs/heads/main/Images/Conditions-Doc/Screenshot_348.png)

## Condiciones

> Las condiciones que puedes encontrar son las siguientes:

![](https://raw.githubusercontent.com/Kamusvalenzuela/images/refs/heads/main/Images/Conditions-Doc/Screenshot_351.png)

* `Variable es` -> esto es para verificar alguna variable

![](https://raw.githubusercontent.com/Kamusvalenzuela/images/refs/heads/main/Images/Conditions-Doc/Screenshot_324.png)

> esto puede ser: Una `Variable de jugador`, `Variable global`, `Variable de clan` o `Variable de usuario`
>
> * Se pueden verificar y comparar variables del tipo `Texto` (string), `Enteras` (Int) o `booleanas` (Bool)

![](https://raw.githubusercontent.com/Kamusvalenzuela/images/refs/heads/main/Images/Conditions-Doc/Screenshot_347.png)

En el caso de verificar una variable de `texto` (STR), podemos verificar si es igual a un valor específico o si contiene un valor específico (Las variables de texto funcionan en este entorno)
