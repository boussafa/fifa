import React from "react";
import Player from './Player.js';
import Players from './Players';
const PlayersList = ()=>{
return (
<>

{Players.map(
    (element)=>(
<Player {...element}/>
    )
)
}
</>
)

}
export default PlayersList;