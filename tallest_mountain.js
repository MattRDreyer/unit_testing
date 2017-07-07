
function tallestMountain(heightArray) {
    // let mountains = ["26029", "23251", "20169", "17940", "28838", "8998", "7722"];
    return Math.max.apply(Math, heightArray);
}

module.exports = tallestMountain;
