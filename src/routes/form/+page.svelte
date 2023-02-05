<svelte:head>
	<title>お問い合わせフォーム - 滋賀情報ネット News</title>
    <meta property="og:url" content="https://shiga-info.net/form/" />
    <meta property="og:type" content=" article" />
    <meta property="og:title" content="お問い合わせフォーム" />
    <meta property="og:description" content="滋賀県情報ネットのお問い合わせフォームです。。" />
    <meta property="og:site_name" content="滋賀情報ネット" />
    <meta property="og:image" content="" />
    
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
</svelte:head>

<section>
    <h2>滋賀情報ネットプロジェクトお問い合わせフォーム</h2>
    <p>以下のフォームから必要事項をご記入いただきますようお願いします。</p>
    <p><span class="formRequire"></span>がついている項目は必須です</p>
    <form method="post" action="https://shiga-info-net.form.newt.so/v1/ZQ582Z-cx">
        <div class="formContent">
            <p class="formRequire">お名前(イニシャル・ハンドルネーム・ニックネーム可)</p>
            <input type="text" name="name" id="name" required>
        </div>
        <div class="formContent">
            <p class="formRequire">ご返信先eメール</p>
            <input type="email" name="email" id="email" required>
        </div>
        <div class="formContent">
            <p>お問い合わせ種類</p>
            <label><input type="checkbox" name="type" id="project">プロジェクト全体について</label>
            <label><input type="checkbox" name="type" id="bot">滋賀コロナ・防災・交通Botについて</label>
            <label><input type="checkbox" name="type" id="covid">[非公式]滋賀県コロナまとめサイトについて</label>
        </div>
        <div class="formContent">
            <p class="formRequire">お問い合わせ内容</p>
            <textarea name="content" id="content" cols="30" rows="10" required></textarea>
        </div>
        <input type="hidden" id="recaptchaToken" name="googleReCaptchaToken" />
        <button type="submit">送信</button>
    </form>
</section>

<style>
    section {
        padding: 60px 10px 10px 10px;
        max-width: 900px;
        margin: 0 auto;
    }

    form {
        margin: 10px 0 0 0;
    }
    input[type="text"],
    input[type="email"],
    textarea {font-size: .9rem;}
    form label {display: block;}

    .formRequire::after{
        content: '*';
        color: #ee3737;
    }

    div.formContent{margin: 10px 0 0 0;}

    button {
        display: block;
        margin: 10px auto;
    }
</style>