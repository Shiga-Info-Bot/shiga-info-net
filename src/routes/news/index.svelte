<script context="module">
    export async function load({ url }) {
        const apiUrl = `${url.origin}/news/list.json?limit=10`
        console.log(apiUrl)
        const res = await fetch(apiUrl)
        if (!res.ok) {
            return
        }
        let newsContentList = await res.json()
        newsContentList = newsContentList.items
        return {
            props: { newsContentList },
        }
    }
</script>
<script>
    export let newsContentList;
</script>

<section>
    <div class="news_list">
        {#each newsContentList as newsContent }
            <a 
                class="news_wrap"
                href="/news/{ newsContent._id }"
            >
                <div class="newsImage">
                    <img src="{ newsContent.thumbnail.src }" alt="">
                </div>
                <div class="newsTexts">
                    <span class="newsTitle">{ newsContent.title }</span>
                    <span class="newsDate">{ newsContent.day.substring(0,10) }</span>
                </div>
            </a>
        {/each}
    </div>
</section>

<style>
    section {
        padding: 60px 10px 10px 10px;
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
</style>