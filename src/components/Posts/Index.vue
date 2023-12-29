<template>
 <div class="column full-width">
    <div class="row justify-between items-center full-width">
      <div class="row items-center">
        <q-avatar size="28px" class="q-mx-md">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <div class="column">
          <strong>the_red_fusca</strong>
          <span>Torres, RS</span>
        </div>
      </div>
      <q-icon class="q-mr-md" name="fas fa-ellipsis-h" size="14px" color="dark-items"></q-icon>
    </div>
    <q-img
      src="https://picsum.photos/500/300"
      :ratio="1"
      class="q-mt-sm"
    />
    <div class="row justify-between q-mx-sm q-my-md">
      <div>
        <q-img class="q-mr-md" width="28px"  src="../../assets/heart.svg"></q-img>
        <q-img class="q-mr-md" width="24px"  src="../../assets/coment.svg"></q-img>
        <q-img class="q-mr-md" width="26px"  src="../../assets/direct.svg"></q-img>
      </div>
      <q-icon class="q-mr-xl" name="fas fa-ellipsis-h" size="14px" color="dark-items"></q-icon>
      <q-img width="24px"  src="../../assets/save.svg"></q-img>

    </div>
  </div>
</template>

<script>

export default {
  name: 'PosT',
};
</script>
