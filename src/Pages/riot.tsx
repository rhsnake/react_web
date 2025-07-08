import { useEffect } from "react";

const Riot = () => {

  async function fetchData(){
    try{
      const res = await fetch('https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/rhsnake/sg2?api_key=RGAPI-76ce8a08-e1b0-49b7-94b1-d57fdfdd9529')
      const data = await res.json();
      return data
    }catch(err){
        console.log(err)
    }
  }//end of fetchData

  useEffect(()=>{
    console.log(fetchData());
  },[]);
  return (
    <div>RIOT GAMESSS</div>
  )
}

export default Riot