<template>
  <div class="full-width row justify-around">
    <q-img width="25px"  src="../../assets/house.svg"></q-img>
    <q-img width="33px"  src="../../assets/search.svg"></q-img>
    <q-img width="33px"  src="../../assets/add.svg"></q-img>
    <q-img width="38px"  src="../../assets/heart.svg"></q-img>
    <q-avatar size="28px">
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
  </div>
</template>

<script>

export default {
  name: 'BottomBar',
};
</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
}

</style>
