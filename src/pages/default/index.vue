<template>
  <div>
    <div>这个是home</div>
    <div>count: {{ count }}</div>
    <button @click="addCount">+3</button>
    <button @click="asyncAddCount">一秒后+3</button>
  </div>
</template>

<script>
export default {
name: "default",
  computed:{
    count(){
      return this.$store.getters.getCount
    }
  },
  methods:{
    addCount(){
      this.$store.commit({type:'addCount',num:3})
    },
    asyncAddCount(){
      setTimeout(()=>{
        this.$store.dispatch({type:'submitAddCount',num:3})
      },1000)
    }
  }
}
</script>

<style scoped>

</style>