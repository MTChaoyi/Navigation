import toast from "../util/toast.js";

const sentence_text = document.querySelector("body > div > div > div.logo-box > span")

let getSentence = async () => {
    let response = await fetch('https://v1.hitokoto.cn/?c=a&c=b&c=f&c=j&min_length=18&max_length=26&encode=json').catch(e => {
        toast.fail(e)
    });
    if (response.ok) {
        let json = await response.json();
        return json
    } else {
        toast.fail("HTTP-Error: " + response.status);
    }
}

getSentence().then(res => {
    sentence_text.textContent = res.hitokoto;
})