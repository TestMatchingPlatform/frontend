<template>
  <v-container>
    <v-sheet color="purple lighten-4">
      <div>
        <span class="text-md-h5">Title: </span>
        <span class="text-md-h5 blue--text">
          {{ questItem.title }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">categoryName: </span>
        <span class="text-md-h5 blue--text">
          {{ questItem.categoryName }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">registerTime: </span>
        <span class="text-md-h5 blue--text">
          {{ questItem.registerTime }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">recruitmentTimeStart: </span>
        <span class="text-md-h5 blue--text">
          {{ questItem.recruitmentTimeStart }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">recruitmentTimeLimit: </span>
        <span class="text-md-h5 blue--text">
          {{ questItem.recruitmentTimeLimit }}
        </span>
      </div>

      <div>
        <span class="text-md-h5">questMakerName: </span>
        <span class="text-md-h5 blue--text">
          {{ questItem.questMakerName }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">participantCapacity: </span>
        <span class="text-md-h5 blue--text">
          {{ questItem.participantCapacity }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">reward: </span>
        <span class="text-md-h5 blue--text">
          {{ questItem.reward }}
        </span>
      </div>
    </v-sheet>
    <v-divider></v-divider>
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
    // async routeDetailQuestInfo() {
    //   const id = this.questItem._id;
    //   this.
    // },
  },
};
</script>

<style scoped></style>
