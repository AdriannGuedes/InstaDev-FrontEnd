<template>
  <q-page class="flex column">
   <div class="column q-pt-xl q-px-md full-width">
     <q-icon name="las la-bars" size="31px" class="absolute-right q-ma-lg"/>
     <div class="full-width row items-center justify-center">
       <q-icon
         name="fas fa-lock"
         color="black"
         size="11px"
         class="q-mr-xs"
       />
       <strong>the_red_fusca</strong>
       <q-icon
         name="fas fa-chevron-down"
         color="black"
         size="11px"
         class="q-ml-xs"
       />
     </div>
     <div class="row items-center justify-between full-width q-mt-lg">
       <q-avatar class="avatar-profile" size="96px">
          <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png">
       </q-avatar>
       <div class="column items-center">
         <strong>362</strong>
         <span>Posts</span>
       </div>
       <div class="column items-center">
         <strong>9.035</strong>
         <span>Followers</span>
       </div>
       <div class="column items-center">
         <strong>2.845</strong>
         <span>Following</span>
       </div>
     </div>
     <div class="column q-mt-md">
       <strong>The_red_fusca</strong>
       <span>VW Fusca 1973</span>
       <span>Motor 1600</span>
       <span>Comando W120</span>
       <span>Torres RS</span>
     </div>
     <q-btn
       class="full-width btn-edit q-my-md"
       flat
       dense
       color="white"
       text-color="black"
       label="Edit Profile"
     />
     <div class="row">
       <div class="column items-center q-mr-md">
         <q-avatar class="avatar-story" size="64px">
           <q-icon name="las la-plus" size=""></q-icon>
         </q-avatar>
         <span>New</span>
       </div>
       <div class="column items-center q-mr-md" v-for="item in 3" :key="item">
         <q-avatar class="avatar-story" size="64px">
           <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png">
         </q-avatar>
         <span>wallpapers</span>
       </div>
     </div>
    </div>
    <q-separator class="q-mt-md"/>
    <div class="full-width">
      <q-tabs
        v-model="tab"
        class="text-teal"
        active-color="grey-8"
      >
      <q-tab name="grid">
        <q-img src="../../../src/assets/grid.svg" width="22px"/>
      </q-tab>
      <q-tab name="profile">
        <q-img src="../../../src/assets/profile.svg" width="24px"/>
      </q-tab>
      </q-tabs>
      <div class="row q-mb-lg">
        <q-img
         v-for="item in 5" :key="item"
         class="cursor-pointer col-4"
         ratio="1"
         src="https://picsum.photos/500/300"
        />

      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'MyArea',
  data() {
    return {
      tab: 'grid',
    };
  },
};
</script>

<style lang="scss" scoped>

.q-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  border: solid 2px #c7c7c7;
}

.avatar-profile {
  .avatar {
    width: 90px;
    height: 88px;
  }
}

.avatar-story {
  .avatar {
    width: 60px;
    height: 56px;
  }
}

.btn-edit {
  height: 35px;
  border-radius: 6px;
  text-transform: none;
  border: 1px solid rgba(60, 60, 67, 0.18);
}

</style>
