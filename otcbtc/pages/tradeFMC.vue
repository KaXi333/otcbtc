
<template>
  <div class="tradeFmcBox">
    <div class="tradeBox">
      <div class="tradeWay">
        <div class="tradeCNY">CNY</div>
        <img src="../static/images/shuangjian@2x.png">
        <p class="tradeFMC">FMC</p>
      </div>
      <div class="tradePriceBox">
        <div class="tradePrice">
          <h3>最新成交均价</h3>
          <p>42475 <span>CNY</span></p>
        </div>
        <div class="tradePrice">
          <h3>市场价</h3>
          <p class="tradePriceR">41955.73 <span>CNY</span></p>
        </div>
      </div>
      <div id="container" style="min-width:100%;height:5rem;margin-top:.4rem;"></div>
      <div class="dayTimeBox">
        <p class="dayTimeBox_active">1天</p>
        <p>3天</p>
        <p>7天</p>
        <p>1月</p>
        <p>1年</p>
      </div>
    </div>
    <div class="heightPrice">
      <div class="heightPriceBorder">
        <h2><img src="../static/images/lv@2x.png"> 最高价格</h2>
        <div class="heightPriceUserBox">
          <div class="heightPriceUser">
            <h3>用户名称</h3>
            <p>100 - 100000 CNY</p>
          </div>
          <div class="heightPriceUser heightPriceUserR">
            <h3>24.3565431</h3>
            <p>CNY/FMC</p>
          </div>
        </div>
        <div class="buyBtn">
          <p>立即购买</p>
        </div>
      </div>
      <div class="heightPriceBorder">
        <h2><img src="../static/images/hong@2x.png"> 最低价格</h2>
        <div class="heightPriceUserBox">
          <div class="heightPriceUser">
            <h3>用户名称</h3>
            <p>100 - 100000 CNY</p>
          </div>
          <div class="heightPriceUser heightPriceUserR">
            <h3>24.3565431</h3>
            <p>CNY/FMC</p>
          </div>
        </div>
        <div class="buyBtn">
          <p>立即购买</p>
        </div>
      </div>
    </div>
    <div class="otherSaleBox">
      <div class="otherSaleTit">
        <h2><img src="../static/images/huang@2x.png">他人出售</h2> 
        <p class="otherSaleMaxPrice">价格最低</p>
        <p class="otherSaleMaxPrice saleActive">信用最好</p>
      </div>
      <div class="otherSaleUserBox">
        <div class="otherSaleUserLeft">
          <h3><img src="../static/images/fanye_yuan@2x.png">用户名称</h3> 
          <p class="credit">信用:</p>
          <p><span>交易 </span><span>630534121</span></p>
          <p><span>好评度 : </span><span>100%</span></p>
          <div class="payImgBox">
            <img class="wxImg" src="../static/images/wx.png">
            <img class="zfbImg" src="../static/images/zfb.png">
            <img class="cardImg" src="../static/images/card.png">
            <img class="visaImg" src="../static/images/visa.png">
          </div>
          <div class="otherSaleBuyBtn">购买</div>
        </div>
        <div class="otherSaleUserRight">
          <div class="otherSaleDetail">
            <h3>出售数量</h3>
            <p><span>13135.12</span><em> FMC</em></p>
          </div>
          <div class="otherSaleDetail">
            <h3>交易限额</h3>
            <p><span>100 - 15151.000</span><em> CNY</em></p>
          </div>
          <div class="otherSaleDetail">
            <h3>单价</h3>
            <p><span>43211</span><em> CNY/FMC</em></p>
          </div>
        </div>
      </div>
      <div class="otherSaleUserBox">
        <div class="otherSaleUserLeft">
          <h3><img src="../static/images/fanye_yuan@2x.png">用户名称</h3> 
          <p class="credit">信用:</p>
          <p><span>交易 </span><span>630534121</span></p>
          <p><span>好评度 : </span><span>100%</span></p>
          <div class="payImgBox">
            <img class="wxImg" src="../static/images/wx.png">
            <img class="zfbImg" src="../static/images/zfb.png">
            <img class="cardImg" src="../static/images/card.png">
            <img class="visaImg" src="../static/images/visa.png">
          </div>
          <div class="otherSaleBuyBtn">购买</div>
        </div>
        <div class="otherSaleUserRight">
          <div class="otherSaleDetail">
            <h3>出售数量</h3>
            <p><span>13135.12</span><em> FMC</em></p>
          </div>
          <div class="otherSaleDetail">
            <h3>交易限额</h3>
            <p><span>100 - 15151.000</span><em> CNY</em></p>
          </div>
          <div class="otherSaleDetail">
            <h3>单价</h3>
            <p><span>43211</span><em> CNY/FMC</em></p>
          </div>
        </div>
      </div>
      <div class="paginationbox">
       <ul class="pagination" >
          <li><img class="" src="../static/images/hui_zuojian@2x.png"></li>
          <li class="paginationActive">1</li>
          <li>2</li>
          <li>3</li>
          <li><img class="" src="../static/images/hei_youjian@2x.png"></li>
        </ul>
      </div>
    </div>
    <div class="recentTradeBox">
      <h2 class="TicBox"><img class="TicBcImg" src="../static/images/huang@2x.png">最近交易</h2>
      <div class="recentTradeTit">
        <p>时间</p>
        <p>金额(CNY)</p>
        <p>数量(FMC)</p>
      </div>
      <div class="recentTradeDec">
        <p>11:02</p>
        <p>0.113.1</p>
        <p><img class="" src="../static/images/=)@2x.png"></p>
        <p>11113.1</p>
      </div>
      <div class="recentTradeDec">
        <p>11:02</p>
        <p>0.113.1</p>
        <p><img class="" src="../static/images/(=@2x.png"></p>
        <p>11113.1</p>
      </div>
      <div class="recentTradeDec">
        <p>11:02</p>
        <p>0.113.1</p>
        <p><img class="" src="../static/images/=)@2x.png"></p>
        <p>11113.1</p>
      </div>
      <div class="recentTradeDec">
        <p>11:02</p>
        <p>0.113.1</p>
        <p><img class="" src="../static/images/=)@2x.png"></p>
        <p>11113.1</p>
      </div>
      <div class="recentTradeDec">
        <p>11:02</p>
        <p>0.113.1</p>
        <p><img class="" src="../static/images/=)@2x.png"></p>
        <p>11113.1</p>
      </div>
    </div>
    <div class="problemBox">
      <h3 class="problemTit"><img src="../static/images/yiwen@2x.png">新手入门</h3>
      <p><span class="problemList"></span>如何使用FMC？</p>
      <p><span class="problemList"></span>如何购买FMC?</p>
      <p><span class="problemList"></span>如何出售FMC?</p>
      <p><span class="problemList"></span>为何价格比交易所高?</p>
      <p><span class="problemList"></span>如何充值?</p>
      <p><span class="problemList"></span>币种交易介绍</p>
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import trade from '../assets/stylus/trade.css'

export default {
  data () {
    return {
      chart:null,
    
    }
  },
  mounted() {
    this.initChart();
  },
  created () {
    
  },
  // async asyncData ({ params }) {   
  //   let { data } = await axios({  
  //       method: 'get',  
  //       url: 'https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?'  
  //   })  
  //   return { data: JSON.stringify(data) }  
  // },  
  methods: {
    initChart(){
      // 初始化图表
      this.chart = new Highcharts.chart('container', {
        chart: {
            zoomType: 'x',
            marginLeft:0,
            marginRight:0
        },
        title: {
            text: null,
        },
        credits: {  
          enabled:false  
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m-%d',
                week: '%m-%d',
                month: '%Y-%m',
                year: '%Y'
            },
            tickPixelInterval:60 
        },
        tooltip: {
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                week: '%m-%d',
                month: '%Y-%m',
                year: '%Y'
            }
        },
        yAxis: {
            title: {
                text: null,
            },
            labels:{
              enabled:false
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'FMC价格',
            data: [
                [1370131200000, 0.7695],
                [1370217600000, 0.7648],
                [1370304000000, 0.7645],
                [1370390400000, 0.7638],
                [1370476800000, 0.7549],
                [1370563200000, 0.7562],
                [1370736000000, 0.7574],
                [1370822400000, 0.7543],
                [1370908800000, 0.751],
                [1370995200000, 0.7498],
                [1371081600000, 0.7477],
                [1371168000000, 0.7492],
                [1371340800000, 0.7487],
                [1371427200000, 0.748],
                [1371513600000, 0.7466],
                [1371600000000, 0.7521],
                [1371686400000, 0.7564],
                [1371772800000, 0.7621],
                [1371945600000, 0.763],
                [1372032000000, 0.7623],
                [1372118400000, 0.7644],
                [1372204800000, 0.7685],
                [1372291200000, 0.7671],
                [1372377600000, 0.7687],
                [1372550400000, 0.7687],
                [1372636800000, 0.7654],
                [1372723200000, 0.7705],
                [1372809600000, 0.7687],
                [1372896000000, 0.7744],
                [1372982400000, 0.7793],
                [1373155200000, 0.7804],
                [1373241600000, 0.777],
                [1373328000000, 0.7824],
                [1373414400000, 0.7705],
                [1373500800000, 0.7635],
                [1373587200000, 0.7652],
                [1373760000000, 0.7656],
                [1373846400000, 0.7655],
                [1373932800000, 0.7598],
                [1374019200000, 0.7619],
                [1374105600000, 0.7628],
                [1374192000000, 0.7609],
                [1374364800000, 0.7599],
                [1374451200000, 0.7584],
                [1374537600000, 0.7562],
                [1374624000000, 0.7575],
                [1374710400000, 0.7531],
                [1374796800000, 0.753],
                [1374969600000, 0.7526],
                [1375056000000, 0.754],
                [1375142400000, 0.754],
                [1375228800000, 0.7518],
                [1375315200000, 0.7571],
                [1375401600000, 0.7529],
                [1375574400000, 0.7532],
                [1375660800000, 0.7542],
                [1375747200000, 0.7515],
                [1375833600000, 0.7498],
                [1375920000000, 0.7473],
                [1376006400000, 0.7494],
                [1376179200000, 0.7497],
                [1376265600000, 0.7519],
                [1376352000000, 0.754],
                [1376438400000, 0.7543],
                [1376524800000, 0.7492],
                [1376611200000, 0.7502],
                [1376784000000, 0.7503],
                [1376870400000, 0.7499],
                [1376956800000, 0.7453],
                [1377043200000, 0.7487]
            ]
        }]
      });
    }
  }
}
</script>
<style scoped>


</style>
