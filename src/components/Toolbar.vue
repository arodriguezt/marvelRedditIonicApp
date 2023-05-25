<template>
    <ion-header>
    <ion-toolbar>
      <ion-title>Header Toolbar</ion-title>
      <ion-buttons slot="secondary">
        <ion-button @click="navigateToHome">Home</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton
} from "@ionic/vue"
import { defineComponent } from "vue"
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton
  },
    setup() {
      const router = useRouter();
       const navigateToHome = () => {
      router.push({name:'Home'});//Segueix amb el codi de home
    };
      return { navigateToHome };
    },
})
</script>
