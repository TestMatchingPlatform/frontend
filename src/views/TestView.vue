<template>
  <v-container>
    <div class="text-h3">TestView</div>
    <div>{{ id }}</div>
  </v-container>
</template>

<script>
export default {
  name: 'TestView',
  data() {
    return {
      id: 0,
    };
  },
  methods: {
    insertMockValue() {
      this.id = this.$route.params.id;
    },
  },
  created() {
    this.insertMockValue();
  },
};
</script>

<style scoped></style>
