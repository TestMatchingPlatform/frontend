<template>
  <v-card class="text-md-h5" @click="routeDetailApplyInfo">
    <div>
      <span>Quest Name: </span>
      <span class="text-h5 blue--text">
        {{ applyItem.questName }}
      </span>
    </div>
    <div>
      <span>승인 여부: </span>
      <span class="text-h5 blue--text">
        {{ applyItem.approve }}
      </span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ApplyListItem',
  props: {
    applyItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    routeDetailApplyInfo() {
      const id = this.applyItem.id;
      console.log(id);
      this.$router.push(`/apply/${id}`);
    },
  },
};
</script>

<style scoped></style>
