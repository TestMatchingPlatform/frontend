<template>
  <div>
    <h2>Tester Info Page</h2>
    <TesterItem></TesterItem>
  </div>
</template>

<script>
import TesterItem from '@/components/TesterItem';
import { testerInformation } from '@/api/auth';

export default {
  name: 'TesterInfoPage',
  components: { TesterItem },
};
</script>

<style scoped></style>
