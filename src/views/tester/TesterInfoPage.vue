<template>
  <div>
    <h2>Tester Info Page</h2>
    <TesterItem
      :key="testerItem._id"
      :testerItem="testerItem"
      @refresh="fetchTester"
    ></TesterItem>
  </div>
</template>

<script>
import TesterItem from '@/components/TesterItem';
import { testerInformation } from '@/api/auth';

export default {
  name: 'TesterInfoPage',
  components: { TesterItem },
  data() {
    return {
      testerItem: {
        type: Object,
        required: true,
      },
    };
  },
  methods: {
    async fetchTester() {
      try {
        const userID = this.$store.state.UserID;
        const { data } = await testerInformation(userID);
        console.log(data);
        this.testerItem = data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.fetchTester();
  },
};
</script>

<style scoped></style>
