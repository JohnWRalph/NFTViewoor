import axios from "axios";
import { ethers } from "ethers";
import { Connection } from '@metaplex/js';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';

function getNFTs(addressinput) {
    const apiKey = "9kNXbHSC4XEBluKh72dg644UOMK74Y7C";
    const baseNFTURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs`;
    // const tokenURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
    const ownerAddr = addressinput;
    // Construct the axios request:
    var config = {
        method: 'get',
        url: `${baseNFTURL}?owner=${ownerAddr}`
    };
    //   Getting eth balance
    var data = JSON.stringify({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "eth_getBalance",
        "params": [
            ownerAddr, 'latest',
        ]
    });

    var configEth = {
        method: 'post',
        url: `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        data: data
    };

    // axios(configEth)
    //     .then(function (response) {
    //         let balance = response['data']['result'];
    //         myBalance = ethers.utils.formatEther(balance);

    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // Construct the axios request:
    var config = {
        method: 'get',
        url: `${baseNFTURL}?owner=${ownerAddr}`
    };


    //     const connection = new Connection('mainnet-beta');
    //     const ownerPublickey = '6yqm5QUft621gmuVFht6USz1CbkZUwprUpa45HnvrG1m';
    //     const nftsmetadata = Metadata.findDataByOwner(connection, ownerPublickey);



    //     let counter = nftsmetadata.length;
    //     console.log("counter: " + counter);

    //     let counterI = 0;
    //     for (let i = 0; i < 5; i++) {
    //         console.log(nftsmetadata[i]);
    //         // console.log("NFTDATA: ",nftsmetadata[i])
    //         counterI += 1;
    //     }

    //     console.log("NFTDATA: ", nftsmetadata)
    //     let solanaNFTs = [];
    //     nftsmetadata.then(function (nfts) {
    //         nfts.forEach(function (nft) {
    //             fetch(nft.data.uri)
    //                 .then(response => response.json())
    //                 .then(metadata => {
    //                     // const mySolanaNFTImages = metadata.image;
    //                     if (metadata.hasOwnProperty("image")) {

    //                     } else {
    //                         console.log("No image link found in metadata.")
    //                     }
    //                     solanaNFTs.push(metadata);
    //                 });
    //             // console.log(nft.data.uri);
    //         });
    //     });
    // console.log(solanaNFTs);
    /*
    
    {
       MetadataData {
      key: 4,
      updateAuthority: '9SuDMwgmCFP8CEmBELScujDd9dqVZxBkA15VCV1nFkT4',
      mint: 'ANf44K4fLaD4heoKvTXzAfQorktH6XVKpGmwy9CQu2Xs',
      data: MetadataDataData {
        name: 'Lion Punk King',
        symbol: 'NFTPro',
        uri: 'https://www.arweave.net/5H1NMgzOvyAZWGzBgLFx27z-tYSInjimYbAC9bIWKLM?ext=json',
        sellerFeeBasisPoints: 700,
        creators: [Array]
      },
      primarySaleHappened: 0,
      isMutable: 1,
      editionNonce: 255,
      tokenStandard: undefined,
      collection: undefined,
      uses: undefined
    },
    MetadataData {
      key: 4,
      updateAuthority: '9SuDMwgmCFP8CEmBELScujDd9dqVZxBkA15VCV1nFkT4',
      mint: '2ofgix8pr8eALYrxzQ31UAWyi9XU9sCJBJZdJub49ZwR',
      data: MetadataDataData {
        name: 'Ape Bird Punk GOD',
        symbol: 'NFTPro',
        uri: 'https://www.arweave.net/vPDq-tNr91seOWrXNNU0RJ1O9rAxZWOrN50gYyevCoA?ext=json',
        sellerFeeBasisPoints: 700,
        creators: [Array]
      },
      primarySaleHappened: 0,
      isMutable: 1,
      editionNonce: 255,
      tokenStandard: undefined,
      collection: undefined,
      uses: undefined
    }
    */
    return new Promise(function (resolve) {
        axios(config).then(function (response) {
            resolve(response)
        })
    })


}

module.exports = getNFTs;