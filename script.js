function openLink() {
    const shadowLinks = [
        "https://summer.gurdit.com/",
        "https://brightbio.justanothersite.net/",
        "https://math.startechcomputacion.com/",
        "https://chaotic-guest-bestie.glacialpower.com/"
    ];
    const velaraLinks = [
        "https://mathprofession.buzz/",
        "https://science.mathforkids.buzz/",
        "https://zearn.buzz/",
        "https://hardmath.buzz/",
        "https://hardenglish.buzz/"
    ];
    const dogeLinks = [
        "https://auraaa.staffordesq.com/",
        "https://schoolsucks.adaptor.cl/",
        "https://verynormalperson.leasingindia.com/",
        "https://illegals-in-my-yard.trustmi.cl/",
        "https://yeah.keybusinessconnection.com/"
    ];
    const froggieLinks = [
        "https://meximathurbanned.global.ssl.fastly.net/",
        "https://frogie.is.a.gooner.my/",
        "https://frogiee-goons-to.teto.wtf/",
        "https://frogie.fucked.diddy.hard.in.the.assenov.net/",
        "https://imasigma.oops.wtf/",
        "https://frog.wine-software.com/",
        "https://i-need.help/"
    ];
    const kazwireLinks = [
        "https://history.lodgegomantak.org/",
        "https://math.westkis.com/",
        "https://art.lexvoip.com/",
        "https://english.hitremixes.com/"
    ];

    const category = document.getElementById("categorySelect").value;
    let link = "";

    if (category === "shadow") {
        link = shadowLinks[Math.floor(Math.random() * shadowLinks.length)];
    } else if (category === "velara") {
        link = velaraLinks[Math.floor(Math.random() * velaraLinks.length)];
    } else if (category === "doge") {
        link = dogeLinks[Math.floor(Math.random() * dogeLinks.length)];
    } else if (category === "froggie") {
        link = froggieLinks[Math.floor(Math.random() * froggieLinks.length)];
    } else if (category === "kazwire") {
        link = kazwireLinks[Math.floor(Math.random() * kazwireLinks.length)];
    }

    window.open(link, "_blank");
}

function updateCount() {
    const linkCount = document.getElementById("linkCount");
    const category = document.getElementById("categorySelect").value;

    const counts = {
        shadow: 4,
        velara: 5,
        doge: 5,
        froggie: 7,
        kazwire: 4
    };

    linkCount.textContent = "Links: " + (counts[category] || 0);
}
document.addEventListener("DOMContentLoaded", updateCount);
