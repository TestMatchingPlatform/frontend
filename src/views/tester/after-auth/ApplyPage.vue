<template>
  <v-container>
    <span class="text-h3">퀘스트 승인 페이지</span>
    <Apply></Apply>
  </v-container>
</template>

<script>
import Apply from '@/components/apply/Apply';
export default {
  name: 'ApplyPage',
  components: {
    Apply,
  },
};
</script>

<style scoped></style>
