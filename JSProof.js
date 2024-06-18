/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

const mintedNFT =[];

function mintNFT(audioName, artist, audioURL){
      const NFT ={
         audioName, artist, audioURL
      };
      mintedNFT.push(NFT);
}

function listNFTs(){
   for(let i=0;i<mintedNFT.length;i++){
      console.log("ID  :  ", (i+1));
      console.log("Audio Name  : ", mintedNFT[i].audioName);
      console.log("Artist Name  : ", mintedNFT[i].artist);
      console.log("Audio URL  : ", mintedNFT[i].audioURL);
   }
}
function getTotalSupply(){
   console.log("Total Number of NFTs  :", mintedNFT.length);
}

mintNFT("God Damm","Badshah","https://open.spotify.com/track/209QxKVJzh2FLUmZHpYs4m");
mintNFT("Blue Eye","Honey Singh","https://open.spotify.com/track/7wW9scVNLYFLsmBb1yAUmS");
mintNFT("Magenta Riddim","DJ Snake","https://open.spotify.com/track/3dsyqPDiWYYilRZNBxgxHE");
listNFTs();
getTotalSupply();
