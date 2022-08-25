<script setup>
import BeanieMan from '../svgs/BeanieMan.vue';
import Panel from '../components/Panel.vue';
</script>

<template>

  <Panel>
    <BeanieMan :minimumX="70" :minimumY="50" expression="leftHandWave" />
    <text x="185" y="100">HEY THERE!</text>
    <text x="185" y="140">IF YOU'RE WONDERING</text>
    <text x="185" y="180">WHO THE STRANGE,</text>
    <text x="185" y="220">BEANIE-WEARING</text>
    <text x="185" y="260">STICK FIGURE IS,</text>
    <text x="185" y="300">I'M MIDLY.</text>
  </Panel>

  <Panel>
    <BeanieMan :minimumX="50" :minimumY="50" expression="rightHandPointUp" />
    <text x="185" y="100">IF YOU'RE WONDERING</text>
    <text x="185" y="140">WHAT "MITT" IS, THAT</text>
    <text x="185" y="180">WOULD BE "MIDLY'S</text>
    <text x="185" y="220">IDEOLOGICAL TURING</text>
    <text x="185" y="260">TEST".</text>
  </Panel>

  <Panel>
    <BeanieMan :minimumX="50" :minimumY="50" expression="handsDown" />
    <text x="185" y="100">AN "IDEOLOGY" IS A</text>
    <text x="185" y="140">BUNCH OF IDEAS</text>
    <text x="185" y="180">SOMEONE BELIEVES.</text>
    <text x="185" y="220"></text>
    <text x="185" y="260">THE IDEA OF THE</text>
    <text x="185" y="300">TURING TEST IS TO</text>
    <text x="185" y="340">EXPLAIN THOSE IDEAS</text>
    <text x="185" y="380">AS IF YOU BELIEVE</text>
    <text x="185" y="420">THEM.</text>
  </Panel>

  <Panel>
    <BeanieMan :minimumX="70" :minimumY="50" expression="shrug" />
    <text x="205" y="100">OF COURSE, JUST</text>
    <text x="205" y="140">LIKE A CHATBOT</text>
    <text x="205" y="180">TRYING TO PASS</text>
    <text x="205" y="220">THE REAL TURING</text>
    <text x="205" y="260">TEST, I'M BOUND TO</text>
    <text x="205" y="300">HAVE GAPS AND</text>
    <text x="205" y="340">GAFFS AT FIRST.</text>
  </Panel>

  <Panel>
    <BeanieMan :minimumX="70" :minimumY="50" expression="excited" />
    <text x="205" y="100">TO THAT END,</text>
    <text x="205" y="140">FEEDBACK IS VERY</text>
    <text x="205" y="180">WELCOME! COMICS WILL</text>
    <text x="205" y="220">COME WITH A LINK</text>
    <text x="205" y="260">TO A DISCUSSION</text>
    <text x="205" y="300">THREAD, WHERE ANY</text>
    <text x="205" y="340">COMMENTS ARE</text>
    <text x="205" y="380">APPRECIATED.</text>
  </Panel>

  <Panel>
    <BeanieMan :minimumX="70" :minimumY="50" expression="handsDown" />
    <text x="205" y="100">ALSO, IF I MAKE ANY</text>
    <text x="205" y="140">CHANGES TO THE</text>
    <text x="205" y="180">COMICS IN LIGHT OF</text>
    <text x="205" y="220">FEEDBACK, YOU'LL</text>
    <text x="205" y="260">BE ABLE TO SEE</text>
    <text x="205" y="300">THE EDIT HISTORY</text>
    <text x="205" y="340">ON GITHUB.</text>
  </Panel>

  <Panel>
    <BeanieMan :minimumX="55" :minimumY="160" :lengthX="75" :lengthY="300" expression="rightHandWave" />
    <text x="170" y="100">WITH THAT, ENJOY! I'M</text>
    <text x="170" y="140">A BIG FAN OF GETTING</text>
    <text x="170" y="180">DIFFERENT SIDES TO</text>
    <text x="170" y="220">UNDERSTAND EACH</text>
    <text x="170" y="260"> OTHER BETTER - </text>
    <text x="170" y="300">I'M HOPING THIS COMIC'LL</text>
    <text x="170" y="340">HELP ME TO DO THAT,</text>
    <text x="170" y="380">AND MAYBE HELP</text>
    <text x="170" y="420">SOME READERS TOO.</text>
  </Panel>
</template>
