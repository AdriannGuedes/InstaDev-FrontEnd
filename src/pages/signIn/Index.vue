<template>
  <q-page class="flex flex-center column">
   <q-img src="../../../src/assets/instadev-logo.svg"/>
   <q-input filled v-model="text" label="Filled" />
   <q-input filled v-model="text" label="Filled" />
   <a href="">Forgot password?</a>
   <q-btn color="primary" label="Primary" />
   <div>
    <q-img src="../../../src/assets/facebook-logo.svg"/>
    <a href="">Log in with Facebook</a>
   </div>
   <div class="full-width">
    <q-separator/>
      or
    <q-separator/>
   </div>
   <div>
    Don´t have an account? <a href="">Sign up</a>

   </div>
  </q-page>
</template>

<script>

export default {
  name: 'SignIn',
  data() {
    return {
      text: '',
    };
  },
};
</script>
