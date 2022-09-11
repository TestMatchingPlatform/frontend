<template>
  <v-container>
    <span class="text-h2">퀘스트 찾기 페이지</span>
    <v-row>
      <v-col v-for="questItem in questItems" :key="questItem.id" cols="4"
        ><QuestListItem
          :questItem="questItem"
          @refresh="fetchQuests"
        ></QuestListItem
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuestListItem from '@/components/quest/QuestListItem';
import { fetchQuestList } from '@/api/auth';

export default {
  name: 'TesterFindQuestPage',
  components: {
    QuestListItem,
  },
  data() {
    return {
      questItems: [],
    };
  },
  methods: {
    async fetchQuests() {
      const { data } = await fetchQuestList();
      console.log(data);
      this.questItems = data.content;
    },
  },
  created() {
    this.fetchQuests();
  },
};
</script>

<style scoped></style>
