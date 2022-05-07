<script>
    import WeatherImg from './weather.png'
    import RoadInfoImg from './road_info.png'
</script>

<section id="main">
    <h2>滋賀県コロナ・防災・交通Botについて</h2>
    <p>滋賀県内のあらゆる情報を素早く、わかりやすくお伝えします。</p>

    <h2>提供内容</h2>
    <h3>気象警報・注意報</h3>
    <p>気象庁発表の特別警報・警報・注意報を画像付きでツイートします。</p>
    <p>ツイートイメージ↓</p>
    <img src="{WeatherImg}" alt="長期通行止め情報画像">

    <h3>道路カメラ</h3>
    <p>滋賀県土木交通部道路保全課設置の道路カメラの画像をツイートします。</p>
    <p>夏季期間は0,7,12,15,17,21時、冬季期間は毎時0分と積雪や路面が凍結してる場合は毎時30分も提供します。</p>
    <p>情報提供 : 滋賀県 <a href="http://www.shiga-douro.jp" target="_blank" rel="noopener noreferrer">ロードネット滋賀</a></p>

    <h3>道路積雪・凍結情報</h3>
    <p>滋賀県土木交通部道路保全課管理の道路に設置されているセンサーの情報を提供します。</p>
    <p>冬季期間にのみの提供です。</p>
    <p>情報提供 : 滋賀県土木交通部道路保全課 <a href="http://www.shiga-douro.jp" target="_blank" rel="noopener noreferrer">ロードネット滋賀</a></p>

    <h3>道路長期通行止め情報</h3>
    <p>滋賀県内の長期通行止め情報を発信します。</p>
    <p>情報提供 : 滋賀県土木交通部道路保全課 <a href="http://www.shiga-douro.jp" target="_blank" rel="noopener noreferrer">ロードネット滋賀</a></p>
    <p>ツイートイメージ↓</p>
    <img src="{RoadInfoImg}" alt="長期通行止め情報画像">

    <h3>河川カメラ</h3>
    <p>滋賀県土木交通部流域政策局が提供する河川カメラの情報を提供します。</p>
    <p>対象カメラの河川水位がはん濫注意水位以上になった場合提供します。</p>
    <p>情報提供 : 滋賀県土木交通部流域政策局 <a href="http://c.shiga-bousai.jp" target="_blank" rel="noopener noreferrer">滋賀県　河川防災カメラ</a></p>

    <h3>鉄道運行情報</h3>
    <p>滋賀県内の鉄道運行情報を発信します。</p>

    <p>※冬季期間とは12月から2月のことを指します。</p>
</section>

<style>
    section#main {
        padding: 60px 10px 0 10px;
    }
</style>