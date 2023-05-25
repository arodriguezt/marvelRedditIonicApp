<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-card v-for="post in posts" :key="post.data.id">
        <ion-card-content>
          <template v-if="post.data.preview">
            <ion-img
              :src="replaceImgAmp(post.data.preview.images[0].source.url)"
            ></ion-img>
          </template>
          <ion-label>
            {{ post.data.title }}
          </ion-label>
          <ion-button
            color="tertiary"
            expand="block"
            shape="round"
            @click="viewMore(post.data)"
          >
            View More
            <ion-icon
              slot="end"
              :icon="ellipsisHorizontal"
              aria-hidden="true"
            ></ion-icon>
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonAlert,
  IonButton,
  IonLabel,
  IonCard,
  IonItem,
  IonInput,
  IonContent,
  IonCardContent,
  IonIcon,
  IonPage,
  IonImg
} from "@ionic/vue";
import { defineComponent, ref, onMounted } from "vue";
import useReddit from "@/composables/useReddit";
import Toolbar from "@/components/Toolbar.vue";
import { ellipsisHorizontal } from "ionicons/icons";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonAlert,
    IonButton,
    IonLabel,
    IonCard,
    IonItem,
    IonInput,
    IonContent,
    IonCardContent,
    IonIcon,
    Toolbar,
    IonPage,
    IonImg
  },
  setup() {
    const { isLoading, errorMessage, searchPosts, posts,replaceImgAmp } = useReddit();
    const router = useRouter();


    const viewMore = (data) => {
      router.push({ name:'detail', params:{id:data.id}});
    };

    onMounted(() => {
      searchPosts();
    });
    return {
      posts,
      isLoading,
      errorMessage,
      replaceImgAmp,
      ellipsisHorizontal,

      viewMore,
      searchPosts,
      
    };
  },
});
</script>

<style></style>
