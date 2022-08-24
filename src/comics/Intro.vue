<script setup>
import AngryAvatar from '../svgs/AngryAvatar.vue';
import BeanieMan from '../svgs/BeanieMan.vue';
import Panel from '../components/Panel.vue';
import SpeechBubble from '../svgs/SpeechBubble.vue';
</script>

<template>

  <Panel>
    <BeanieMan :minimumX="50" :minimumY="50" :lengthX="400" :lengthY="200" />
    <g transform="translate(100 100)">
      <text textLength="700">Welcome to my comic!!!</text>
    </g>

  </Panel>
  <Panel>
    <BeanieMan  />

    <g transform="scale(-0.5 0.5) 
                translate(-450 220)
                ">
      <SpeechBubble />
    </g>
    <g transform="translate(100 100)">
      <text textLength="700">Welcome to my comic!!!</text>
    </g>

  </Panel>
  <Panel>
    <g transform="scale(0.5 0.5) 
                translate(250 290)">
      <AngryAvatar />
    </g>
    <g transform="scale(-0.5 0.5) 
                translate(-450 220)
                ">
      <SpeechBubble />
    </g>
    <g transform="translate(100 100)">
      <text textLength="700">Welcome to my comic!!!</text>
    </g>

  </Panel>
</template>
