<script setup>
import BeanieMan from '../svgs/BeanieMan.vue';
import Panel from '../components/Panel.vue';
import ComicBox from '../components/ComicBox.vue';
import AfterComicBox from '../components/AfterComicBox.vue';
import ComicTitle from '../components/ComicTitle.vue';
import NavigationBar from '../components/NavigationBar.vue';
import Bible from '../svgs/Bible.vue';
</script>

<template>
  <ComicTitle>Sydney Evangelicals: What</ComicTitle>
  <NavigationBar />
  <ComicBox>
    <Panel>
      <BeanieMan :minimumX="60" :minimumY="110" :lengthX="90" :lengthY="360" expression="handsFolded" beanieColor="#44d"
        beanieStripeColor="#bbb" />
      <text x="170" y="100">IF I HAD TO SUMMARIZE</text>
      <text x="170" y="140">THE EVANGELICAL</text>
      <text x="170" y="180">WORLDVIEW, I'D GIVE</text>
      <text x="170" y="220">THREE POINTS.</text>
    </Panel>

    <Panel>
      <BeanieMan :minimumX="60" :minimumY="110" :lengthX="90" :lengthY="360" expression="rightHandPointUp"
        beanieColor="#44d" beanieStripeColor="#bbb" />
      <text x="170" y="100">1. WHAT IS THE BIBLE?</text>
      <text x="170" y="140">2. WHO ARE PEOPLE?</text>
      <text x="170" y="180">3. WHO IS JESUS?</text>
    </Panel>

    <Panel>
      <BeanieMan :minimumX="60" :minimumY="110" :lengthX="90" :lengthY="360" expression="rightHandHoldingMid"
        beanieColor="#44d" beanieStripeColor="#bbb" />
      <Bible :minimumX="153" :minimumY="287" :rotation="10" />
      <text x="60" y="100">1. WHAT IS THE BIBLE?</text>
      <text x="170" y="140"></text>
      <text x="170" y="180">THE TRUE AND</text>
      <text x="170" y="220">AUTHORITATIVE WORD</text>
      <text x="170" y="260">OF GOD.</text>
    </Panel>

    <Panel>
      <BeanieMan :minimumX="60" :minimumY="110" :lengthX="90" :lengthY="360" expression="rightHandHoldingDown"
        beanieColor="#44d" beanieStripeColor="#bbb" />
      <Bible :minimumX="158" :minimumY="327" :rotation="45" />
      <text x="120" y="100">WE KNOW THAT THE BIBLE</text>
      <text x="145" y="140">WAS WRITTEN BY MANY</text>
      <text x="170" y="180">HUMAN AUTHORS, IN</text>
      <text x="170" y="220">VARIOUS GENRES, FOR</text>
      <text x="170" y="260">SPECIFIC READERS.</text>
      <text x="170" y="300"></text>
      <text x="235" y="340">BUT WE ALSO</text>
      <text x="235" y="380">KNOW GOD USED</text>
      <text x="235" y="420">THOSE AUTHORS</text>
      <text x="235" y="460">TO SPEAK TRUTH.</text>
    </Panel>

    <Panel>
      <BeanieMan :minimumX="60" :minimumY="110" :lengthX="90" :lengthY="360" expression="rightHandHoldingMid"
        beanieColor="#44d" beanieStripeColor="#bbb" />
      <Bible :minimumX="153" :minimumY="287" :rotation="10" />
      <text x="120" y="100">TO UNDERSTAND WHAT</text>
      <text x="145" y="140">THE BIBLE SAYS, WE</text>
      <text x="165" y="180">NEED TO CONSIDER</text>
      <text x="165" y="220">CONTEXT, GENRE, AND</text>
      <text x="165" y="260">THE ORIGINAL READERS.</text>
      <text x="165" y="300"></text>
      <text x="235" y="340">BUT ONCE WE</text>
      <text x="235" y="380">HAVE DONE THIS,</text>
      <text x="235" y="420">WE TAKE WHAT IT</text>
      <text x="235" y="460">SAYS AS TRUTH.</text>
    </Panel>

    <Panel>
      <BeanieMan :minimumX="60" :minimumY="110" :lengthX="90" :lengthY="360" expression="rightHandHoldingMid"
        beanieColor="#44d" beanieStripeColor="#bbb" />
      <text x="60" y="100">2. WHO ARE PEOPLE?</text>
      <text x="170" y="140"></text>
      <text x="170" y="180">GOD'S BEAUTIFUL</text>
      <text x="170" y="220">CREATION, WHO ARE</text>
      <text x="170" y="260">ENSTRANGED FROM</text>
      <text x="230" y="300">THEIR CREATOR.</text>
      <BeanieMan :minimumX="60" :minimumY="110" :lengthX="90" :lengthY="360" expression="rightHandHoldingMid"
        beanieColor="#44d" beanieStripeColor="#bbb" />
    </Panel>


    <Panel>
      <BeanieMan :minimumX="55" :minimumY="160" :lengthX="75" :lengthY="300" expression="rightHandWave" />
      <text x="170" y="100">WITH THAT, ENJOY! I'M</text>
      <text x="170" y="140">A BIG FAN OF GETTING</text>
      <text x="170" y="180">DIFFERENT SIDES TO</text>
      <text x="170" y="220">UNDERSTAND EACH</text>
      <text x="170" y="260">OTHER BETTER - </text>
      <text x="170" y="300">I'M HOPING THIS COMIC'LL</text>
      <text x="170" y="340">HELP ME TO DO THAT,</text>
      <text x="170" y="380">AND MAYBE HELP</text>
      <text x="170" y="420">SOME READERS TOO.</text>
    </Panel>
  </ComicBox>
  <NavigationBar />
  <AfterComicBox>
    <p>Join the discussion at <a
        href="https://www.reddit.com/r/mitt_comics/comments/wxv4ah/comic_2_sydney_evangelicals/">Reddit</a>.</p>
  </AfterComicBox>
</template>
