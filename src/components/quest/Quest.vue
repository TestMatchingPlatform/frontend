<template>
  <v-card>
    <v-row class="text-h5 primary--text" no-gutters>
      <v-col cols="12"> title: {{ title }} </v-col>
      <v-col cols="12"> categoryName: {{ categoryName }} </v-col>
      <v-col cols="12"> content: {{ content }}</v-col>
      <v-col cols="12"> durationTimeStart: {{ durationTimeStart }}</v-col>
      <v-col cols="12"> durationTimeLimit: {{ durationTimeLimit }}</v-col>
      <v-col cols="12"> modifyTimeStart: {{ modifyTimeStart }}</v-col>
      <v-col cols="12"> modifyTimeLimit: {{ modifyTimeLimit }}</v-col>
      <v-col cols="12"> participantCapacity: {{ participantCapacity }}</v-col>
      <v-col cols="12"> preferenceCondition: {{ preferenceCondition }}</v-col>
      <v-col cols="12"> recruitmentTimeStart: {{ recruitmentTimeStart }}</v-col>
      <v-col cols="12"> recruitmentTimeLimit: {{ recruitmentTimeLimit }}</v-col>
      <v-col cols="12"> questMakerName: {{ questMakerName }}</v-col>
      <v-col cols="12"> requireCondition: {{ requireCondition }}</v-col>
      <v-col cols="12"> reward: {{ reward }}</v-col>
      <v-col cols="12"> Task 목록 </v-col>
      <v-col v-for="taskItem in taskItems" :key="taskItem.id" cols="12">
        <TaskListItem :taskItem="taskItem"></TaskListItem>
      </v-col>
      <v-btn>신청하기</v-btn>
    </v-row>
  </v-card>
</template>

<script>
import { fetchQuest } from '@/api/auth';
import TaskListItem from '@/components/quest/TaskListItem';

export default {
  name: 'QuestPage',
  components: {
    TaskListItem,
  },
  data() {
    return {
      title: '',
      categoryName: '',
      content: '',
      durationTimeLimit: 0,
      durationTimeStart: 0,
      modifyTimeStart: 0,
      modifyTimeLimit: 0,
      participantCapacity: 0,
      preferenceCondition: '',
      questMakerName: '',
      recruitmentTimeLimit: 0,
      recruitmentTimeStart: 0,
      registerTime: 0,
      requireCondition: '',
      reward: 0,
      taskItems: [],
    };
  },
  methods: {
    async loadQuestInformation() {
      const id = this.$route.params.id;
      const { data } = await fetchQuest(id);
      console.log(data);
      this.id = data.id;
      this.title = data.title;
      this.categoryName = data.categoryName;
      this.content = data.content;
      this.durationTimeStart = data.durationTimeStart;
      this.durationTimeLimit = data.durationTimeLimit;
      this.modifyTimeStart = data.modifyTimeStart;
      this.modifyTimeLimit = data.modifyTimeLimit;
      this.participantCapacity = data.participantCapacity;
      this.preferenceCondition = data.preferenceCondition;
      this.questMakerName = data.questMakerName;
      this.recruitmentTimeStart = data.recruitmentTimeStart;
      this.recruitmentTimeLimit = data.recruitmentTimeLimit;
      this.registerTime = data.registerTime;
      this.requireCondition = data.requireCondition;
      this.reward = data.reward;
      this.taskItems = data.taskList;
    },
    async apply() {
      const testerId = this.$store.state.UserID;
      const questId = this.id;
      const { data } = await applyQuest(testerId, questId);
      if (data == null) {
        alert('Fail Apply');
      } else {
        await this.$router.push('/quests/apply/tester');
      }
    },
  },
  created() {
    this.loadQuestInformation();
  },
};
</script>

<style scoped></style>
