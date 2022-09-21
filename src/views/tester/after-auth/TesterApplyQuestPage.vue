<template>
  <v-container>
    <span class="text-h3">TesterApplyQuestPage</span>
    <v-card>
      <v-tabs background-color="deep-purple accent-4" center-active dark>
        <v-tab @click="checkApprove = false"> 승인되지 않은 퀘스트 </v-tab>

        <v-tab @click="checkApprove = true"> 승인된 퀘스트 </v-tab>
      </v-tabs>
    </v-card>
    <v-row>
      <v-col v-for="applyItem in applyItems" :key="applyItem.id" cols="4"
        ><ApplyListItem
          v-if="applyItem.approve === checkApprove"
          :applyItem="applyItem"
          @refresh="fetchApply"
        ></ApplyListItem
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApplyListItem from '@/components/apply/ApplyListItem';
import { fetchApplyQuestFromTesterId } from '@/api/auth';

export default {
  name: 'TesterApplyQuestPage',
  components: {
    ApplyListItem,
  },
  data() {
    return {
      applyItems: [],
      checkApprove: false,
    };
  },
  methods: {
    async fetchApply() {
      const testerId = this.$store.state.UserID;
      const { data } = await fetchApplyQuestFromTesterId(testerId);
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
