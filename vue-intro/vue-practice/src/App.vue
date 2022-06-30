<template>
  <div>
    <h1>Computed</h1>
    <h2>{{ address1 }} - {{ address2 }} - {{ address3 }}</h2>
    <h2>{{ address }}</h2>
    <h2>
      내가 받은 점수의 합 {{ grade.math + grade.kor + grade.eng + grade.sci }}
    </h2>
    <h2>내가 받은 점수의 합 {{ totalScore }}</h2>
    <h2>내가 받은 점수의 합 (computed) {{ totalScore }}</h2>
    <h2>내가 받은 점수의 합 (methods) {{ getTotalScore() }}</h2>
    영어점수 <input type="number" v-model="grade.eng" />
    <br />
    학샘이름 <input type="text" v-model="studentName" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "scalper",
      address1: "성남시",
      address2: "분당구",
      address3: "정자로",
      grade: {
        math: 70,
        kor: 90,
        eng: 50,
        sci: 55,
      },
      studentName: "",
    };
  },
  computed: {
    address() {
      return `${this.address1} - ${this.address2} - ${this.address3}`;
    },
    totalScore() {
      console.log("computed");
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
      // return this.grade.math + this.grade.kor + this.grade.eng + this.grade.sci;
    },
  },
  directives: {},
  methods: {
    getTotalScore() {
      console.log("methods");
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
    },
  },
};
</script>

<style></style>
