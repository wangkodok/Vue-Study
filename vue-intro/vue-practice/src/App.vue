<template>
  <div>
    <h1 v-bind:style="[titleStyle, basicStyle]">Hello Vue!</h1>
    <h1 id="title">Hello Title</h1>
    <h1 v-bind:id="dynamicId">Hello Title</h1>
    <a v-bind:href="url">naver</a>
    <img v-bind:src="image.src" v-bind:alt="image.alt" />
    <input v-bind:type="inputText" />
    <p v-bind:style="pStyle">Hello Vue</p>
    <p
      v-bind:style="{
        color: 'red',
        fontSize: `${basicSize}px`,
        'background-color': 'blue',
      }"
    >
      Hello Vue
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dynamicId: "content",
      url: "https://www.naver.com",
      image: {
        src: "https://placeimg.com/100/100/any",
        alt: "random image",
      },
      inputText: "text",
      pStyle: "color: red; font-size: 36px",
      basicSize: 100,
      basicStyle: {
        backgroundColor: "yellow",
      },
      titleStyle: {
        "font-weight": "blod",
        fontSize: "80px",
        border: "5px solid red",
      },
    };
  },
};
</script>

<style>
#title {
  color: red;
  background-color: yellow;
}
#content {
  color: blue;
  background-color: pink;
}
</style>
