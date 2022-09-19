<template>
  <v-container>
    <span class="text-h2 text--primary"> QuestPage </span>
    <Quest></Quest>
  </v-container>
</template>

<script>
import Quest from '@/components/quest/Quest';
export default {
  name: 'QuestPage',
  components: { Quest },
};
</script>

<style scoped></style>
