<script setup lang="ts">
import BeanieMan from '../vue-comic-components/src/svgs/BeanieMan.vue';
import PanelBox from '../vue-comic-components/src/components/PanelBox.vue';
import ComicBox from '../vue-comic-components/src/components/ComicBox.vue';
import AfterComicBox from '../vue-comic-components/src/components/AfterComicBox.vue';
import ComicTitle from '../vue-comic-components/src/components/ComicTitle.vue';
import NavigationBar from '../vue-comic-components/src/components/NavigationBar.vue';
import { availableLimbPositions } from '../vue-comic-components/src/constants/limbPositions';
import { toRefs } from "vue";
const props = defineProps<{
  comicList: Array<string>;
}>();
const { comicList } = toRefs(props);
</script>

<template>
  <ComicTitle>Effective Altruism: What</ComicTitle>
  <NavigationBar :comicList="comicList" />
  <ComicBox>
    <PanelBox>
      <BeanieMan :minimumX="60" :minimumY="110" :lengthX="90" :lengthY="360"
        :limbPositions="availableLimbPositions.handsFolded" beanieBaseColor="#44d" beanieStripeColor="#bbb" />
      <text x="170" y="100">EARN TO GIVE BUT ALSO</text>
      <text x="170" y="140">OTHER STUFF.</text>
    </PanelBox>
  </ComicBox>
  <NavigationBar :comicList="comicList" />
  <AfterComicBox>
    <p>Join the discussion at <a
        href="https://www.reddit.com/r/mitt_comics/comments/wxv4ah/comic_2_sydney_evangelicals_what/">Reddit</a>.</p>
  </AfterComicBox>
</template>
