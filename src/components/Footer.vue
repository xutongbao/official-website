<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo_white.png" alt="logo图" />
    </div>
    <p class="address_tel_fax">
      <span>{{$t('footer.address')}}</span>
      <span>{{$t('footer.mobile')}}</span>
    </p>
    <p class="email_wx">
      <span>{{$t('footer.email')}}</span>
    </p>
    <div class="m-record">
      <span class="m-record1">{{$t('footer.num1')}}</span>
      <span class="m-record2" @click="handleClick">京ICP备2021026507号-1</span>
    </div>
    <p class="copy" v-html="$t('footer.copy')"></p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    handleClick(evt) {
      window.open("https://beian.miit.gov.cn", "_blank");
    }
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0 50px;
}
.m-record{text-align: center;color: #d3d3d3;font-size: 12px;}
.m-record2{margin: 0 0 0 5px;}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {
    font-size: 12px;
  }
  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>
