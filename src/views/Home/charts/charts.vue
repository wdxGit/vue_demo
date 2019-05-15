<template>
  <div class="charts">
    <div class="title">
      <div class="today_amount">
        <p>今日商户交易金额</p>
        <p>&yen;200.00</p>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'charts',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.charts{
  min-height: 100%;
}
.title{
  width: 1600px;
  height: 215px;
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 5px;
}
.today_amount{
  width: 313px;
  height: 170px;
  margin: 20px 50px 0 29px;
  background-image: url('./images/today_amount.png') ;
}
</style>
