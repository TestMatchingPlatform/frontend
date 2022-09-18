<template>
  <v-container>
    <span class="text-h3">TesterApplyQuestPage</span>
    <v-row>
      <v-col v-for="applyItem in applyItems" :key="applyItem.id" cols="4"
        ><ApplyListItem
          :applyItem="applyItem"
          @refresh="fetchApply"
        ></ApplyListItem
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApplyListItem from '@/components/apply/ApplyListItem';
import { fetchApplyQuest } from '@/api/auth';

export default {
  name: 'TesterApplyQuestPage',
  components: {
    ApplyListItem,
  },
  data() {
    return {
      applyItems: [],
    };
  },
  methods: {
    async fetchApply() {
      const testerId = this.$store.state.UserID;
      const { data } = await fetchApplyQuest(testerId);
      console.log(data);
      console.log(data.content);
      this.applyItems = data.content;
    },
  },
  created() {
    this.fetchApply();
  },
};
</script>

<style scoped></style>
