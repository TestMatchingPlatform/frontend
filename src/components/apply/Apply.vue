<template>
  <v-card>
    <v-row class="text-h5 primary--text" no-gutters>
      <v-col cols="12">
        preferenceConditionSubmitRef: {{ preferenceConditionSubmitRef }}
      </v-col>
      <v-col cols="12"
        >requireConditionSubmitRef: {{ requireConditionSubmitRef }}</v-col
      >
      <v-col cols="12">approve: {{ approve }}</v-col>
      <v-col cols="12"></v-col>
    </v-row>
  </v-card>
</template>

<script>
import { fetchApplyQuest } from '@/api/auth';

export default {
  name: 'ApplyComponent',
  data() {
    return {
      preferenceConditionSubmitRef: '',
      requireConditionSubmitRef: '',
      approve: false,
      testerName: '',
    };
  },
  methods: {
    async loadApplyInformation() {
      const id = this.$route.params.id;
      const { data } = await fetchApplyQuest(id);
      console.log(data);
      this.preferenceConditionSubmitRef = data.preferenceConditionSubmitRef;
      this.requireConditionSubmitRef = data.requireConditionSubmitRef;
      this.approve = data.approve;
      this.testerName = data.testerName;
    },
  },
  created() {
    this.loadApplyInformation();
  },
};
</script>

<style scoped></style>
