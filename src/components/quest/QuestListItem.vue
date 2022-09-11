<template>
  <v-container>
    <v-card class="text-md-h5" @click="routeDetailQuestInfo">
      <v-sheet color="purple lighten-4">
        <div>
          <span>Title: </span>
          <span class="text-md-h5 blue--text">
            {{ questItem.title }}
          </span>
        </div>
        <div>
          <span>categoryName: </span>
          <span class="text-md-h5 blue--text">
            {{ questItem.categoryName }}
          </span>
        </div>
        <div>
          <span>registerTime: </span>
          <span class="text-md-h5 blue--text">
            {{ questItem.registerTime }}
          </span>
        </div>
        <div>
          <span>recruitmentTimeStart: </span>
          <span class="text-md-h5 blue--text">
            {{ questItem.recruitmentTimeStart }}
          </span>
        </div>
        <div>
          <span>recruitmentTimeLimit: </span>
          <span class="text-md-h5 blue--text">
            {{ questItem.recruitmentTimeLimit }}
          </span>
        </div>

        <div>
          <span>questMakerName: </span>
          <span class="text-md-h5 blue--text">
            {{ questItem.questMakerName }}
          </span>
        </div>
        <div>
          <span>participantCapacity: </span>
          <span class="text-md-h5 blue--text">
            {{ questItem.participantCapacity }}
          </span>
        </div>
        <div>
          <span>reward: </span>
          <span class="text-md-h5 blue--text">
            {{ questItem.reward }}
          </span>
        </div>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'QuestList',
  props: {
    questItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    routeDetailQuestInfo() {
      const id = this.questItem.id;
      console.log(id);
      this.$router.push(`/quests/${id}`);
    },
  },
};
</script>

<style scoped></style>
