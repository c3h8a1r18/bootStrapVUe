<template>
    <div id="MoreTests">
        <b-icon icon="eraser-fill" scale="4">
        </b-icon>
        <button @click="checkValues('one')">a button</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
    }
})
export default class MoreTests extends Vue {
/* eslint-disable @typescript-eslint/no-explicit-any*/
    public guiList = [    
    ]

    public mapedIconNames: any = {
    }


    checkValues (val:string) {
    let thisArray: any = [];
    let current = this.mapedIconNames[val]
    // this.guiList.forEach((element: any) => {
    //         let current = this.mapedIconNames[element]
    //         thisArray.push(current)
    //     });
    // console.log(thisArray)
    console.log(current)
    }

}

</script>
<style lang="css" scoped>
</style>
