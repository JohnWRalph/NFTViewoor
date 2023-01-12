import axios from 'axios';
import { ethers } from 'ethers';
import getNFTs from "./getNFTs";

function getCounterPartyWalletBalances(addressinput) {
    addressinput = addressinput.value;
    getNFTs(addressinput).then(function (response) {
        // console.log("response is:", response)
        var myNFTs = response.data.ownedNfts;
        let myNFTList = [];

        var cont = document.getElementById("myContainer");

        for (var i = 0; i < myNFTs.length; ++i) {

            //create elements
            var h1 = document.createElement("h1");
            var h3 = document.createElement("h3");

            const hButton = document.createElement("hButton");
            const div = document.createElement("div");
            div.setAttribute("class", "mynftCard");
            div.setAttribute("id", "div" + i);
            var modal = document.getElementById("myModal");
            const img = document.createElement("img");
            // console.log("div.img:", myNFTs);
            const displaytitle = document.createTextNode(myNFTs[i].title);
            var displayDescription = myNFTs[i].metadata.image;
            var displayBalance = document.createTextNode(myNFTs[i].balance);
            const hButtonValue = document.createTextNode("🔎");
            // console.log("displayDesc:", displayDescription);
            // function convertUrlImage(urlImage) {

            if (displayDescription && displayDescription.startsWith("ipfs://ipfs")) {
                // console.log("https://ipfs.io/ipfs/" + displayDescription.slice(11));
                displayDescription = "https://ipfs.io/ipfs/" + displayDescription.slice(11);

            } else if (displayDescription && displayDescription.startsWith("ipfs://")) {
                // console.log("https://ipfs.io/ipfs/" + displayDescription.slice(6));
                displayDescription = "https://ipfs.io/ipfs/" + displayDescription.slice(7);

            }


            // }

            h1.classList.add("h1");
            img.classList.add("img");
            h3.classList.add("h3");

            hButton.classList.add("hButton");
            img.src = displayDescription;

            h1.appendChild(displaytitle);
            h3.append("Number Owned: ", displayBalance);

            hButton.append(hButtonValue);
            div.appendChild(h1);
            div.appendChild(img);
            div.appendChild(h3);

            div.appendChild(hButton);
            cont.appendChild(div);

            var mySelectedNFTsList = [];
            div.dataset.nftindex = i;


            hButton.onclick = function () {
                console.log("I just clicked the search button", response);
                modal.style.display = "block";

                var modalTitle = response.data.ownedNfts[div.dataset.nftindex].title;
                document.getElementById("title").innerHTML = modalTitle;
                var imageSource = response.data.ownedNfts[div.dataset.nftindex].metadata.image;

                if (imageSource && imageSource.startsWith("ipfs://ipfs")) {
                    // console.log("https://ipfs.io/ipfs/" + displayDescription.slice(11));
                    imageSource = "https://ipfs.io/ipfs/" + imageSource.slice(11);

                } else if (imageSource && imageSource.startsWith("ipfs://")) {
                    // console.log("https://ipfs.io/ipfs/" + displayDescription.slice(6));
                    imageSource = "https://ipfs.io/ipfs/" + imageSource.slice(7);

                }
                console.log(response.data.ownedNfts[div.dataset.nftindex])

                document.getElementById("title").innerHTML = ("Title: " + response.data.ownedNfts[div.dataset.nftindex].title);
                // console.log("creator:", response.data.ownedNfts[div.dataset.nftindex].metadata.external_url);
                // console.log(myNFTs[div.dataset.nftindex]);
                document.getElementById("creator").innerHTML = ("Creator: " + response.data.ownedNfts[div.dataset.nftindex].metadata.created_by);
                document.getElementById("imageURL").innerHTML = "<img src='" + imageSource + "'alt='Your NFT will display here'>";
                document.getElementById("description").innerHTML = ("Description: " + response.data.ownedNfts[div.dataset.nftindex].description);
                // document.getElementById("tokenType").innerHTML = response.data.ownedNfts[div.dataset.nftindex].metadata.id.tokenMetadata.tokenType;
                // document.getElementById("contractAddress").innerHTML = response.data.ownedNfts[div.dataset.nftindex].contract.address;

                document.getElementById("externalURL").innerHTML = ("External URL: " + response.data.ownedNfts[div.dataset.nftindex].metadata.external_url);
            }




        }


    })


}


module.exports = getCounterPartyWalletBalances;