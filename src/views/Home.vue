<template>
<ion-page>
  <Toolbar/>
  <ion-content>
    <ion-card>
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">
            <p>Pizza</p>
          </ion-label>
          <ion-input aria-label="text"></ion-input>
        </ion-item>
      </ion-card-content>
    </ion-card>
  </ion-content>
</ion-page>
</template>

<script>
import {
  IonAlert,
  IonLabel,
  IonCard,
  IonItem,
  IonInput,
  IonContent,
  IonCardContent,
  IonPage
  
} from "@ionic/vue";
import { defineComponent } from "vue";
import Toolbar from '@/components/Toolbar.vue';

export default defineComponent({
  components: {
    IonAlert,
    IonLabel,
    IonCard,
    IonItem,
    IonInput,
    IonContent,
    IonCardContent,
    Toolbar,
    IonPage
  },
  setup() {},
});
</script>

<style></style>
