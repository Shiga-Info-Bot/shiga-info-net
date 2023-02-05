<script>
    import Covid19HP from "./indexfiles/covid19-shiga.jpg"
    import TwitterLogo from "./indexfiles/twitter_logo_white.png"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
	<title>{ data.page.pageName }</title>
    <meta property="og:url" content="https://shiga-info.net/news/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{ data.page.pageName }" />
    <meta property="og:description" content="{ data.page.description }" />
    <meta property="og:site_name" content="{ data.page.pageName }" />
    <meta property="og:image" content="{ data.page.ogImage.src }" />
</svelte:head>


<section id="top" style="background-image: url({ data.page.topImage.src });">
    <div id="title_wrap">
        <p class="title">これまでも、これからも、</p>
        <p class="title">滋賀の役立つ情報を</p>
        <p class="title">あなたの手に。</p>
    </div>
    <div id="top_wave_wrap">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"  preserveAspectRatio="none"><style>
            .path-0{
                animation:pathAnim-0 4s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
            @keyframes pathAnim-0{
                0%{
                d: path("M 0,400 C 0,400 0,200 0,200 C 135.46666666666664,226.26666666666665 270.9333333333333,252.53333333333333 427,242 C 583.0666666666667,231.46666666666667 759.7333333333333,184.13333333333333 932,171 C 1104.2666666666667,157.86666666666667 1272.1333333333332,178.93333333333334 1440,200 C 1440,200 1440,400 1440,400 Z");
                }
                25%{
                d: path("M 0,400 C 0,400 0,200 0,200 C 109.73333333333335,210.66666666666666 219.4666666666667,221.33333333333331 392,217 C 564.5333333333333,212.66666666666669 799.8666666666666,193.33333333333334 985,188 C 1170.1333333333334,182.66666666666666 1305.0666666666666,191.33333333333331 1440,200 C 1440,200 1440,400 1440,400 Z");
                }
                50%{
                d: path("M 0,400 C 0,400 0,200 0,200 C 194.2666666666667,173.33333333333334 388.5333333333334,146.66666666666669 533,153 C 677.4666666666666,159.33333333333331 772.1333333333334,198.66666666666666 915,212 C 1057.8666666666666,225.33333333333334 1248.9333333333334,212.66666666666669 1440,200 C 1440,200 1440,400 1440,400 Z");
                }
                75%{
                d: path("M 0,400 C 0,400 0,200 0,200 C 150.13333333333333,204.26666666666665 300.26666666666665,208.53333333333333 440,223 C 579.7333333333333,237.46666666666667 709.0666666666666,262.1333333333333 874,260 C 1038.9333333333334,257.8666666666667 1239.4666666666667,228.93333333333334 1440,200 C 1440,200 1440,400 1440,400 Z");
                }
                100%{
                d: path("M 0,400 C 0,400 0,200 0,200 C 135.46666666666664,226.26666666666665 270.9333333333333,252.53333333333333 427,242 C 583.0666666666667,231.46666666666667 759.7333333333333,184.13333333333333 932,171 C 1104.2666666666667,157.86666666666667 1272.1333333333332,178.93333333333334 1440,200 C 1440,200 1440,400 1440,400 Z");
                }
            }</style><path d="M 0,400 C 0,400 0,200 0,200 C 135.46666666666664,226.26666666666665 270.9333333333333,252.53333333333333 427,242 C 583.0666666666667,231.46666666666667 759.7333333333333,184.13333333333333 932,171 C 1104.2666666666667,157.86666666666667 1272.1333333333332,178.93333333333334 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f6fcff" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
    </div>
</section>
<section id="main">
    <div class="main_wrap">
        { @html data.page.mainText }
    </div>

    <div class="main_wrap">
        <h2>Projects</h2>
        <div id="project_wrap">
            <a
                class="project_wrap hp"
                href="https://stopcovid19-shiga.jp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Covid19HP} alt="琵琶湖の画像">
                <span>[非公式]滋賀県コロナまとめサイト</span>
            </a>
            <a
                class="project_wrap twitter"
                href="https://twitter.com/covid19_shiga/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={TwitterLogo} alt="twitterの画像">
                <span>滋賀コロナ・防災・交通Bot</span>
            </a>
        </div>
    </div>
</section>
<section id="news">
    <h2>News</h2>
    <div class="news_list">
        {#each data.news.items as newsContent }
            <a 
                class="news_wrap"
                href="/news/{ newsContent._id }"
            >
                <div class="newsImage">
                    <img src="{ newsContent.thumbnail.src }" alt="">
                </div>
                <div class="newsTexts">
                    <span class="newsTitle">{ newsContent.title }</span>
                    <span class="newsDate">
                        {new Date(newsContent.day).getFullYear() }/{ new Date(newsContent.day).getMonth() + 1 }/{ new Date(newsContent.day).getDate() } 
                        { new Date(newsContent.day).getHours().toString().padStart(2, '0') }:{ new Date(newsContent.day).getMinutes().toString().padStart(2, '0') }
                    </span>
                </div>
            </a>
        {/each}
    </div>
    <a href="/news">ニュース一覧を見る</a>
</section>

<section id="form">
    <a href="/form/">お問い合わせはこちらから!!</a>
</section>

<style>
    section#top {
        padding: 80px 0 0 0;
        background-image: url("https://cdn.discordapp.com/attachments/875348328005632050/968106543457394708/unknown.png");
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        width: 100%;
        position: relative;
    }
    section#top div#title_wrap {
        transform: translate(-2%, 20%);
        margin-left: 10%;
    }
    section#top div#title_wrap p {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 5px 0; padding: 2px 5px;
        background-color: #BAE6FF;
        width: fit-content;
    }
    section#top div#top_wave_wrap {
        width: 100%; height: 80px;
        display: flex;
    }

    section#main,
    section#news,
    section#form {
        padding: 0 10px 10px 10px;
        max-width: 900px;
        margin: 0 auto;
    }
    section#main p {margin: 0 0 4px 0;}
    section#main p span{
        display: inline-block;
    }
    section#main div.main_wrap {
        margin-bottom: 20px;
    }
    section#main div.main_wrap #project_wrap {display: flex; overflow-x: scroll;}
    section#main div.main_wrap #project_wrap a {text-decoration: none;}

    a.project_wrap {
        border-radius: 10px;
        flex: 0 0 200px;
        margin: 2vw;
    }
    a.project_wrap.twitter {background-color: #1b9df0;}
    a.project_wrap.hp {background-color: #ffffff;}

    a.project_wrap img{
        display: block;
        width: 105px;
        margin: 0 auto; padding: 10px;
        box-sizing: border-box;
    }
    a.project_wrap.twitter img{padding: 13%; margin:  10px auto;}

    a.project_wrap span{
        display: block;
        font-size: 1.1rem;
        font-weight: bold;
        text-align: center;
        margin: 10px;
    }

    a.news_wrap {
        width: 100%;
        margin: 20px 0;
        padding: 15px;
        background-color: #fefefe;
        border-radius: 10px;
        box-sizing: border-box;
        text-decoration: none;
        display: flex;

        box-shadow: 9px 9px 2rem rgba(0,0,0,.12);
    }
    a.news_wrap div.newsImage{
        width: 20%;
        height: 100px;
    }
    a.news_wrap div.newsImage img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    a.news_wrap div.newsTexts{
        width: 80%;
    }
    a.news_wrap div.newsTexts span.newsTitle {
        font-size: 1.1rem;
        font-weight: bold;
    }
    a.news_wrap div.newsTexts span {
        display: block;
        margin: 2px 10px;
    }
    section a[href="/news"]{
        position: relative;
        font-weight: bold;
        text-decoration: none;
        margin: 0 40px 0 auto;
    }
    section a[href="/news"]::before{
        position: absolute;
        content: "";
        width: 170px; height: 3px;
        background-color: #121212;
        bottom: 0; left: 0;
    }
    section a[href="/news"]::after{
        position: absolute;
        content: "";
        width: 20px; height: 3px;
        background-color: #121212;
        bottom: 0px; left: 150px;
        transform: rotate(45deg) translate(-22%,-218%);
    }

    section#form a{
        display: block;
        background: #BAE6FF;
        font-weight: 700;
        text-decoration: none;

        margin: 10px auto;
        padding: 0 25px;
        
        height: 48px;
        line-height: 49px;
        border-radius: 26px;
    }
</style>