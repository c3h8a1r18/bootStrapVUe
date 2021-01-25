<template>
  <div id="gxTab" :style="style">
      <b-tab :title="tab.name" v-for="(tab, index) in tabs" :key="index">
          <component
            :is="tab.component"
            :tab="tab"
          />
      </b-tab>

    <!-- <component
      v-for="control in children"
      :key="control.props.id"
      :props="control.props"
      :is="control.component"
      :children="control.children"
      :controlID="props.id"
    /> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Home from '../views/Home.vue'
import MyTests from '../views/MyTests.vue'
import HelloWorld from './HelloWorld.vue'

@Component({
  name: 'GxTabe',
    components: {
        MyTests,
        Home,
        HelloWorld
    }
})

export default class GxTabe extends Vue {
    /* eslint-disable @typescript-eslint/no-explicit-any*/
  /** ******************************** Vue Props **********************************/

  @Prop() private tabs!: any;

  /** ******************************** Vue Data **********************************/
  public control: any = {
    component: 'a component',
    name: 'some name'
  };

  /** ******************************** Vue Computed **********************************/
  public clickCount = 0;
  public clickTimer: any = null;
  get iconStyle () {
        const style: Array<any> = []
        const styleProps = {
            width: '5px',
            height: '5px',
            cursor: 'pointer'
        }
        style.push(styleProps)
        return style
    }

  get iconName () { return 'icon name' };

  get showIcon () { return false };

  get caption () { return 'caption' };

  get style () {
    const style: Array<any> = []
    return style
  }

  get cssProperties () {
    const style: Array<any> = []
    return style
  }

  get disabled (): boolean { return false }

  get tabindex (): number { return 1 }

  leftClickHandler (e: any) {
        e.preventDefault()
           console.log()
    }

  rightClickHandler () {
    console.log()
    }

  /** ******************************** Vue Methods **********************************/
}
</script>
