const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 2000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

// a)  Las pizzas que tengan un id impar.

console.log("----------Las pizzas con ID impar son:----------");
const pizzasImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
pizzasImpar.forEach((pizza) => console.log(`-${pizza.nombre}`));

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

console.log("----------¿Hay alguna pizza que valga menos de $600?----------");

const pizzaEconomica = pizzas.find((pizza) => pizza.precio < 600);
if (pizzaEconomica) {
  console.log(
    `Si, la pizza mas barata es la ${pizzaEconomica.nombre} y vale ${pizzaEconomica.precio}`
  );
} else {
  console.log("No, todas las pizzas cuestan $600 o más.");
}

// c) El nombre de cada pizza con su respectivo precio.

console.log("----------Nombre y Precio----------");

pizzas.forEach((pizza) =>
  console.log(`La ${pizza.nombre} vale ${pizza.precio}`)
);
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

console.log("----------Ingredientes----------");
pizzas.forEach((pizza) => {
  console.log(`- ${pizza.nombre}:`);
  pizza.ingredientes.forEach((ingrediente) =>
    console.log(`  - ${ingrediente}`)
  );
});
