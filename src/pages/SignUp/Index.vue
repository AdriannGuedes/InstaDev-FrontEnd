<template>
  <q-page class="flex flex-center column justify-center q-px-md">
    <q-icon
     class="absolute-left q-ma-lg" name="fa-solid fa-chevron-left" size="25px" color="grey">
    </q-icon>
  <div class="full-width items-center column justify-center">
   <q-img class="logo q-mb-lg" src="../../../src/assets/instadev-logo.svg"/>
   <q-input filled v-model="email" label="E-mail" class="full-width q-mb-md"/>
   <q-input filled v-model="userName" label="Username" type="password"  class="full-width q-mb-md"/>
   <q-input filled v-model="password" label="Password" type="password"  class="full-width q-mb-md"/>
   <q-input
     filled
     v-model="confirmPassword"
     label="Confirm Password"
     type="password"
     class="full-width"
   />

   <q-btn
     color="primary"
     :disable="true"
     label="Sign up"
     class="sign-in-button full-width q-mt-lg"/>

   <div class="full-width row items-center justify-center q-my-xl">
    <q-separator class="separator" inset/>
      OR
    <q-separator class="separator" inset/>
   </div>
   <div class="full-width row items-center justify-center">
    <span class=" text-opacity">already have an account?</span>
    <a href="" class="link q-ml-xs">Sign In</a>
    </div>
  </div>
  </q-page>
</template>

<script>

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassord: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 54px;
  width: 182px;
}

.sign-in-button {
  height: 44px;
  border-radius: 5px;
  background-color: $instablue;
}

.facebook-icon {
  height: 17px;
  width: 17px;
}

.link {
  text-decoration: none;
  color: $instablue;
}

.separator {
  width: 35%;
}
</style>
