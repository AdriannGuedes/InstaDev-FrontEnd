<template>
  <q-drawer
        side="right"
        v-model="open"
        show-if-above
        bordered
        class="menu-drawer"
        @hide="hide"
        content-class="bg-grey-3"
      >
        <div class="container-items">
          <div class="q-pa-sm q-pl-md q-pt-xl">
           <span>the_red_fusca</span>
           <div class="q-mt-lg">
              <q-img width="24px" class="q-mr-sm" src="../../../src/assets/archive.svg"/>
              <span>Archive</span>
           </div>
           <div class="q-mt-lg">
              <q-img width="24px" class="q-mr-sm" src="../../../src/assets/activity.svg"/>
              <span>Your Activity</span>
           </div>
           <div class="q-mt-lg">
              <q-img width="24px" class="q-mr-sm" src="../../../src/assets/name-tag.svg"/>
              <span>Nametag</span>
           </div>
           <div class="q-mt-lg">
              <q-img width="24px" class="q-mr-sm" src="../../../src/assets/save.svg"/>
              <span>Saved</span>
           </div>
           <div class="q-mt-lg">
              <q-img width="24px" class="q-mr-sm" src="../../../src/assets/closefriends.svg"/>
              <span>Close Friends</span>
           </div>
           <div class="q-mt-lg">
              <q-img width="24px" class="q-mr-sm" src="../../../src/assets/discoverpeople.svg"/>
              <span>Discover People</span>
           </div>
           <div class="q-mt-lg">
              <q-img width="24px" class="q-mr-sm" src="../../../src/assets/openfacebook.svg"/>
              <span>Open Facebook</span>
           </div>
          </div>
          <div class="q-pa-sm">
            <div class="q-mt-lg">
              <q-img width="24px" class="q-mr-sm" src="../../../src/assets/settings.svg"/>
              <span>Settings</span>
           </div>
          </div>
        </div>
    </q-drawer>
</template>

<script>
export default {
  name: 'MenuDrawer',
  data() {
    return {
      open: false,
    };
  },
  props: {
    drawerRight: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  watch: {
    drawerRight() {
      this.open = this.drawerRight;
    },
  },
  methods: {
    hide() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>

.container-items {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
