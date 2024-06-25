let count = 0

function onClickLikeButton() {
    count += 1
    if (count === 1) {
        document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        document.getElementById("likeIcon").style.color = "#0967d2";
        document.getElementById("likeButton").style.backgroundColor = "#0967d2";
        document.getElementById("likeButton").style.color = "white";
        count += 1;
    } else {
        document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        document.getElementById("likeIcon").style.color = "#cbd2d9";
        document.getElementById("likeButton").style.backgroundColor = "#cbd2d9";
        document.getElementById("likeButton").style.color = "#9aa5b1";
        count = 0;
    }
}