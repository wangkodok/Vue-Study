<template>
  <div>
    <h1>Hello Vue!</h1>

    <div>
      {{ fruits }}
    </div>

    <div>
      <ul>
        <li v-for="(fruit, index) in fruits" :key="index">
          {{ index + 1 }}. {{ fruit }}
        </li>
      </ul>
      <ul>
        <li v-for="(fruit, index) of fruits" :key="index">
          {{ index + 1 }}. {{ fruit }}
        </li>
      </ul>
      <h2 v-for="(value, key, index) in user" :key="key">
        index: {{ index }}, key: {{ key }}, value: {{ value }}
      </h2>
      <p v-for="index in 10" :key="index">{{ index }}</p>
    </div>

    <div v-for="(animal, animalIndex) in animals" :key="animalIndex">
      <h2>Aniaml > {{ animal.name }}</h2>
      <h3>food</h3>
      <ul>
        <li v-for="(food, foodIndex) in animal.favorites" :key="foodIndex">
          {{ food }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fruits: ["banana", "strawberry", "apple", "melon"],
      user: {
        name: "scalper",
        age: 100,
        job: "programmer",
      },
      animals: [
        { name: "monkey", size: "medium", favorites: ["banana", "apple"] },
        { name: "lion", size: "big", favorites: ["deer", "cow"] },
        { name: "rat", size: "small", favorites: ["cheese", "rice"] },
      ],
    };
  },
};
</script>

<style></style>
