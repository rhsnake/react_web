import { useEffect } from "react";

const Riot = () => {

  async function fetchData(){
    try{
      const res = await fetch('https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/rhsnake/sg2?api_key=RGAPI-b338d2d2-a3d5-4209-8789-144ed66bd695')
      const data = await res.json();
      return data
    }catch(err){
        console.log(err)
    }
  }//end of fetchData

  const dataString = JSON.stringify(fetchData());
  useEffect(()=>{
    console.log(fetchData())
  },[]);
  
  return (
    <div id="a">
      {dataString}
    </div>
  )
}

export default Riot