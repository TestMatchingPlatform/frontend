<template>
  <v-row>
    <v-col cols="2">
      {{ taskItem.taskNumber }}
    </v-col>
    <v-col cols="5">
      {{ taskItem.taskExampleRef }}
    </v-col>
    <v-col cols="5">
      {{ taskItem.require }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    taskItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
