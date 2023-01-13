import axios from "axios";
import { ethers } from "ethers";
import { Connection } from '@metaplex/js';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';

function getSolanaNFTs(solanaAddressInput) {

    const connection = new Connection('mainnet-beta');
    const ownerPublickey = solanaAddressInput;
    const nftsmetadata = Metadata.findDataByOwner(connection, ownerPublickey);
    console.log("address:",solanaAddressInput)


    let counter = nftsmetadata.length;
    // console.log("counter: " + counter);

    let counterI = 0;
    for (let i = 0; i < 5; i++) {
        // console.log(nftsmetadata[i]);
        // console.log("NFTDATA: ",nftsmetadata[i])
        counterI += 1;
    }

    // console.log("NFTDATA: ", nftsmetadata)
    let solanaNFTs = [];
    nftsmetadata.then(function (nfts) {
        nfts.forEach(function (nft) {
            fetch(nft.data.uri)
                .then(response => response.json())
                .then(metadata => {
                    // const mySolanaNFTImages = metadata.image;
                    if (metadata.hasOwnProperty("image")) {

                    } else {
                        console.log("No image link found in metadata.")
                    }
                    solanaNFTs.push(metadata);
                });
            // console.log(nft.data.uri);
        });
    });
    return solanaNFTs;
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


}

module.exports = getSolanaNFTs;