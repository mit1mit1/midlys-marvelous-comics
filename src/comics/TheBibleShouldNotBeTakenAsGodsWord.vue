<script setup lang="ts">
import BeanieMan from '../vue-comic-components/svgs/BeanieMan.vue';
import Panel from '../vue-comic-components/components/PanelBox.vue';
import ComicBox from '../vue-comic-components/components/ComicBox.vue';
import AfterComicBox from '../vue-comic-components/components/AfterComicBox.vue';
import ComicTitle from '../vue-comic-components/components/ComicTitle.vue';
import NavigationBar from '../vue-comic-components/components/NavigationBar.vue';
import { availableLimbPositions } from '../vue-comic-components/svgs/constants/limbPositions';
</script>

<template>
  <ComicTitle>The Bible Should Not Be Taken as God's Word</ComicTitle>
  <NavigationBar :comicList="[]" />
  <ComicBox>
    <Panel>
      <BeanieMan :minimumX="60" :minimumY="110" :lengthX="90" :lengthY="360"
        :limbPositions="availableLimbPositions.handsFolded" beanieColor="#44d" beanieStripeColor="#bbb" />
      <text x="170" y="100">FROM PRINCIPLES OF KNOWLEDGE,</text>
      <text x="170" y="140">AND INTERNAL CONTRADICTIONS.</text>
    </Panel>
  </ComicBox>
  <NavigationBar :comicList="[]" />
  <AfterComicBox>
    <p>Join the discussion at <a
        href="https://www.reddit.com/r/mitt_comics/comments/wxv4ah/comic_2_sydney_evangelicals_what/">Reddit</a>.</p>
  </AfterComicBox>
</template>
