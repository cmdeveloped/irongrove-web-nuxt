import Vue from "vue";

Vue.filter("capitalize", value => {
  let capitalized = value.charAt(0).toUpperCase() + value.substring(1);
  return capitalized;
});
