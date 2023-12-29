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
      class="q-mt-sm cursor-pointer"
      src="https://picsum.photos/500/300"
      :ratio="1"
      @click="countClicks++"
    >
      <q-icon
        v-if="animationClass !== '' "
        :class="animationClass"
        class="absolute-center"
        name="fas fa-heart"
        color="white"

      />

    </q-img>
    <div class="row justify-between q-mx-sm q-my-md">
      <div>
        <q-img class="q-mr-md" width="28px"  src="../../assets/heart.svg"></q-img>
        <q-img class="q-mr-md" width="24px"  src="../../assets/coment.svg"></q-img>
        <q-img class="q-mr-md" width="26px"  src="../../assets/direct.svg"></q-img>
      </div>
      <q-icon class="q-mr-xl" name="fas fa-ellipsis-h" size="14px" color="dark-items"></q-icon>
      <q-img width="24px"  src="../../assets/save.svg"></q-img>
    </div>
    <div class="row items-center q-mb-xs">
      <q-avatar size="17px" class="q-ml-sm q-mr-xs">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        Liked by <strong>adrian.gdss</strong> and <strong>37,879 others</strong>
    </div>
    <div class="q-mx-sm q-mb-lg">
      <strong>the_red_fusca</strong> Sextou!!!
    </div>
  </div>
</template>

<script>

export default {
  name: 'PosT',
  data() {
    return {
      animationClass: '',
      countClicks: 0,
    };
  },
  watch: {
    countClicks() {
      setTimeout(() => {
        if (this.countClicks !== 2) {
          this.countClicks = 0;
        }
      }, 1000);

      if (this.countClicks === 2) {
        this.addlikePost();
        this.countClicks = 0;
      }
    },
  },
  methods: {
    addlikePost() {
      this.animationClass = 'animate-like';
      setTimeout(() => {
        this.animationClass = '';
      }, 600);
    },
  },
};
</script>

<style lang="scss" scoped>
.animate-like {
  animation-duration: 500ms;
  animation-name: liked;
}

@keyframes liked {
  from {
    font-size: 45px;
  }
  10% {
    font-size: 48px;
  }
  75% {
    font-size: 75px;
  }
  90% {
    font-size: 73px;
  }
  to {
    font-size: 0px;
  }
}
</style>
