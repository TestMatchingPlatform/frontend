<template>
  <div>
    <v-sheet color="purple lighten-4">
      <div>
        <span class="text-md-h5">Email: </span>
        <span class="text-md-h5 blue--text">
          {{ testerItem.email }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">Password: </span>
        <span class="text-md-h5 blue--text">
          {{ testerItem.password }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">Nickname: </span>
        <span class="text-md-h5 blue--text">
          {{ testerItem.nickname }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">Phone Number: </span>
        <span class="text-md-h5 blue--text">
          {{ testerItem.phoneNumber }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">Prefer Category: </span>
        <span class="text-md-h5 blue--text">
          {{ testerItem.preferCategoryName }}
        </span>
      </div>

      <div>
        <span class="text-md-h5">introPicture: </span>
        <span class="text-md-h5 blue--text">
          {{ testerItem.introPictureRef }}
        </span>
      </div>
      <div>
        <span class="text-md-h5">introMessage: </span>
        <span class="text-md-h5 blue--text">
          {{ testerItem.introMessage }}
        </span>
      </div>
      <v-img :src="profileImage" contain max-width="250" max-height="150">
      </v-img>
    </v-sheet>
  </div>
</template>

<script>
import { getTesterProfileImage } from '@/api/auth';

export default {
  name: 'TesterComponent',
  props: {
    testerItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profileImage: '',
    };
  },
  created() {
    this.profileImage = getTesterProfileImage();
    console.log(this.profileImage);
  },
};
</script>

<style scoped></style>
