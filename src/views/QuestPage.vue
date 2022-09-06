<template>
  <div>
    <h2>QuestPage</h2>
    <QuestList></QuestList>
  </div>
</template>

<script>
import QuestList from '@/components/quest/QuestListItem';
export default {
  name: 'QuestPage',
  components: {
    QuestList,
  },
};
</script>

<style scoped></style>
