<template>
  <div>
    <h2>Tester Info Page</h2>
    <Tester></Tester>
    <TesterInfoForm></TesterInfoForm>
  </div>
</template>

<script>
import TesterInfoForm from '@/components/form/TesterInfoForm';
import Tester from '@/components/Tester';

export default {
  name: 'TesterInfoPage',
  components: { TesterInfoForm, Tester },
};
</script>

<style scoped></style>
