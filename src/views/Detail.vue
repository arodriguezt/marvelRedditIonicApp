<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-card>
        <ion-card-content class="postCardContent">
          <h1 v-if="!postData && !errorMessage">Buscando</h1>
          <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
          <template v-else>
            <ion-text class="ion-text-center">
              <h1>{{ postData.title }}</h1>
            </ion-text>
            <template v-if="postData.preview">
              <hr />
              <ion-img
                :src="replaceImgAmp(postData.preview.images[0].source.url)"
              ></ion-img>
            </template>
          </template>
        </ion-card-content>
      </ion-card>
      <template v-if="postComments">
        <ion-card v-for="comment in postComments" :key="comment.data.id">
          <ion-card-content>
            <h5>- {{comment.data.author}} - </h5>
            <p>
              {{comment.data.body}}
            </p>
          </ion-card-content>
        </ion-card>
      </template>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import Toolbar from "@/components/Toolbar.vue";
import useReddit from "@/composables/useReddit";
import { onMounted } from "@vue/runtime-core";

export default defineComponent({
  components: {
    Toolbar,
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonImg,
    IonText,
  },

  setup() {
    const route = useRoute();

    const postData = ref();
    const postComments = ref();

    const { isLoading, errorMessage, searchPostsById, posts, replaceImgAmp } =
      useReddit();

    onMounted(() => {
      searchPostsById(route.params.id).then(() => {
        postData.value = posts.value[0].data.children[0].data;
        postComments.value = posts.value[1].data.children;
        console.log(postComments.value);
      });
    });

    return {
      isLoading,
      errorMessage,
      searchPostsById,
      posts,
      postData,
      replaceImgAmp,
      postComments
    };
  },
});
</script>

<style>
.postCardContent {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}
hr {
  border-width: 1px;
  width: 100%;
  box-sizing: none;
}
</style>
