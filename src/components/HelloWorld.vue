<template>
  <div class="hello">
    <GxTabgrp/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import GxTabgrp from './GxTabgrp.vue'

@Component({
  name: 'HelloWorld',
  components: { GxTabgrp }
})

export default class HelloWorld extends Vue {
    /* eslint-disable @typescript-eslint/no-explicit-any*/
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
